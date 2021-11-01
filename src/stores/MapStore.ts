import { action, makeObservable, observable } from 'mobx';
import RootStore from './RootStore';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Sketch from '@arcgis/core/widgets/Sketch';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Polygon from '@arcgis/core/geometry/Polygon';
import { baseUrl, unit } from '../utils/constants';
import axios from 'axios';

export default class MapStore {
  rootStore: RootStore;
  map!: __esri.Map;
  noFlyLayer!: __esri.GraphicsLayer;
  sketchLayer!: __esri.GraphicsLayer;
  sketch!: __esri.Sketch;
  sketchState!: string;
  noFlyObject: __esri.Graphic | undefined;
  sketchObject: __esri.Graphic | undefined;
  intersection: __esri.Graphic | undefined;
  intersectionArea: string | undefined;
  totalArea: string | undefined;
  canFly: string | undefined;
  canSketch: boolean;
  view: MapView | undefined;

  constructor(rootStore: RootStore) {
    // HINT: you can add additional observable properties to this class
    // https://mobx.js.org/observable-state.html
    makeObservable(this, { sketchState: observable, setSketchState: action });
    this.rootStore = rootStore;
    this.setSketchState('idle');
    this.canSketch = true;
  }

  setSketchState(state: string) {
    this.sketchState = state;
  }

  constructMap(container: string) {
    this.sketchLayer = new GraphicsLayer();
    this.noFlyLayer = new GraphicsLayer();

    // Define a symbol
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html
    const symbol = {
      type: 'simple-fill',
      color: [51, 51, 204, 0.2],
      style: 'solid',
      outline: {
        color: 'white',
        width: 2,
      },
    };

    this.noFlyObject = new Graphic({
      geometry: new Polygon({
        spatialReference: { wkid: 102100 },
        rings: [
          [
            [-9278977.502393615, 5196972.662366206],
            [-9278404.224681476, 5197240.191965203],
            [-9274505.936238931, 5195673.232885358],
            [-9275518.726863708, 5190055.1113064],
            [-9278881.956108259, 5189061.429938688],
            [-9280869.318843672, 5188660.135540191],
            [-9282646.479751302, 5192481.986954449],
            [-9278977.502393615, 5196972.662366206],
          ],
        ],
      }),
      symbol,
    });

    // Construct map graphic
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
    this.noFlyLayer.add(this.noFlyObject);

    // Create the map and add the graphics layer
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html
    this.map = new ArcGISMap({
      basemap: 'streets-vector',
      layers: [this.noFlyLayer, this.sketchLayer],
    });

    // Set the map view, including location and zoom level
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
    const view = new MapView({
      map: this.map,
      container,
      center: [-83.35447311401367, 42.23982914405], // Longitude, latitude
      zoom: 11,
    });

    this.view = view;

    // When the view finishes loading, add the sketch widget
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html
    view.when(() => {
      this.sketch = new Sketch({
        layer: this.sketchLayer,
        view,
        visibleElements: {
          createTools: { point: false, polygon: false, polyline: false },
          selectionTools: { 'lasso-selection': false, 'rectangle-selection': false },
          settingsMenu: false,
          undoRedoMenu: false,
        },
        creationMode: 'update', // graphic will be selected as soon as it is created
      });
      view.ui.add(this.sketch, 'top-right');

      this.sketch.on('create', this.sketchCreate);
      this.sketch.on('delete', this.sketchDelete);
      this.sketch.on('update', this.sketchUpdate);
      view.on('click', event => {
        view.popup.open({
          title: this.canFly,
          content: `The total area is ${this.totalArea} ${unit.sentence}
          </br>
          The intersection area of this zone with a no fly zone is ${this.intersectionArea} ${unit.sentence}`,
          location: event.mapPoint, // Set the location of the popup to the clicked location
        });
      });
    });
  }

  sketchUpdate = async (event: __esri.SketchUpdateEvent) => {
    if (event.state !== 'complete') return;
    if (event.graphics.length > 0) {
      await this.compute(this.noFlyObject?.geometry, event.graphics[0].geometry, true);
    }
  };

  sketchDelete = async (event: __esri.SketchDeleteEvent) => {
    this.noFlyLayer.remove(<Graphic>this.intersection);
    this.view?.popup.close();
  };

  sketchCreate = async (event: __esri.SketchCreateEvent) => {
    this.setSketchState(event.state);
    if (event.state !== 'complete') return;
    await this.compute(this.noFlyObject?.geometry, event.graphic.geometry, false);
  };

  compute = async (noFlyObject: any, drawnObject: any, update: boolean) => {
    if (update) {
      this.noFlyLayer.remove(<Graphic>this.intersection);
    }

    const intersection = geometryEngine.intersect(noFlyObject, drawnObject);

    const totalPolygon = new Polygon({
      spatialReference: { wkid: 102100 },
      rings: drawnObject?.rings,
    });

    this.sketchObject = drawnObject;
    this.totalArea = geometryEngine.geodesicArea(totalPolygon, unit.unit).toFixed(2);

    if (intersection == null) {
      this.intersectionArea = 0.0;
      this.canItFly();
    } else {
      const intersectionGraphic = new Graphic({
        geometry: intersection,
        symbol: {
          type: 'simple-fill',
          style: 'cross',
          color: 'green',
          outline: {
            color: 'green',
          },
        },
      });

      this.intersection = intersectionGraphic;
      this.noFlyLayer.add(intersectionGraphic);

      const intersectionPolygon = new Polygon({
        spatialReference: { wkid: 102100 },
        rings: intersection?.rings,
      });

      this.intersectionArea = geometryEngine.geodesicArea(intersectionPolygon, unit.unit).toFixed(2);
      this.canItFly();
    }
  };

  canItFly = () => {
    axios
      .post(baseUrl + '/canIFly', { intersectionArea: this.intersectionArea })
      .then(res => {
        this.canFly = res.data.canFly;
      })
      .catch(() => {
        this.canFly = 'We could not determine if this area is flyable.';
      });
  };

  cleanup() {
    // Todo, remove any listeners
    this.sketch.destroy();
    this.setSketchState('idle');
  }
}
