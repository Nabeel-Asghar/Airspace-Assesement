/*! For license information please see vendors.bundle.js.LICENSE.txt */
(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[1216],{22696:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>T});var r,n=i(56140),s=i(28293),o=i(32105),a=i(58385),l=i(82550),h=i(809),c=i(1721),u=i(36544),p=i(59472),d=i(39105),f=i(10923),y=i(79881),g=(i(68055),i(95830),i(87566)),m=i(60538),v=i(73032),b=i(32797),_=i(80192),w=i(93776),x=i(87837);let C=0;const S=u.Z.getLogger("esri.Basemap");let M=r=class extends((0,a.eC)(h.Z)){constructor(t){super(t),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+C++,this.baseLayers=new s.Z,this.referenceLayers=new s.Z;const e=t=>{t.parent&&t.parent!==this&&"remove"in t.parent&&t.parent.remove(t),t.parent=this,"elevation"===t.type&&S.error(`Layer '${t.title}, id:${t.id}' of type '${t.type}' is not supported as a basemap layer and will therefore be ignored.`)},i=t=>{t.parent=null};this.baseLayers.on("after-add",(t=>e(t.item))),this.referenceLayers.on("after-add",(t=>e(t.item))),this.baseLayers.on("after-remove",(t=>i(t.item))),this.referenceLayers.on("after-remove",(t=>i(t.item)))}initialize(){this.when().catch((t=>{S.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,t)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var t;const e=this.baseLayers.removeAll();for(const t of e)t.destroy();const i=this.referenceLayers.removeAll();for(const t of i)t.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(t=this.portalItem)||t.destroy(),this.portalItem=null}normalizeCtorArgs(t){return t&&"resourceInfo"in t&&(this._set("resourceInfo",t.resourceInfo),delete(t={...t}).resourceInfo),t}set baseLayers(t){this._set("baseLayers",(0,o.Z)(t,this._get("baseLayers")))}_writeBaseLayers(t,e,i){const r=[];t?(i={...i,layerContainerType:"basemap"},this.baseLayers.forEach((t=>{const e=(0,x.Nw)(t,i.webmap?i.webmap.getLayerJSONFromResourceInfo(t):null,i);(0,p.pC)(e)&&r.push(e)})),this.referenceLayers.forEach((t=>{const e=(0,x.Nw)(t,i.webmap?i.webmap.getLayerJSONFromResourceInfo(t):null,i);(0,p.pC)(e)&&(e.isReference=!0,r.push(e))})),e.baseMapLayers=r):e.baseMapLayers=r}set referenceLayers(t){this._set("referenceLayers",(0,o.Z)(t,this._get("referenceLayers")))}writeTitle(t,e){e.title=t||"Basemap"}load(t){return this.addResolvingPromise(this._loadFromSource(t)),Promise.resolve(this)}loadAll(){return(0,c.GZ)(this,(t=>{t(this.baseLayers,this.referenceLayers)}))}clone(){const t={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(t.loadStatus="loaded"),new r({resourceInfo:this.resourceInfo}).set(t)}read(t,e){this.resourceInfo||this._set("resourceInfo",{data:t,context:e}),super.read(t,e)}write(t,e){return t=t||{},e&&e.origin||(e={origin:"web-map",...e}),super.write(t,e),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(t.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((t=>{const e=(0,l.d9)(t);return e.url&&(0,f.oC)(e.url)&&(e.url=`https:${e.url}`),e.templateUrl&&(0,f.oC)(e.templateUrl)&&(e.templateUrl=`https:${e.templateUrl}`),e}))),t}async _loadFromSource(t){const{resourceInfo:e,portalItem:i}=this;(0,d.k_)(t);const r=[];if(e){const i=e.context?e.context.url:null;if(r.push(this._loadLayersFromJSON(e.data,i,t)),e.data.id&&!e.data.title){const t=e.data.id;r.push((0,w.g)(t).then((t=>{t&&this.read({title:t},e.context)})))}}else i&&r.push(this._loadFromItem(i,t));await Promise.all(r)}async _loadLayersFromJSON(t,e,r){const n=this.resourceInfo&&this.resourceInfo.context,s=this.portalItem&&this.portalItem.portal||n&&n.portal||null,o=n&&"web-scene"===n.origin?"web-scene":"web-map",{populateOperationalLayers:a}=await i.e(7254).then(i.bind(i,87254)),l=[];if((0,d.k_)(r),t.baseMapLayers&&Array.isArray(t.baseMapLayers)){const i={context:{origin:o,url:e,portal:s,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},r=a(this.baseLayers,t.baseMapLayers.filter((t=>!t.isReference)),i);l.push(r);const n=a(this.referenceLayers,t.baseMapLayers.filter((t=>t.isReference)),i);l.push(n)}await(0,d.as)(l)}async _loadFromItem(t,e){const i=await t.load(e),r=await i.fetchData("json",e),n=(0,f.mN)(t.itemUrl);return this._set("resourceInfo",{data:r.baseMap,context:{origin:"web-map",portal:t.portal||b.Z.getDefault(),url:n}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:r.spatialReference},this.resourceInfo.context),this.read({title:t.title,thumbnailUrl:t.thumbnailUrl},{origin:"portal-item",portal:t.portal||b.Z.getDefault(),url:n}),this._loadLayersFromJSON(this.resourceInfo.data,n,e)}static fromId(t){const e=w.s[t];return e?r.fromJSON(e):null}};(0,n._)([(0,y.Cb)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(t,e,i,r){this._writeBaseLayers(t,e,r)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:s.Z}},writer(t,e,i,r){this._writeBaseLayers(t,e,r)}}}}}})],M.prototype,"baseLayers",null),(0,n._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{write:!0}}}})],M.prototype,"id",void 0),(0,n._)([(0,y.Cb)({type:_.default})],M.prototype,"portalItem",void 0),(0,n._)([(0,y.Cb)()],M.prototype,"referenceLayers",null),(0,n._)([(0,y.Cb)({readOnly:!0})],M.prototype,"resourceInfo",void 0),(0,n._)([(0,y.Cb)({type:v.Z})],M.prototype,"spatialReference",void 0),(0,n._)([(0,y.Cb)()],M.prototype,"thumbnailUrl",void 0),(0,n._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],M.prototype,"title",void 0),(0,n._)([(0,m.c)("title")],M.prototype,"writeTitle",null),M=r=(0,n._)([(0,g.j)("esri.Basemap")],M);const T=M},78745:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var r=i(66039),n=i(33655),s=i(59472),o=i(68055);function a(t){return(0,n.uZ)((0,o.vU)(t),0,255)}function l(t,e,i){return t=Number(t),isNaN(t)?i:t<e?e:t>i?i:t}class h{constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}static blendColors(t,e,i,r=new h){return r.r=Math.round(t.r+(e.r-t.r)*i),r.g=Math.round(t.g+(e.g-t.g)*i),r.b=Math.round(t.b+(e.b-t.b)*i),r.a=t.a+(e.a-t.a)*i,r._sanitize()}static fromRgb(t,e){const i=t.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(i){const t=i[2].split(/\s*,\s*/),n=i[1];if("rgb"===n&&3===t.length||"rgba"===n&&4===t.length){const i=t[0];if("%"===i.charAt(i.length-1)){const i=t.map((t=>2.56*parseFloat(t)));return 4===t.length&&(i[3]=parseFloat(t[3])),h.fromArray(i,e)}return h.fromArray(t.map((t=>parseFloat(t))),e)}if("hsl"===n&&3===t.length||"hsla"===n&&4===t.length)return h.fromArray((0,r.B7)(parseFloat(t[0]),parseFloat(t[1])/100,parseFloat(t[2])/100,parseFloat(t[3])),e)}return null}static fromHex(t,e=new h){if(4!==t.length&&7!==t.length||"#"!==t[0])return null;const i=4===t.length?4:8,r=(1<<i)-1;let n=Number("0x"+t.substr(1));return isNaN(n)?null:(["b","g","r"].forEach((t=>{const s=n&r;n>>=i,e[t]=4===i?17*s:s})),e.a=1,e)}static fromArray(t,e=new h){return e._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(e.a)&&(e.a=1),e._sanitize()}static fromString(t,e){const i=(0,r.h$)(t);return i&&h.fromArray(i,e)||h.fromRgb(t,e)||h.fromHex(t,e)}static fromJSON(t){return t&&new h([t[0],t[1],t[2],t[3]/255])}static toUnitRGB(t){return(0,s.pC)(t)?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return(0,s.pC)(t)?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(t){if("string"==typeof t)h.fromString(t,this);else if(Array.isArray(t))h.fromArray(t,this);else{var e,i,r,n;this._set(null!=(e=t.r)?e:0,null!=(i=t.g)?i:0,null!=(r=t.b)?r:0,null!=(n=t.a)?n:1),t instanceof h||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const t=this.r.toString(16),e=this.g.toString(16),i=this.b.toString(16);return`#${t.length<2?"0"+t:t}${e.length<2?"0"+e:e}${i.length<2?"0"+i:i}`}toCss(t=!1){const e=this.r+", "+this.g+", "+this.b;return t?`rgba(${e}, ${this.a})`:`rgb(${e})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=0){const e=a(this.r),i=a(this.g),r=a(this.b);return 0===t||1!==this.a?[e,i,r,a(255*this.a)]:[e,i,r]}clone(){return new h(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}_sanitize(){return this.r=Math.round(l(this.r,0,255)),this.g=Math.round(l(this.g,0,255)),this.b=Math.round(l(this.b,0,255)),this.a=l(this.a,0,1),this}_set(t,e,i,r){this.r=t,this.g=e,this.b=i,this.a=r}}h.prototype.declaredClass="esri.Color";const c=h},15988:(t,e,i)=>{"use strict";i.d(e,{Z:()=>g});var r,n=i(56140),s=i(36348),o=i(58484),a=i(99702),l=i(58385),h=i(82550),c=i(59472),u=i(32366),p=i(79881),d=(i(68055),i(95830),i(36544),i(87566)),f=i(56885);let y=r=class extends l.wq{constructor(...t){super(...t),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,u.D)(),configurable:!0})}normalizeCtorArgs(t,e,i,r){return t&&!t.declaredClass?t:{geometry:t,symbol:e,attributes:i,popupTemplate:r}}set attributes(t){const e=this._get("attributes");e!==t&&(this._set("attributes",t),this._notifyLayer("attributes",e,t))}set geometry(t){const e=this._get("geometry");e!==t&&(this._set("geometry",t),this._notifyLayer("geometry",e,t))}set symbol(t){const e=this._get("symbol");e!==t&&(this._set("symbol",t),this._notifyLayer("symbol",e,t))}set visible(t){const e=this._get("visible");e!==t&&(this._set("visible",t),this._notifyLayer("visible",e,t))}getEffectivePopupTemplate(t=!1){if(this.popupTemplate)return this.popupTemplate;for(const e of[this.sourceLayer,this.layer])if(e){if("popupTemplate"in e&&e.popupTemplate)return e.popupTemplate;if(t&&"defaultPopupTemplate"in e&&(0,c.pC)(e.defaultPopupTemplate))return e.defaultPopupTemplate}return null}getAttribute(t){return this.attributes&&this.attributes[t]}setAttribute(t,e){if(this.attributes){const i=this.getAttribute(t);this.attributes[t]=e,this._notifyLayer("attributes",i,e,t)}else this.attributes={[t]:e},this._notifyLayer("attributes",void 0,e,t)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:(0,c.pC)(this.geometry)?this.geometry.toJSON():null,symbol:(0,c.pC)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new r(this.cloneProperties())}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}cloneProperties(){return{attributes:(0,h.d9)(this.attributes),geometry:(0,h.d9)(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:(0,h.d9)(this.symbol),visible:this.visible}}_notifyLayer(t,e,i,r){if(!this.layer||!("graphicChanged"in this.layer))return;const n={graphic:this,property:t,oldValue:e,newValue:i};"attributes"===t&&(n.attributeName=r),this.layer.graphicChanged(n)}};(0,n._)([(0,p.Cb)({value:null})],y.prototype,"attributes",null),(0,n._)([(0,p.Cb)({value:null,types:s.qM,json:{read:f.im}})],y.prototype,"geometry",null),(0,n._)([(0,p.Cb)({type:Boolean})],y.prototype,"isAggregate",void 0),(0,n._)([(0,p.Cb)()],y.prototype,"layer",void 0),(0,n._)([(0,p.Cb)({type:o.Z})],y.prototype,"popupTemplate",void 0),(0,n._)([(0,p.Cb)()],y.prototype,"sourceLayer",void 0),(0,n._)([(0,p.Cb)({value:null,types:a.LB})],y.prototype,"symbol",null),(0,n._)([(0,p.Cb)({type:Boolean,value:!0})],y.prototype,"visible",null),y=r=(0,n._)([(0,d.j)("esri.Graphic")],y),(y||(y={})).generateUID=u.D;const g=y},44095:(t,e,i)=>{"use strict";i.d(e,{Z:()=>G});var r,n=i(56140),s=i(22696),o=i(78745),a=i(28293),l=i(32105),h=i(94588),c=i(32656),u=i(58385),p=i(82550),d=i(809),f=i(1721),y=i(36544),g=i(39105),m=i(79881),v=i(68055),b=(i(95830),i(87566)),_=i(60538),w=i(9870);let x=r=class extends u.wq{constructor(t){super(t),this.type="none"}clone(){return new r({type:this.type})}};(0,n._)([(0,w.J)({none:"none",stayAbove:"stay-above"})],x.prototype,"type",void 0),x=r=(0,n._)([(0,b.j)("esri.ground.NavigationConstraint")],x);var C,S=i(3277);const M=y.Z.getLogger("esri.Ground");let T=C=class extends((0,u.eC)(d.Z)){constructor(t){super(t),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new a.Z;const e=t=>{t.parent&&t.parent!==this&&"remove"in t.parent&&t.parent.remove(t),t.parent=this,"elevation"!==t.type&&"base-elevation"!==t.type&&M.error(`Layer '${t.title}, id:${t.id}' of type '${t.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)};this.layers.on("after-add",(t=>e(t.item))),this.layers.on("after-remove",(t=>(t=>{t.parent=null})(t.item)))}initialize(){this.when().catch((t=>{M.error("#load()","Failed to load ground",t)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const t=this.layers.removeAll();for(const e of t)e.destroy();this.layers.destroy()}normalizeCtorArgs(t){return t&&"resourceInfo"in t&&(this._set("resourceInfo",t.resourceInfo),delete(t={...t}).resourceInfo),t}set layers(t){this._set("layers",(0,l.Z)(t,this._get("layers")))}writeLayers(t,e,i,r){const n=[];t?(r={...r,layerContainerType:"ground"},t.forEach((t=>{if("write"in t){const e={};(0,h.sM)(t)().write(e,r)&&n.push(e)}else r&&r.messages&&r.messages.push(new c.Z("layer:unsupported",`Layers (${t.title}, ${t.id}) of type '${t.declaredClass}' cannot be persisted in the ground`,{layer:t}))})),e.layers=n):e.layers=n}load(t){return this.addResolvingPromise(this._loadFromSource(t)),Promise.resolve(this)}loadAll(){return(0,f.GZ)(this,(t=>{t(this.layers)}))}async queryElevation(t,e){await this.load({signal:null==e?void 0:e.signal});const{ElevationQuery:r}=await i.e(3549).then(i.bind(i,93549));(0,g.k_)(e);const n=new r,s=this.layers.filter(E).toArray();return n.queryAll(s,t,e)}async createElevationSampler(t,e){await this.load({signal:null==e?void 0:e.signal});const{ElevationQuery:r}=await i.e(3549).then(i.bind(i,93549));(0,g.k_)(e);const n=new r,s=this.layers.filter(E).toArray();return n.createSamplerAll(s,t,e)}clone(){const t={opacity:this.opacity,surfaceColor:(0,p.d9)(this.surfaceColor),navigationConstraint:(0,p.d9)(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(t.loadStatus="loaded"),new C({resourceInfo:this.resourceInfo}).set(t)}read(t,e){this.resourceInfo||this._set("resourceInfo",{data:t,context:e}),super.read(t,e)}_loadFromSource(t){const e=this.resourceInfo;return e?this._loadLayersFromJSON(e.data,e.context,t):Promise.resolve(null)}_loadLayersFromJSON(t,e,r){const n=e&&e.origin||"web-scene",s=e&&e.portal||null,o=e&&e.url||null;return i.e(7254).then(i.bind(i,87254)).then((({populateOperationalLayers:e})=>{(0,g.k_)(r);const i=[];if(t.layers&&Array.isArray(t.layers)){const r={context:{origin:n,url:o,portal:s,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};i.push(e(this.layers,t.layers,r))}return(0,g.as)(i)})).then((()=>{}))}};function E(t){return"elevation"===t.type||function(t){return t&&"createElevationSampler"in t}(t)}(0,n._)([(0,m.Cb)({json:{read:!1}})],T.prototype,"layers",null),(0,n._)([(0,_.c)("layers")],T.prototype,"writeLayers",null),(0,n._)([(0,m.Cb)({readOnly:!0})],T.prototype,"resourceInfo",void 0),(0,n._)([(0,m.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:v.z8,read:{reader:S.b,source:"transparency"},write:{writer:(t,e)=>{e.transparency=(0,S.a)(t)},target:"transparency"}}})],T.prototype,"opacity",void 0),(0,n._)([(0,m.Cb)({type:o.Z,json:{type:[v.z8],write:(t,e)=>{e.surfaceColor=t.toJSON().slice(0,3)}}})],T.prototype,"surfaceColor",void 0),(0,n._)([(0,m.Cb)({type:x,json:{write:!0}})],T.prototype,"navigationConstraint",void 0),T=C=(0,n._)([(0,b.j)("esri.Ground")],T);const P=T;var A=i(82677),k=i(78452),I=i(35470),O=i(60263);function j(t){var e;return!(!(t&&t.loaded&&"capabilities"in t&&null!=t&&null!=(e=t.capabilities)&&e.operations&&"supportsEditing"in t.capabilities.operations&&!0===t.capabilities.operations.supportsEditing)||"editingEnabled"in t&&!t.editingEnabled)}var R=i(80882);const F=y.Z.getLogger("esri.support.groundUtils"),L={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};var D=i(90921),N=i(16137);const z=y.Z.getLogger("esri.Map");let V=class extends((0,N.Q)((0,D.K)(I.Z.EventedMixin(A.Z)))){constructor(t){super(t),this.allLayers=new k.Z({getCollections:()=>{var t,e,i;return[null==(t=this.basemap)?void 0:t.baseLayers,null==(e=this.ground)?void 0:e.layers,this.layers,null==(i=this.basemap)?void 0:i.referenceLayers]},getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=new k.Z({getCollections:()=>[this.tables,this.layers],getChildrenFunction:t=>{const e=[];return"tables"in t&&e.push(t.tables),"layers"in t&&e.push(t.layers),e},itemFilterFunction:t=>{const e=t.parent;return e&&"tables"in e&&e.tables.includes(t)}}),this.basemap=null,this.editableLayers=new k.Z({getCollections:()=>[this.allLayers],itemFilterFunction:j}),this.ground=new P,this._basemapCache=(0,R.Df)()}destroy(){var t,e;this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),null==(t=this.ground)||t.destroy(),null==(e=this.basemap)||e.destroy(),(0,R.Bf)(this._basemapCache),this._basemapCache=null}castBasemap(t){return(0,R.se)(t,this._basemapCache)}castGround(t){return function(t){let e;return"string"==typeof t?t in L?e=new P({resourceInfo:{data:{layers:[L[t]]}}}):F.warn(`Unable to find ground definition for: ${t}. Try "world-elevation"`):e=(0,v.se)(P,t),e}(t)||(z.error("Map.ground may not be set to null or undefined"),this._get("ground"))}findLayerById(t){return this.allLayers.find((e=>e.id===t))}findTableById(t){return this.allTables.find((e=>e.id===t))}};(0,n._)([(0,m.Cb)({readOnly:!0,dependsOn:[]})],V.prototype,"allLayers",void 0),(0,n._)([(0,m.Cb)({readOnly:!0})],V.prototype,"allTables",void 0),(0,n._)([(0,m.Cb)({type:s.default})],V.prototype,"basemap",void 0),(0,n._)([(0,O.p)("basemap")],V.prototype,"castBasemap",null),(0,n._)([(0,m.Cb)({readOnly:!0})],V.prototype,"editableLayers",void 0),(0,n._)([(0,m.Cb)({type:P,nonNullable:!0})],V.prototype,"ground",void 0),(0,n._)([(0,O.p)("ground")],V.prototype,"castGround",null),V=(0,n._)([(0,b.j)("esri.Map")],V);const G=V},58484:(t,e,i)=>{"use strict";i.d(e,{Z:()=>B});var r=i(56140),n=i(28293),s=i(58385),o=i(82550),a=i(36544),l=i(39105),h=i(79881),c=i(60263),u=(i(95830),i(30590)),p=i(87566),d=i(60538),f=i(68055),y=i(4665),g=i(67472),m=i(4529),v=i(97948),b=i(38173),_=i(16839),w=i(75107);const x={base:null,key:"type",typeMap:{attachment:g.Z,media:_.Z,text:w.Z,field:b.Z}};var C,S=i(7417),M=i(20628);let T=C=class extends s.wq{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new C({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};(0,r._)([(0,h.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnTopmostRaster",void 0),(0,r._)([(0,h.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"showNoDataRecords",void 0),T=C=(0,r._)([(0,p.j)("esri.popup.LayerOptions")],T);const E=T;var P,A=i(84858);let k=P=class extends s.wq{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new P({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?(0,o.d9)(this.orderByFields):null})}};(0,r._)([(0,h.Cb)({type:Boolean,json:{write:!0}})],k.prototype,"showRelatedRecords",void 0),(0,r._)([(0,h.Cb)({type:[A.Z],json:{write:!0}})],k.prototype,"orderByFields",void 0),k=P=(0,r._)([(0,p.j)("esri.popup.RelatedRecordsInfo")],k);const I=k;var O,j=i(46761),R=i(89350),F=i(73186),L=i(59359);const D=n.Z.ofType({key:"type",defaultKeyValue:"button",base:R.Z,typeMap:{button:F.Z,toggle:L.Z}}),N={base:m.Z,key:"type",typeMap:{media:_.Z,custom:v.Z,text:w.Z,attachments:g.Z,fields:b.Z}},z="esri.PopupTemplate",V=a.Z.getLogger(z),G=["attachments","fields","media","text"];let U=O=class extends s.wq{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null}castContent(t){return Array.isArray(t)?t.map((t=>(0,f.N7)(N,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||(0,l.y8)(t)?t:(V.error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:i}=e;return Array.isArray(i)&&i.length>0?this._readPopupInfoElements(e):this._readPopupInfo(e)}writeContent(t,e,i,r){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>-1!==G.indexOf(t.type))).map((t=>t&&t.toJSON(r))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type&&this._writeTextContent(t,e)}))):e.description=t}writeFieldInfos(t,e,i,r){const{content:n}=this,s=Array.isArray(n)?n:null;if(t){const i=s?s.filter((t=>"fields"===t.type)):[],n=i.length&&i.every((t=>{var e;return null==(e=t.fieldInfos)?void 0:e.length}));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(r);return n&&(e.visible=!1),e}))}if(s)for(const t of s)"fields"===t.type&&this._writeFieldsContent(t,e)}writeLayerOptions(t,e,i,r){e[i]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(r)}writeTitle(t,e){e.title=t||""}clone(){const{actions:t}=this,e=t?(0,o.d9)(t.toArray()):[];return new O({actions:e,content:Array.isArray(this.content)?(0,o.d9)(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?(0,o.d9)(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?(0,o.d9)(this.fieldInfos):null,layerOptions:this.layerOptions?(0,o.d9)(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?(0,o.d9)(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?(0,o.d9)(this.relatedRecordsInfo):null})}async collectRequiredFields(t,e){await this._collectExpressionInfoFields(t,e,this.expressionInfos),(0,y.gd)(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const i=(0,o.d9)(t.fieldInfos);Array.isArray(e.fieldInfos)?i.forEach((t=>{const i=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));i?i.visible=!0:e.fieldInfos.push(t)})):e.fieldInfos=i}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const i=(0,o.d9)(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...i]:e.mediaInfos=i}_readPopupInfoElements({description:t,mediaInfos:e,popupElements:i}){const r={description:!1,mediaInfos:!1};return i.map((i=>"media"===i.type?(i.mediaInfos||!e||r.mediaInfos||(i.mediaInfos=e,r.mediaInfos=!0),_.Z.fromJSON(i)):"text"===i.type?(i.text||!t||r.description||(i.text=t,r.description=!0),w.Z.fromJSON(i)):"attachments"===i.type?g.Z.fromJSON(i):"fields"===i.type?b.Z.fromJSON(i):void 0)).filter(Boolean)}_readPopupInfo({description:t,mediaInfos:e,showAttachments:i}){const r=[];return t?r.push(new w.Z({text:t})):r.push(new b.Z),Array.isArray(e)&&e.length&&r.push(_.Z.fromJSON({mediaInfos:e})),i&&r.push(g.Z.fromJSON({displayType:"list"})),r.length?r:t}_getContentElementFields(t){return t&&"attachments"!==t.type?"custom"===t.type?t.outFields||[]:"fields"===t.type?this._getFieldInfoFields(t.fieldInfos||this.fieldInfos):"media"===t.type?(t.mediaInfos||[]).reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[]):"text"===t.type?this._extractFieldNames(t.text):void 0:[]}_getMediaInfoFields(t){const{caption:e,title:i,value:r}=t,n=r||{},{fields:s=[],normalizeField:o,tooltipField:a,sourceURL:l,linkURL:h}=n,c=[...this._extractFieldNames(i),...this._extractFieldNames(e),...this._extractFieldNames(l),...this._extractFieldNames(h),...s];return o&&c.push(o),a&&c.push(a),c}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,i){i&&await Promise.all(i.map((i=>(0,y.io)(t,e,i.expression))))}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>-1===t.indexOf("relationships/")&&-1===t.indexOf("expression/"))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:i,type:r}=t,n="button"===r||"toggle"===r?t.image:"";return[...this._extractFieldNames(i),...this._extractFieldNames(e),...this._extractFieldNames(n)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return[];const e=t.match(/{[^}]*}/g);if(!e)return[];const i=/\{(\w+):.+\}/,r=e.filter((t=>!(0===t.indexOf("{relationships/")||0===t.indexOf("{expression/")))).map((t=>t.replace(i,"{$1}")));return r?r.map((t=>t.slice(1,-1))):[]}};(0,r._)([(0,h.Cb)({type:D})],U.prototype,"actions",void 0),(0,r._)([(0,h.Cb)()],U.prototype,"content",void 0),(0,r._)([(0,c.p)("content")],U.prototype,"castContent",null),(0,r._)([(0,u.r)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments"])],U.prototype,"readContent",null),(0,r._)([(0,d.c)("content",{popupElements:{type:n.Z.ofType(x)},showAttachments:{type:Boolean},mediaInfos:{type:n.Z.ofType(j.V)},description:{type:String}})],U.prototype,"writeContent",null),(0,r._)([(0,h.Cb)({type:[S.Z],json:{write:!0}})],U.prototype,"expressionInfos",void 0),(0,r._)([(0,h.Cb)({type:[M.Z]})],U.prototype,"fieldInfos",void 0),(0,r._)([(0,d.c)("fieldInfos")],U.prototype,"writeFieldInfos",null),(0,r._)([(0,h.Cb)({type:E})],U.prototype,"layerOptions",void 0),(0,r._)([(0,d.c)("layerOptions")],U.prototype,"writeLayerOptions",null),(0,r._)([(0,h.Cb)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],U.prototype,"lastEditInfoEnabled",void 0),(0,r._)([(0,h.Cb)()],U.prototype,"outFields",void 0),(0,r._)([(0,h.Cb)()],U.prototype,"overwriteActions",void 0),(0,r._)([(0,h.Cb)()],U.prototype,"returnGeometry",void 0),(0,r._)([(0,h.Cb)({json:{type:String}})],U.prototype,"title",void 0),(0,r._)([(0,d.c)("title")],U.prototype,"writeTitle",null),(0,r._)([(0,h.Cb)({type:I,json:{write:!0}})],U.prototype,"relatedRecordsInfo",void 0),U=O=(0,r._)([(0,p.j)(z)],U);const B=U},87864:(t,e,i)=>{"use strict";i.d(e,{Z:()=>y});var r,n=i(56140),s=i(58385),o=i(59472),a=i(13942),l=i(79881),h=(i(95830),i(68055),i(36544),i(30590)),c=i(87566),u=i(60538);let p=r=class extends s.wq{constructor(t){super(t),this.end=null,this.start=null}static get allTime(){return d}static get empty(){return f}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?t.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?t.getTime():null}clone(){return new r({end:this.end,start:this.start})}expandTo(t){if(this.isEmpty||this.isAllTime)return this.clone();const e=(0,o.Po)(this.start,(e=>(0,a.JE)(e,t))),i=(0,o.Po)(this.end,(e=>(0,a.Nm)((0,a.JE)(e,t),1,t)));return new r({start:e,end:i})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return r.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=(0,o.R2)(this.start,-1/0,(t=>t.getTime())),i=(0,o.R2)(this.end,1/0,(t=>t.getTime())),n=(0,o.R2)(t.start,-1/0,(t=>t.getTime())),s=(0,o.R2)(t.end,1/0,(t=>t.getTime()));let a,l;if(n>=e&&n<=i?a=n:e>=n&&e<=s&&(a=e),i>=n&&i<=s?l=i:s>=e&&s<=i&&(l=s),!isNaN(a)&&!isNaN(l)){const t=new r;return t.start=a===-1/0?null:new Date(a),t.end=l===1/0?null:new Date(l),t}return r.empty}offset(t,e){if(this.isEmpty||this.isAllTime)return this.clone();const i=new r,{start:n,end:s}=this;return(0,o.pC)(n)&&(i.start=(0,a.Nm)(n,t,e)),(0,o.pC)(s)&&(i.end=(0,a.Nm)(s,t,e)),i}equals(t){if(!t)return!1;const e=(0,o.pC)(this.start)?this.start.getTime():this.start,i=(0,o.pC)(this.end)?this.end.getTime():this.end,r=(0,o.pC)(t.start)?t.start.getTime():t.start,n=(0,o.pC)(t.end)?t.end.getTime():t.end;return e===r&&i===n}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return d.clone();const e=(0,o.pC)(this.start)&&(0,o.pC)(t.start)?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,i=(0,o.pC)(this.end)&&(0,o.pC)(t.end)?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new r({start:e,end:i})}};(0,n._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"end",void 0),(0,n._)([(0,h.r)("end")],p.prototype,"readEnd",null),(0,n._)([(0,u.c)("end")],p.prototype,"writeEnd",null),(0,n._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isAllTime",null),(0,n._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isEmpty",null),(0,n._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"start",void 0),(0,n._)([(0,h.r)("start")],p.prototype,"readStart",null),(0,n._)([(0,u.c)("start")],p.prototype,"writeStart",null),p=r=(0,n._)([(0,c.j)("esri.TimeExtent")],p);const d=new p,f=new p({start:void 0,end:void 0}),y=p},40522:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var r,n=i(56140),s=i(58385),o=i(13942),a=i(79881),l=(i(95830),i(68055),i(36544),i(87566)),h=i(17242);let c=r=class extends s.wq{constructor(t){super(t),this.value=0,this.unit="milliseconds"}toMilliseconds(){return(0,o.rJ)(this.value,this.unit,"milliseconds")}clone(){return new r({value:this.value,unit:this.unit})}};(0,n._)([(0,a.Cb)({type:Number,json:{write:!0},nonNullable:!0})],c.prototype,"value",void 0),(0,n._)([(0,a.Cb)({type:h.v.apiValues,json:{type:h.v.jsonValues,read:h.v.read,write:h.v.write},nonNullable:!0})],c.prototype,"unit",void 0),c=r=(0,n._)([(0,l.j)("esri.TimeInterval")],c);const u=c},65984:(t,e,i)=>{"use strict";i.d(e,{Z:()=>C});var r,n=i(56140),s=i(58385),o=i(33655),a=i(79881),l=(i(95830),i(60263)),h=(i(36544),i(30590)),c=i(87566),u=i(60538),p=i(68055),d=i(61106),f=i(17154);let y=r=class extends s.wq{constructor(...t){super(...t),this.position=new d.Z([0,0,0]),this.heading=0,this.tilt=0,this.fov=55}normalizeCtorArgs(t,e,i,r){if(t&&"object"==typeof t&&("x"in t||Array.isArray(t))){const n={position:t};return null!=e&&(n.heading=e),null!=i&&(n.tilt=i),null!=r&&(n.fov=r),n}return t}writePosition(t,e,i,r){const n=t.clone();n.x=(0,p.q9)(t.x||0),n.y=(0,p.q9)(t.y||0),n.z=t.hasZ?(0,p.q9)(t.z||0):t.z,e[i]=n.write(null,r)}readPosition(t,e){const i=new d.Z;return i.read(t,e),i.x=(0,p.q9)(i.x||0),i.y=(0,p.q9)(i.y||0),i.z=i.hasZ?(0,p.q9)(i.z||0):i.z,i}equals(t){return!!t&&this.tilt===t.tilt&&this.heading===t.heading&&this.fov===t.fov&&this.position.equals(t.position)}clone(){return new r({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})}};(0,n._)([(0,a.Cb)({type:d.Z,json:{write:{isRequired:!0}}})],y.prototype,"position",void 0),(0,n._)([(0,u.c)("position")],y.prototype,"writePosition",null),(0,n._)([(0,h.r)("position")],y.prototype,"readPosition",null),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,l.p)((t=>f.LU.normalize((0,p.q9)(t))))],y.prototype,"heading",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,l.p)((t=>(0,o.uZ)((0,p.q9)(t),-180,180)))],y.prototype,"tilt",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],y.prototype,"fov",void 0),y=r=(0,n._)([(0,c.j)("esri.Camera")],y);const g=y;var m,v=i(36348),b=i(59472),_=i(56885);let w=m=class extends s.wq{constructor(t){super(t),this.rotation=0,this.scale=0,this.targetGeometry=null,this.camera=null}castRotation(t){return(t%=360)<0&&(t+=360),t}clone(){return new m({rotation:this.rotation,scale:this.scale,targetGeometry:(0,b.pC)(this.targetGeometry)?this.targetGeometry.clone():null,camera:(0,b.pC)(this.camera)?this.camera.clone():null})}};function x(){return{enabled:!this.camera}}(0,n._)([(0,a.Cb)({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:x}}}}})],w.prototype,"rotation",void 0),(0,n._)([(0,l.p)("rotation")],w.prototype,"castRotation",null),(0,n._)([(0,a.Cb)({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:x}}}}})],w.prototype,"scale",void 0),(0,n._)([(0,a.Cb)({types:v.qM,json:{read:_.im,write:!0,origins:{"web-scene":{read:_.im,write:{overridePolicy:x}}}}})],w.prototype,"targetGeometry",void 0),(0,n._)([(0,a.Cb)({type:g,json:{write:!0}})],w.prototype,"camera",void 0),w=m=(0,n._)([(0,c.j)("esri.Viewpoint")],w);const C=w},12973:(t,e,i)=>{"use strict";i.d(e,{V:()=>l});var r=i(34926),n=(i(54721),i(32656)),s=i(36544),o=i(10923);const a=s.Z.getLogger("esri.assets");function l(t){if(!r.Z.assetsPath)throw a.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new n.Z("assets:path-not-set","config.assetsPath is not set");return(0,o.v_)(r.Z.assetsPath,t)}},93352:(t,e,i)=>{"use strict";i.d(e,{C:()=>y,b:()=>f});var r=i(61514),n=i(62213),s=i(11823),o=i(83488),a=i(72023),l=i(4071),h=i(88214),c=i(34658),u=i(63230),p=i(33834),d=i(51219);function f(t){const e=new d.kG,i=1===t.output;return e.include(n.w,{linearDepth:i}),e.include(s.c,t),e.vertex.uniforms.add("proj","mat4").add("view","mat4"),e.attributes.add("position","vec3"),e.varyings.add("vpos","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),i&&(e.include(o.F,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("linearDepth","float")),e.vertex.code.add(p.H`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${t.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${i?p.H`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:p.H`transformPosition(proj, view, vpos);`}
    }
  `),e.include(r.p2,t),e.fragment.include(u.Y),t.multipassTerrainEnabled&&(e.fragment.include(l.S),e.include(h.l,t)),e.fragment.uniforms.add("eColor","vec4"),4===t.output&&e.include(a.bA),e.fragment.code.add(p.H`
  void main() {
    discardBySlice(vpos);
    ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 color = ${t.attributeColor?"vColor * eColor;":"eColor;"}

    if (color.a < ${p.H.float(c.bf)}) {
      discard;
    }

    ${7===t.output?p.H`gl_FragColor = vec4(color.a);`:""}

    ${0===t.output?p.H`gl_FragColor = highlightSlice(color, vpos); ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${4===t.output?p.H`outputHighlight();`:""};
    ${1===t.output?p.H`outputDepth(linearDepth);`:""};
  }
  `),e}var y=Object.freeze({__proto__:null,build:f})},12528:(t,e,i)=>{"use strict";i.d(e,{H:()=>x,a:()=>v,b:()=>b,c:()=>_});var r=i(14286),n=i(55735),s=i(38256),o=i(61514),a=i(73192),l=i(2489),h=i(79431),c=i(72023),u=i(8681),p=i(34658),d=i(63230),f=i(61017),y=i(91930),g=i(33834),m=i(51219);function v(t){const e=new m.kG,i=t.signedDistanceFieldEnabled;if(e.include(a.H),e.include(l.R,t),e.include(o.p2,t),6===t.output)return e.include(h.R,t),e;e.include(y.c),e.fragment.include(f.n),e.fragment.include(d.Y),e.include(u.kl,t),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),t.binaryHighlightOcclusionEnabled&&e.varyings.add("voccluded","float"),e.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),i&&e.vertex.uniforms.add("outlineColor","vec4"),t.screenSizePerspectiveEnabled&&e.vertex.uniforms.add("screenSizePerspective","vec4"),(t.debugDrawBorder||t.binaryHighlightOcclusionEnabled)&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("auxpos2","vec4"),e.vertex.code.add(g.H`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.screenSizePerspectiveEnabled?g.H`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:g.H`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${t.occlusionTestEnabled||t.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${t.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const r=g.H`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,n=t.pixelSnappingEnabled?i?g.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:g.H`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:g.H`posProj += quadOffset;`;e.vertex.code.add(g.H`
      ${t.occlusionTestEnabled?"if (visible) {":""}
      ${r}
      ${t.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${g.H.float(p.bf)};
      ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${g.H.float(p.bf)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${n}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${t.debugDrawBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${t.occlusionTestEnabled?g.H`} else { vtc = vec2(0.0);
        ${t.debugDrawBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),e.fragment.uniforms.add("tex","sampler2D"),i&&(e.fragment.uniforms.add("outlineColor","vec4"),e.fragment.uniforms.add("outlineSize","float"));const s=t.debugDrawBorder?g.H`(isBorder > 0.0 ? 0.0 : ${g.H.float(p.F)})`:g.H.float(p.F),v=g.H`
    ${t.debugDrawBorder?g.H`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?g.H`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${s} ||
          fillPixelColor.a + outlinePixelColor.a < ${g.H.float(p.bf)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${s}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:g.H`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${s}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${t.debugDrawBorder?g.H`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;return 7===t.output&&e.fragment.code.add(g.H`
      void main() {
        ${v}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),0===t.output&&e.fragment.code.add(g.H`
    void main() {
      ${v}
      ${t.FrontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),4===t.output&&(e.include(c.bA),e.fragment.code.add(g.H`
    void main() {
      ${v}
      ${t.binaryHighlightOcclusionEnabled?g.H`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),e}function b(t,e,i){t.setUniform4fv("materialColor",e.color),e.textureIsSignedDistanceField&&(e.outlineColor[3]<=0||e.outlineSize<=0?(t.setUniform4fv("outlineColor",s.Z),t.setUniform1f("outlineSize",0)):(t.setUniform4fv("outlineColor",e.outlineColor),t.setUniform1f("outlineSize",e.outlineSize))),t.setUniform2f("screenOffset",2*e.screenOffset[0]*i,2*e.screenOffset[1]*i),t.setUniform2fv("anchorPos",_(e))}function _(t,e=w){return t.textureIsSignedDistanceField?function(t,e,i){i[0]=t[0]*(e[2]-e[0])+e[0],i[1]=t[1]*(e[3]-e[1])+e[1]}(t.anchorPos,t.distanceFieldBoundingBox,e):(0,r.c)(e,t.anchorPos),e}const w=(0,n.a)();var x=Object.freeze({__proto__:null,build:v,bindHUDMaterialUniforms:b,calculateAnchorPosForRendering:_})},57086:(t,e,i)=>{"use strict";i.d(e,{L:()=>a,b:()=>o});var r=i(62692),n=i(33834),s=i(51219);function o(t){const e=new s.kG;return e.include(r.j,t),e.vertex.uniforms.add("uModelViewMatrix","mat4"),e.vertex.uniforms.add("uProjectionMatrix","mat4"),e.attributes.add("start","vec3"),e.attributes.add("end","vec3"),e.attributes.add("up","vec3"),e.attributes.add("extrude","vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewPlane","vec4"),e.vertex.uniforms.add("glowWidth","float"),e.vertex.uniforms.add("pixelToNDC","vec2"),e.vertex.code.add(n.H`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = uModelViewMatrix * vec4(pos, 1);
vec4 projPos = uProjectionMatrix * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (uModelViewMatrix * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = uProjectionMatrix * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (uModelViewMatrix * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (uModelViewMatrix * vec4(start, 1)).xyz;
vViewEnd = (uModelViewMatrix * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),e.fragment.uniforms.add("globalAlpha","float"),e.fragment.uniforms.add("perScreenPixelRatio","float"),e.fragment.code.add(n.H`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),e}var a=Object.freeze({__proto__:null,build:o})},56396:(t,e,i)=>{"use strict";i.d(e,{L:()=>c,b:()=>h,d:()=>l});var r=i(33655),n=i(62692),s=i(84444),o=i(33834),a=i(51219);const l=(0,r.Vl)(6);function h(t){const e=new a.kG;return e.extensions.add("GL_OES_standard_derivatives"),e.include(s.k),e.include(n.j,t),e.fragment.uniforms.add("angleCutoff","vec2"),e.fragment.uniforms.add("globalAlpha","float"),t.heightManifoldEnabled&&e.fragment.uniforms.add("heightPlane","vec4"),t.pointDistanceEnabled&&e.fragment.uniforms.add("pointDistanceSphere","vec4"),t.lineVerticalPlaneEnabled&&e.fragment.uniforms.add("lineVerticalPlane","vec4").add("lineVerticalStart","vec3").add("lineVerticalEnd","vec3"),(t.heightManifoldEnabled||t.pointDistanceEnabled||t.lineVerticalPlaneEnabled)&&e.fragment.uniforms.add("maxPixelDistance","float"),t.intersectsLineEnabled&&e.fragment.uniforms.add("intersectsLineStart","vec3").add("intersectsLineEnd","vec3").add("intersectsLineDirection","vec3").add("intersectsLineRadius","float").add("perScreenPixelRatio","float"),(t.lineVerticalPlaneEnabled||t.heightManifoldEnabled)&&e.fragment.code.add(o.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.pointDistanceEnabled&&e.fragment.code.add(o.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.intersectsLineEnabled&&e.fragment.code.add(o.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(t.lineVerticalPlaneEnabled||t.intersectsLineEnabled)&&e.fragment.code.add(o.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),e.fragment.code.add(o.H`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),t.heightManifoldEnabled&&e.fragment.code.add(o.H`{
float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
color = max(color, heightManifoldColor * heightManifoldAlpha);
}`),t.pointDistanceEnabled&&e.fragment.code.add(o.H`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`),t.lineVerticalPlaneEnabled&&e.fragment.code.add(o.H`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`),t.intersectsLineEnabled&&e.fragment.code.add(o.H`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`),e.fragment.code.add(o.H`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),e}var c=Object.freeze({__proto__:null,defaultAngleCutoff:l,build:h})},21328:(t,e,i)=>{"use strict";i.d(e,{a:()=>p});var r,n=i(56140),s=i(78745),o=i(58385),a=i(82550),l=i(79881),h=(i(68055),i(95830),i(36544),i(87566)),c=i(71077);let u=r=class extends o.wq{constructor(){super(...arguments),this.color=new s.Z("white")}clone(){return new r({color:(0,a.d9)(this.color)})}};(0,n._)([(0,l.Cb)(c.aK)],u.prototype,"color",void 0),u=r=(0,n._)([(0,h.j)("esri.symbols.callouts.LineCallout3DBorder")],u);var p=u;Object.freeze({__proto__:null,get LineCallout3DBorder(){return u},default:p})},81632:(t,e,i)=>{"use strict";i.d(e,{R:()=>y,b:()=>f});var r=i(61514),n=i(82768),s=i(83488),o=i(4071),a=i(93077),l=i(88214),h=i(9295),c=i(34658),u=i(63230),p=i(33834),d=i(51219);function f(t){const e=new d.kG;e.extensions.add("GL_OES_standard_derivatives"),e.include(h.e),e.include(n.U,t),e.include(a.q,t),1===t.output&&e.include(s.F,t),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),e.attributes.add("position","vec3"),e.attributes.add("subdivisionFactor","float"),e.attributes.add("uv0","vec2"),e.attributes.add("auxpos1","vec3"),e.attributes.add("auxpos2","vec3"),e.varyings.add("vColor","vec4"),e.varyings.add("vpos","vec3"),e.varyings.add("linearDepth","float"),t.multipassTerrainEnabled&&e.varyings.add("depth","float");const i=t.falloffEnabled,f=t.innerColorEnabled;return f&&e.varyings.add("vLineDistance","float"),i&&e.varyings.add("vLineDistanceNorm","float"),t.falloffEnabled&&e.fragment.uniforms.add("falloff","float"),t.innerColorEnabled&&(e.fragment.uniforms.add("innerColor","vec4"),e.fragment.uniforms.add("innerWidth","float")),e.vertex.code.add(p.H`#define PERPENDICULAR(v) vec2(v.y, -v.x);
#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y > 0.0
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),e.vertex.code.add(p.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`),e.vertex.code.add(p.H`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${t.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),e.vertex.code.add(p.H`void main(void) {
float coverage = 1.0;
vpos = position;
if (uv0.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;
bool isJoin = abs(uv0.y)-3.0 < 0.0;
float lineWidth = getSize() * pixelRatio;
if (lineWidth < 1.0) {
coverage = lineWidth;
lineWidth = 1.0;
}else{
lineWidth = floor(lineWidth + 0.5);
}
vec4 pos  = view * vec4(position.xyz, 1.0);
vec4 prev = view * vec4(auxpos1.xyz, 1.0);
vec4 next = view * vec4(auxpos2.xyz, 1.0);
clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),t.stippleEnabled&&e.vertex.code.add(p.H`vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);
vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;
vec2 stippleSegmentDirection = stippleSegmentInfo.zw;`),e.vertex.code.add(p.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = ISOUTSIDE;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),t.roundJoins?e.vertex.code.add(p.H`vec2 startDir;
vec2 endDir;
if (leftLen < 0.001) {
startDir = right;
}
else{
startDir = left;
}
startDir = normalize(startDir);
startDir = PERPENDICULAR(startDir);
if (rightLen < 0.001) {
endDir = left;
}
else{
endDir = right;
}
endDir = normalize(endDir);
endDir = PERPENDICULAR(endDir);
float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
joinDisplacementDir = rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);`):e.vertex.code.add(p.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`),e.vertex.code.add(p.H`displacementLen = lineWidth;
}
} else {
if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
displacementLen = lineWidth;
capDisplacementDir = isStartVertex ? -right : left;`),t.roundCaps?e.vertex.code.add(p.H`float angle = subdivisionFactor*PI*0.5;
joinDisplacementDir *= cos(angle);
capDisplacementDir *= sin(angle);`):e.vertex.code.add(p.H`capDisplacementDir *= subdivisionFactor;`),e.vertex.code.add(p.H`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${i||f?p.H`float lineDist = lineWidth * sign(uv0.y) * pos.w;`:""}

  ${f?p.H`vLineDistance = lineDist;`:""}
  ${i?p.H`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `),t.stippleEnabled&&(e.vertex.code.add(p.H`{
vec2 posVec = pos.xy - stippleSegmentOrigin;
float stippleSegmentDirectionLength = length(stippleSegmentDirection);`),t.stippleIntegerRepeatsEnabled&&e.vertex.code.add(p.H`float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
stipplePatternUvMax = roundedNumberOfPatternRepeats;`),e.vertex.code.add(p.H`
      if (stippleSegmentDirectionLength >= 0.001) {
        // Project the vertex position onto the line segment.
        float projectedLength = dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;
     ${t.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
        stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `)),e.vertex.code.add(p.H`pos.xy = pos.xy / screenSize * pos.w;
vColor = getColor();
vColor.a *= coverage;
gl_Position = pos;
}
}`),t.multipassTerrainEnabled&&(e.fragment.include(o.S),e.include(l.l,t)),e.include(r.p2,t),e.fragment.uniforms.add("intrinsicColor","vec4"),e.fragment.include(u.Y),e.fragment.code.add(p.H`
  void main() {
    discardBySlice(vpos);
    ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 color = intrinsicColor * vColor;
  `),t.innerColorEnabled&&(e.fragment.uniforms.add("pixelRatio","float"),e.fragment.code.add(p.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),e.fragment.code.add(p.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),t.falloffEnabled&&e.fragment.code.add(p.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`),e.fragment.code.add(p.H`
    if (finalColor.a < ${p.H.float(c.bf)}) {
      discard;
    }

    ${7===t.output?p.H`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===t.output?p.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===t.output&&t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===t.output?p.H`gl_FragColor = vec4(1.0);`:""}
    ${1===t.output?p.H`outputDepth(linearDepth);`:""}
  }
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function o(t,e){t.extensions.add("GL_OES_standard_derivatives"),t.fragment.include(r.S),t.include(s),t.fragment.uniforms.add("glowColor","vec3"),t.fragment.uniforms.add("glowWidth","float"),t.fragment.uniforms.add("glowFalloff","float"),t.fragment.uniforms.add("innerColor","vec3"),t.fragment.uniforms.add("innerWidth","float"),t.fragment.uniforms.add("depthMap","sampler2D"),t.fragment.uniforms.add("nearFar","vec2"),t.fragment.uniforms.add("frameColor","sampler2D"),e.contrastControlEnabled&&t.fragment.uniforms.add("globalAlphaContrastBoost","float"),t.fragment.code.add(n.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),t.fragment.code.add(n.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),t.fragment.code.add(n.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),t.fragment.code.add(n.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),e.contrastControlEnabled?t.fragment.code.add(n.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`):t.fragment.code.add(n.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}},84444:(t,e,i)=>{"use strict";i.d(e,{k:()=>n});var r=i(33834);function n(t){t.attributes.add("position","vec2"),t.varyings.add("uv","vec2"),t.vertex.code.add(r.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      uv = position * 0.5 + vec2(0.5);
    }
  `)}},61514:(t,e,i)=>{"use strict";i.d(e,{p2:()=>a,Vv:()=>h,DA:()=>l});var r=i(59472),n=i(17387),s=i(77625),o=i(33834);function a(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=o.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,r=o.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=e.sliceHighlightDisabled?o.H`#define highlightSlice(_color_, _pos_) (_color_)`:o.H`
        ${r}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(n)}else{const i=o.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(i),t.fragment.code.add(i)}}function l(t,e,i){h(t,e,i.slicePlane,i.origin)}function h(t,e,i,o){e.slicePlaneEnabled&&((0,r.pC)(i)?(o?((0,n.f)(c,i.origin,o),t.setUniform3fv("slicePlaneOrigin",c)):t.setUniform3fv("slicePlaneOrigin",i.origin),t.setUniform3fv("slicePlaneBasis1",i.basis1),t.setUniform3fv("slicePlaneBasis2",i.basis2)):(t.setUniform3fv("slicePlaneBasis1",s.Z),t.setUniform3fv("slicePlaneBasis2",s.Z),t.setUniform3fv("slicePlaneOrigin",s.Z)))}const c=(0,s.c)()},62213:(t,e,i)=>{"use strict";i.d(e,{w:()=>n});var r=i(33834);function n(t,e){e.linearDepth?t.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):t.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},82768:(t,e,i)=>{"use strict";i.d(e,{U:()=>n});var r=i(33834);function n(t,e){t.vertex.uniforms.add("intrinsicWidth","float"),e.vvSize?(t.attributes.add("sizeFeatureAttribute","float"),t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.code.add(r.H`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add("size","float"),t.vertex.code.add(r.H`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add("opacityFeatureAttribute","float"),t.vertex.constants.add("vvOpacityNumber","int",8),t.vertex.code.add(r.H`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.vertex.code.add(r.H`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.attributes.add("colorFeatureAttribute","float"),t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(r.H`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(t.attributes.add("color","vec4"),t.vertex.code.add(r.H`vec4 getColor(){
return applyOpacity(color);
}`))}},11823:(t,e,i)=>{"use strict";i.d(e,{c:()=>n});var r=i(33834);function n(t,e){e.attributeColor?(t.attributes.add("color","vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(r.H`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(r.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(r.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},76789:(t,e,i)=>{"use strict";i.d(e,{LC:()=>s,Mo:()=>o});var r=i(91930),n=i(33834);function s(t,e){const i=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(r.c),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(n.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===e.viewingMode?n.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:n.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?n.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(n.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function o(t,e,i){if(!e.verticalOffset)return;const r=a(e.verticalOffset,i.camera.fovY,i.camera.fullViewport[3]),n=i.camera.pixelRatio||1;t.setUniform4f("verticalOffset",r.screenLength*n,r.perDistance,r.minWorldLength,r.maxWorldLength)}function a(t,e,i,r=l){return r.screenLength=t.screenLength,r.perDistance=Math.tan(.5*e)/(.5*i),r.minWorldLength=t.minWorldLength,r.maxWorldLength=t.maxWorldLength,r}const l={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},73192:(t,e,i)=>{"use strict";i.d(e,{H:()=>n});var r=i(33834);function n(t){const e=r.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,i=r.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;t.vertex.code.add(e),t.vertex.code.add(i),t.fragment.code.add(e),t.fragment.code.add(i)}},2489:(t,e,i)=>{"use strict";i.d(e,{R:()=>s,H:()=>o});var r=i(91930),n=i(33834);function s(t,e){const i=t;i.include(r.c),i.attributes.add("position","vec3"),i.attributes.add("normal","vec3"),i.attributes.add("auxpos1","vec4"),i.vertex.uniforms.add("proj","mat4"),i.vertex.uniforms.add("view","mat4"),i.vertex.uniforms.add("viewNormal","mat4"),i.vertex.uniforms.add("viewport","vec4"),i.vertex.uniforms.add("camPos","vec3"),i.vertex.uniforms.add("polygonOffset","float"),i.vertex.uniforms.add("cameraGroundRelative","float"),i.vertex.uniforms.add("pixelRatio","float"),i.vertex.uniforms.add("perDistancePixelRatio","float"),i.vertex.uniforms.add("uRenderTransparentlyOccludedHUD","float"),e.verticalOffsetEnabled&&i.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&i.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),i.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),i.vertex.constants.add("smallOffsetAngle","float",.984807753012208),i.vertex.code.add(n.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.vertex.code.add(n.H`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),e.isDraped||i.vertex.code.add(n.H`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`),i.vertex.code.add(n.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(camPos - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.screenSizePerspectiveEnabled&&(e.verticalOffsetEnabled||1===e.screenCenterOffsetUnitsEnabled)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.verticalOffsetEnabled?e.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.verticalOffsetEnabled?n.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${1!==e.screenCenterOffsetUnitsEnabled?n.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${1===e.screenCenterOffsetUnitsEnabled?e.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${1===e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.vertex.code.add(n.H`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (uRenderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * uRenderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function o(t,e){t.setUniform1f("uRenderTransparentlyOccludedHUD",0===e.renderTransparentlyOccludedHUD?1:1===e.renderTransparentlyOccludedHUD?0:.75)}},79431:(t,e,i)=>{"use strict";i.d(e,{R:()=>a});var r=i(4071),n=i(86894),s=i(61017),o=i(33834);function a(t,e){e.multipassGeometryEnabled&&t.vertex.include(n.S),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.code.add(o.H`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.multipassGeometryEnabled?o.H`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${e.multipassTerrainEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.multipassTerrainEnabled&&t.fragment.include(r.S),t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("cameraNearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.include(s.n),t.fragment.code.add(o.H`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${e.multipassTerrainEnabled?o.H`

          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), cameraNearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}},83488:(t,e,i)=>{"use strict";i.d(e,{F:()=>s});var r=i(61017),n=i(33834);function s(t,e){t.fragment.include(r.n),3===e.output?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===e.output&&t.fragment.code.add(n.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}},72023:(t,e,i)=>{"use strict";i.d(e,{bA:()=>a,wW:()=>l});var r=i(38256),n=i(33834);const s=(0,r.f)(1,1,0,1),o=(0,r.f)(1,0,1,1);function a(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.constants.add("occludedHighlightFlag","vec4",s).add("unoccludedHighlightFlag","vec4",o),t.fragment.code.add(n.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function l(t,e){t.bindTexture(e.highlightDepthTexture,"depthTex"),t.setUniform4f("highlightViewportPixelSz",0,0,e.inverseViewport[0],e.inverseViewport[1])}},4071:(t,e,i)=>{"use strict";i.d(e,{S:()=>s});var r=i(61017),n=i(33834);function s(t){t.include(r.n),t.code.add(n.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},93077:(t,e,i)=>{"use strict";i.d(e,{q:()=>n});var r=i(33834);function n(t,e){t.constants.add("stippleAlphaColorDiscard","float",.001),t.constants.add("stippleAlphaHighlightDiscard","float",.5),e.stippleEnabled?function(t,e){t.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),e.stippleUVMaxEnabled&&t.varyings.add("stipplePatternUvMax","float"),t.varyings.add("stipplePatternUv","float"),t.fragment.uniforms.add("stipplePatternTexture","sampler2D"),e.stippleOffColorEnabled&&t.fragment.uniforms.add("stippleOffColor","vec4"),t.fragment.code.add(r.H`
  float getStippleAlpha() {
    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
    ${e.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}

    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;
  }`),e.stippleOffColorEnabled?t.fragment.code.add(r.H`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`):t.fragment.code.add(r.H`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(t,e):function(t){t.fragment.code.add(r.H`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(t)}},86894:(t,e,i)=>{"use strict";i.d(e,{l:()=>o,S:()=>s});var r=i(4071),n=i(33834);function s(t){t.include(r.S),t.uniforms.add("geometryDepthTexture","sampler2D"),t.uniforms.add("cameraNearFar","vec2"),t.code.add(n.H`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}function o(t,e){e.multipassGeometryEnabled&&e.geometryLinearDepthTexture&&t.bindTexture(e.geometryLinearDepthTexture,"geometryDepthTexture")}},88214:(t,e,i)=>{"use strict";i.d(e,{p:()=>s,l:()=>n});var r=i(33834);function n(t,e){t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("cameraNearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.code.add(r.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function s(t,e){e.multipassTerrainEnabled&&e.terrainLinearDepthTexture&&t.bindTexture(e.terrainLinearDepthTexture,"terrainDepthTexture")}},9295:(t,e,i)=>{"use strict";i.d(e,{e:()=>n});var r=i(33834);function n(t){t.vertex.code.add(r.H`const float PI = 3.141592653589793;`),t.fragment.code.add(r.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},8681:(t,e,i)=>{"use strict";i.d(e,{kl:()=>n,kz:()=>s,uj:()=>a,s0:()=>o});var r=i(33834);function n(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add("instanceFeatureAttribute","vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(r.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),t.vertex.code.add(r.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?r.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(r.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(r.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.vvInstancingEnabled?r.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(r.H`vec4 vvColor() { return vec4(1.0); }`)}function s(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}function o(t,e){s(t,e),e.vvOpacityEnabled&&(t.setUniform1fv("vvOpacityValues",e.vvOpacityValues),t.setUniform1fv("vvOpacityOpacities",e.vvOpacityOpacities))}function a(t,e){s(t,e),e.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}},34658:(t,e,i)=>{"use strict";i.d(e,{sj:()=>o,F:()=>n,bf:()=>s});var r=i(33834);const n=.1,s=.001;function o(t,e){const i=t.fragment;switch(e.alphaDiscardMode){case 0:i.code.add(r.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${r.H.float(s)}) { discard; } }
      `);break;case 1:i.code.add(r.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:i.uniforms.add("textureAlphaCutoff","float"),i.code.add(r.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(r.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},63230:(t,e,i)=>{"use strict";i.d(e,{Y:()=>n});var r=i(33834);function n(t){t.code.add(r.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}},61017:(t,e,i)=>{"use strict";i.d(e,{n:()=>n});var r=i(33834);function n(t){t.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},91930:(t,e,i)=>{"use strict";i.d(e,{c:()=>s,y:()=>o});var r=i(33834),n=i(30090);function s(t){t.vertex.code.add(r.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(r.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(r.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(r.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(r.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(r.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),t.vertex.code.add(r.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));