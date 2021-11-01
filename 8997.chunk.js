"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[8997],{55534:(e,t,i)=>{i.d(t,{a:()=>b,c:()=>y,g:()=>_,h:()=>P,u:()=>w}),i(95830);var n=i(36544),s=i(33655),r=i(91531),o=i(67128),a=i(12811),l=i(17387),d=i(77625),c=i(34720),u=i(37871),h=i(83679),p=i(69899),g=i(2897);const f=n.Z.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function b(e=F){return{plane:(0,u.Ue)(e.plane),origin:(0,d.a)(e.origin),basis1:(0,d.a)(e.basis1),basis2:(0,d.a)(e.basis2)}}function y(e,t=b()){return v(e.origin,e.basis1,e.basis2,t)}function v(e,t,i,n=b()){return(0,l.g)(n.origin,e),(0,l.g)(n.basis1,t),(0,l.g)(n.basis2,i),w(n),function(e,t){Math.abs((0,l.d)(e.basis1,e.basis2)/((0,l.l)(e.basis1)*(0,l.l)(e.basis2)))>1e-6&&f.warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,l.d)(e.basis1,T(e)))>1e-6&&f.warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,l.d)(T(e),e.origin)-e.plane[3])>1e-6&&f.warn(t,"Plane offset is not consistent with plane origin")}(n,"fromValues()"),n}function w(e){(0,u.my)(e.basis2,e.basis1,e.origin,e.plane)}function m(e,t,i){e!==i&&y(e,i);const n=(0,l.a)(g.WM.get(),T(e),t);return(0,l.b)(i.origin,i.origin,n),i.plane[3]-=t,i}function _(e,t=b()){const i=(e[2]-e[0])/2,n=(e[3]-e[1])/2;return(0,l.s)(t.origin,e[0]+i,e[1]+n,0),(0,l.s)(t.basis1,i,0,0),(0,l.s)(t.basis2,0,n,0),(0,u.al)(0,0,1,0,t.plane),t}function I(e,t,i){return!!(0,u.BR)(e.plane,t,i)&&N(e,i)}function k(e,t,i){const n=j.get();E(e,t,n,j.get());let r=Number.POSITIVE_INFINITY;for(const o of U){const a=z(e,o,W.get()),d=g.WM.get();if((0,u.rx)(n,a,d)){const e=(0,l.r)(g.WM.get(),t.origin,d),n=Math.abs((0,s.ZF)((0,l.d)(t.direction,e)));n<r&&(r=n,(0,l.g)(i,d))}}return r===Number.POSITIVE_INFINITY?S(e,t,i):i}function S(e,t,i){if(I(e,t,i))return i;const n=j.get(),s=j.get();E(e,t,n,s);let r=Number.POSITIVE_INFINITY;for(const o of U){const a=z(e,o,W.get()),d=g.WM.get();if((0,u.dZ)(n,a,d)){const e=(0,h.Jk)(t,d);if(!(0,u.Ac)(s,d))continue;e<r&&(r=e,(0,l.g)(i,d))}}return H(e,t.origin)<r&&C(e,t.origin,i),i}function C(e,t,i){const n=(0,u.nF)(e.plane,t,g.WM.get()),s=(0,c.ct)(x(e,e.basis1),n,-1,1,g.WM.get()),r=(0,c.ct)(x(e,e.basis2),n,-1,1,g.WM.get());return(0,l.f)(i,(0,l.b)(g.WM.get(),s,r),e.origin),i}function O(e,t,i){const{origin:n,basis1:s,basis2:r}=e,o=(0,l.f)(g.WM.get(),t,n),a=(0,p.SR)(s,o),d=(0,p.SR)(r,o),c=(0,p.SR)(T(e),o);return(0,l.s)(i,a,d,c)}function H(e,t){const i=O(e,t,g.WM.get()),{basis1:n,basis2:s}=e,r=(0,l.l)(n),o=(0,l.l)(s),a=Math.max(Math.abs(i[0])-r,0),d=Math.max(Math.abs(i[1])-o,0),c=i[2];return a*a+d*d+c*c}function P(e,t){return Math.sqrt(H(e,t))}function M(e,t){const i=-e.plane[3];return(0,p.SR)(T(e),t)-i}function T(e){return(0,u.mJ)(e.plane)}function N(e,t){const i=(0,l.f)(g.WM.get(),t,e.origin),n=(0,l.p)(e.basis1),s=(0,l.p)(e.basis2),r=(0,l.d)(e.basis1,i),o=(0,l.d)(e.basis2,i);return-r-n<0&&r-n<0&&-o-s<0&&o-s<0}function x(e,t){const i=W.get();return(0,l.g)(i.origin,e.origin),(0,l.g)(i.vector,t),i}function z(e,t,i){const{basis1:n,basis2:s,origin:r}=e,o=(0,l.a)(g.WM.get(),n,t.origin[0]),a=(0,l.a)(g.WM.get(),s,t.origin[1]);(0,l.b)(i.origin,o,a),(0,l.b)(i.origin,i.origin,r);const d=(0,l.a)(g.WM.get(),n,t.direction[0]),c=(0,l.a)(g.WM.get(),s,t.direction[1]);return(0,l.a)(i.vector,(0,l.b)(d,d,c),2),i}function E(e,t,i,n){const s=T(e);(0,u.my)(s,t.direction,t.origin,i),(0,u.my)((0,u.mJ)(i),s,t.origin,n)}const F={plane:(0,u.Ue)(),origin:(0,d.f)(0,0,0),basis1:(0,d.f)(1,0,0),basis2:(0,d.f)(0,1,0)},j=new r.x(u.Ue),W=new r.x(c.Ue),R=(0,d.c)(),Z=new r.x((()=>({origin:null,basis1:null,basis2:null,plane:null}))),U=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],A=(0,a.c)(),J=(0,a.c)();Object.freeze({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=(0,u.Ue)(),this.origin=(0,d.c)(),this.basis1=(0,d.c)(),this.basis2=(0,d.c)()}},create:b,wrap:function(e,t,i){const n=Z.get();return n.origin=e,n.basis1=t,n.basis2=i,n.plane=(0,u.re)(0,0,0,0),w(n),n},copy:y,copyWithoutVerify:function(e,t){(0,l.g)(t.origin,e.origin),(0,l.g)(t.basis1,e.basis1),(0,l.g)(t.basis2,e.basis2),(0,u.JG)(e.plane,t.plane)},fromValues:v,updateUnboundedPlane:w,elevate:m,setExtent:function(e,t,i){return _(t,i),m(i,M(e,e.origin),i),i},fromAABoundingRect:_,intersectRay:I,intersectRayClosestSilhouette:function(e,t,i){if(I(e,t,i))return i;const n=k(e,t,g.WM.get());return(0,l.b)(i,t.origin,(0,l.a)(g.WM.get(),t.direction,(0,l.i)(t.origin,n)/(0,l.l)(t.direction))),i},closestPointOnSilhouette:k,closestPoint:S,projectPoint:C,projectPointLocal:O,distance2:H,distance:P,distanceToSilhouette:function(e,t){let i=Number.NEGATIVE_INFINITY;for(const n of U){const s=z(e,n,W.get()),r=(0,c.Jk)(s,t);r>i&&(i=r)}return Math.sqrt(i)},extrusionContainsPoint:function(e,t){return(0,u.Ac)(e.plane,t)&&N(e,t)},axisAt:function(e,t,i,n){return function(e,t,i){switch(t){case 0:(0,l.g)(i,e.basis1),(0,l.n)(i,i);break;case 1:(0,l.g)(i,e.basis2),(0,l.n)(i,i);break;case 2:(0,l.g)(i,T(e))}return i}(e,i,n)},altitudeAt:M,setAltitudeAt:function(e,t,i,n){const s=M(e,t),r=(0,l.a)(R,T(e),i-s);return(0,l.b)(n,t,r),n},equals:function(e,t){return(0,l.k)(e.basis1,t.basis1)&&(0,l.k)(e.basis2,t.basis2)&&(0,l.k)(e.origin,t.origin)},transform:function(e,t,i){return e!==i&&y(e,i),(0,o.a)(A,t),(0,o.e)(A,A),(0,l.m)(i.basis1,e.basis1,A),(0,l.m)(i.basis2,e.basis2,A),(0,l.m)((0,u.mJ)(i.plane),(0,u.mJ)(e.plane),A),(0,l.m)(i.origin,e.origin,t),(0,u.T5)(i.plane,i.origin,i.plane),i},rotate:function(e,t,i,n){return e!==n&&y(e,n),(0,o.c)(J,(0,o.i)(J),t,i),(0,l.m)(n.basis1,e.basis1,J),(0,l.m)(n.basis2,e.basis2,J),w(n),n},normal:T,UP:F})},77195:(e,t,i)=>{i.d(t,{q:()=>c});var n=i(19677),s=i(5632),r=i(36544),o=i(59472),a=i(39105),l=i(21562);const d=r.Z.getLogger("esri.core.workers.WorkerHandle");class c{constructor(e,t,i,n={}){this._mainMethod=t,this._listeners=[],this._promise=(0,l.bA)(e,{...n,schedule:i}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,n.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>d.error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,s.kB)((()=>{i.removed=!0,(0,n.Od)(this._listeners,i),this._thread&&(0,o.pC)(i.threadHandle)&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const n=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:n,signal:i})}return this._promise?this._promise.then((()=>((0,a.k_)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},88997:(e,t,i)=>{i.r(t),i.d(t,{FeatureServiceSnappingSource:()=>q});var n=i(56140),s=i(82677),r=i(77204),o=i(5632),a=i(59472),l=i(80621),d=i(79881),c=(i(95830),i(68055),i(36544),i(87566)),u=i(9419),h=i(61106),p=i(17387),g=i(38256),f=i(55534);function b(e,t){return(0,f.g)(t.extent,y),(0,f.h)(y,(0,p.s)(v,e.x,e.y,0))}const y=(0,f.a)(),v=(0,g.c)();var w=i(69829);let m=class extends((0,r.p)(s.Z)){constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=(0,a.pC)(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort(((e,i)=>b(t,e)-b(t,i))),e}scaleEnabled(){return(0,w.rs)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||(0,a.Wi)(this.tileInfo))return[];if(!this.scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,n=[];for(const{row:s,colFrom:r,colTo:o}of e)for(let e=r;e<=o;e++){const r={id:null,level:i,row:s,col:t.normalizeCol(e)};this.tileInfo.updateTileInfo(r),n.push(r)}return n}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featuresTilingScheme)?void 0:t.tileInfo)?e:null}get tileSize(){return(0,a.pC)(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.handles.add(this.watch("view.state.viewpoint",(()=>this.notifyChange("tilesCoveringView")),!0))}};(0,n._)([(0,d.Cb)({readOnly:!0})],m.prototype,"tiles",null),(0,n._)([(0,d.Cb)({readOnly:!0})],m.prototype,"scaleEnabled",null),(0,n._)([(0,d.Cb)({readOnly:!0})],m.prototype,"tilesCoveringView",null),(0,n._)([(0,d.Cb)({readOnly:!0})],m.prototype,"tileInfo",null),(0,n._)([(0,d.Cb)({readOnly:!0})],m.prototype,"tileSize",null),(0,n._)([(0,d.Cb)({constructOnly:!0})],m.prototype,"view",void 0),(0,n._)([(0,d.Cb)({constructOnly:!0})],m.prototype,"layer",void 0),(0,n._)([(0,d.Cb)()],m.prototype,"pointOfInterest",void 0),m=(0,n._)([(0,c.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],m);let _=class extends r.r{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=this.effectivePointOfInterest;if((0,a.pC)(t)){const i=e.map((e=>b(t,e)));for(let n=1;n<i.length;n++)if(i[n-1]>i[n])return e.sort(((e,i)=>b(t,e)-b(t,i))),e.slice()}return e}get tilesCoveringView(){var e,t;return this.filterTiles(null==(e=this.view.featureTiles)||null==(t=e.tiles)?void 0:t.toArray()).map(I)}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tilingScheme.toTileInfo())?e:null}get tileSize(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tileSize)?e:256}get effectivePointOfInterest(){var e;const t=this.pointOfInterest;return(0,a.pC)(t)?t:null==(e=this.view.pointsOfInterest)?void 0:e.focus.location}initialize(){this.handles.add((0,l.S1)(this.view,"featureTiles",(e=>{this.handles.remove(S),e&&this.handles.add(e.addClient(),S)})))}filterTiles(e){return(0,a.Wi)(e)?[]:e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>k&&2===e.measures.visibility))}};function I({lij:[e,t,i],extent:n}){return{id:`${e}/${t}/${i}`,level:e,row:t,col:i,extent:n}}(0,n._)([(0,d.Cb)({readOnly:!0})],_.prototype,"tiles",null),(0,n._)([(0,d.Cb)({readOnly:!0})],_.prototype,"tilesCoveringView",null),(0,n._)([(0,d.Cb)({readOnly:!0})],_.prototype,"tileInfo",null),(0,n._)([(0,d.Cb)({readOnly:!0})],_.prototype,"tileSize",null),(0,n._)([(0,d.Cb)({constructOnly:!0})],_.prototype,"view",void 0),(0,n._)([(0,d.Cb)()],_.prototype,"pointOfInterest",void 0),(0,n._)([(0,d.Cb)()],_.prototype,"effectivePointOfInterest",null),_=(0,n._)([(0,c.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],_);const k=50,S="feature-tiles";var C=i(78938),O=i(59691),H=i(53817),P=i(50897),M=i(78745),T=i(15988),N=i(33655),x=i(60050),z=i(5674),E=i(44190),F=i(36817);const j=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let W=class extends s.Z{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=j.map((e=>new z.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,i=new Set((this._labels.size,this._labels.keys()));e.forEach(((n,s)=>{const r=n.lij.toString();i.delete(r);const o=n.lij[0],l=n.geometry;if(this.enablePolygons&&!this._polygons.has(r)){const e=new T.Z({geometry:l,symbol:this._symbols[o%this._symbols.length]});this._polygons.set(r,e),t.push(e)}if(this.enableLabels){const i=(e=>{if((0,a.pC)(e.label))return e.label;let t=e.lij.toString();return(0,a.pC)(e.loadPriority)&&(t+=` (${e.loadPriority})`),t})(n),o=s/(e.length-1),d=(0,N.t7)(0,200,o),c=(0,N.t7)(20,6,o)/.75,u=(0,a.pC)(n.loadPriority)&&n.loadPriority>=e.length,h=new M.Z([d,u?0:d,u?0:d]),p="3d"===this.view.type?()=>new x.Z({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new F.Z({text:i,halo:{color:"white",size:1/.75},material:{color:h},size:c})]}):()=>new E.Z({text:i,haloColor:"white",haloSize:1/.75,color:h,size:c});if(this._labels.has(r)){const e=this._labels.get(r),t=p();((0,a.Wi)(e.symbol)||JSON.stringify(t)!==JSON.stringify(e.symbol))&&(e.symbol=t)}else{const e=new T.Z({geometry:l.extent.center,symbol:p()});this._labels.set(r,e),t.push(e)}}}));const n=new Array;i.forEach((e=>{this._polygons.has(e)&&(n.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(n.push(this._labels.get(e)),this._labels.delete(e))})),this.view.graphics.removeMany(n),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,n._)([(0,d.Cb)({constructOnly:!0})],W.prototype,"view",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],W.prototype,"updating",void 0),(0,n._)([(0,d.Cb)()],W.prototype,"enabled",null),W=(0,n._)([(0,c.j)("esri.views.support.TileTreeDebugger")],W);let R=class extends W{constructor(e){super(e),this.handles=new O.Z}initialize(){const e=setInterval((()=>this.fetchDebugInfo()),2e3);this.handles.add((0,o.kB)((()=>clearInterval(e))))}destroy(){this.handles.destroy()}getTiles(){if(!this.debugInfo)return[];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this.debugInfo.pendingTiles.forEach((i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)}));const i=i=>{var n;const s=t.get(i),r=null!=(n=e.get(i))?n:"?";return s?`${s}:${r}\n${i}`:`store:${r}\n${i}`},n=new Map;return this.debugInfo.storedTiles.forEach((e=>{n.set(e.data.id,e.data)})),this.debugInfo.pendingTiles.forEach((e=>{n.set(e.data.id,e.data)})),Array.from(n.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:H.Z.fromExtent((0,P.HH)(e.extent,this.view.spatialReference)),label:i(e.id)})))}fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this.debugInfo=e,this.update()}))}};(0,n._)([(0,d.Cb)({constructOnly:!0})],R.prototype,"handle",void 0),R=(0,n._)([(0,c.j)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],R);var Z=i(39105),U=i(77195),A=i(6635);let J=class extends r.r{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy()}initialize(){this.workerHandle=new L(this.schedule),this.handles.add([this.workerHandle.on("notify-updating",(({updating:e})=>this.workerHandleUpdating=e)),this.workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){const i=this.serviceInfoFromLayer(e.layer);if((0,a.Wi)(i))return;const n={configuration:this.convertConfiguration(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",n,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=this.convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const i={distance:e.distance,point:e.coordinateHelper.toPoint(e.point,new h.Z).toJSON(),types:e.types,filter:(0,a.pC)(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(i,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:(0,a.pC)(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("updateTiles",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var i,n,s,r,o,a;const l=this.editId++,d={id:l};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("beginApplyEdits",d,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));const c=await this.updatingHandles.addPromise((0,Z.Hl)(e.result,t)),u={id:l,edits:{addedFeatures:null!=(i=null==(n=c.addedFeatures)?void 0:n.map((({objectId:e})=>e)))?i:[],deletedFeatures:null!=(s=null==(r=c.deletedFeatures)?void 0:r.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t}))))?s:[],updatedFeatures:null!=(o=null==(a=c.updatedFeatures)?void 0:a.map((({objectId:e})=>e)))?o:[]}};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("endApplyEdits",u,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}convertConfiguration(e){return{filter:(0,a.pC)(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}serviceInfoFromLayer(e){var t;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl.path,fields:e.fields.map((e=>e.toJSON())),geometryType:A.Mk.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null==(t=e.timeInfo)?void 0:t.toJSON()}}};(0,n._)([(0,d.Cb)({constructOnly:!0})],J.prototype,"schedule",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],J.prototype,"updating",null),(0,n._)([(0,d.Cb)({readOnly:!0})],J.prototype,"availability",void 0),(0,n._)([(0,d.Cb)()],J.prototype,"workerHandleUpdating",void 0),J=(0,n._)([(0,c.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],J);class L extends U.q{constructor(e){super("FeatureServiceSnappingSourceWorker","fetchCandidates",e,{strategy:"dedicated"})}getTransferList(){return[]}}var V=i(18897),D=i(40920);let $=class extends s.Z{constructor(e){super(e),this.pointOfInterest=null}get tiles(){return[{id:"0/0/0",level:0,row:0,col:0,extent:(0,P.al)(-1e8,-1e8,1e8,1e8)}]}get tileInfo(){return new D.Z({origin:new h.Z({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new V.Z({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};(0,n._)([(0,d.Cb)({readOnly:!0})],$.prototype,"tiles",null),(0,n._)([(0,d.Cb)({readOnly:!0})],$.prototype,"tileInfo",null),(0,n._)([(0,d.Cb)({readOnly:!0})],$.prototype,"tileSize",null),(0,n._)([(0,d.Cb)({constructOnly:!0})],$.prototype,"layer",void 0),(0,n._)([(0,d.Cb)()],$.prototype,"pointOfInterest",void 0),$=(0,n._)([(0,c.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],$);var B=i(77720);let q=class extends((0,r.p)(s.Z)){constructor(e){super(e)}get updateTilesParameters(){return{tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return{filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){const e=this.view;if((0,a.pC)(e))switch(e.type){case"2d":this.tilesOfInterest=new m({view:e,layer:this.layer}),this.workerHandle=new J;break;case"3d":{const t=e.resourceController;this.tilesOfInterest=new _({view:e}),this.workerHandle=new J({schedule:e=>t.schedule(e)});break}}else this.tilesOfInterest=new $({layer:this.layer}),this.workerHandle=new J;this.handles.add([(0,o.ed)(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add(this,"updateTilesParameters",(()=>this.workerHandle.updateTiles(this.updateTilesParameters,null)),2),this.handles.add([(0,u.U5)((()=>this.configuration),(e=>this.workerHandle.configure(e,null)))]),(0,a.pC)(e)&&this.handles.add((0,l.S1)(B.Z,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",(t=>{t&&!this.debug?(this.debug=new R({view:e,handle:this.workerHandle}),this.handles.add((0,o.ed)(this.debug),"debug")):!t&&this.debug&&this.handles.remove("debug")}))),this.handles.add(this.layerSource.layer.on("apply-edits",(e=>{this.workerHandle.applyEdits(e,null)})))}refresh(){this.workerHandle.refresh(null)}async fetchCandidates(e,t){return this.tilesOfInterest.pointOfInterest=e.coordinateHelper.toPoint(e.point,new h.Z),(await this.workerHandle.fetchCandidates({...e,filter:null},t)).candidates.map((t=>(0,C.X)(t,e.coordinateHelper)))}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};(0,n._)([(0,d.Cb)({constructOnly:!0})],q.prototype,"spatialReference",void 0),(0,n._)([(0,d.Cb)({constructOnly:!0})],q.prototype,"layerSource",void 0),(0,n._)([(0,d.Cb)({constructOnly:!0})],q.prototype,"view",void 0),(0,n._)([(0,d.Cb)()],q.prototype,"tilesOfInterest",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],q.prototype,"updateTilesParameters",null),(0,n._)([(0,d.Cb)({readOnly:!0})],q.prototype,"updating",null),(0,n._)([(0,d.Cb)({readOnly:!0})],q.prototype,"configuration",null),(0,n._)([(0,d.Cb)({readOnly:!0})],q.prototype,"availability",null),q=(0,n._)([(0,c.j)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],q)},78938:(e,t,i)=>{i.d(t,{X:()=>l});var n=i(63344),s=i(72821),r=i(26718),o=i(2826);class a extends r.a{constructor(e){super({...e,constraint:new s.Hk(e.coordinateHelper,e.targetPoint)})}get hints(){return[new o.n(this.targetPoint)]}}function l(e,t){switch(e.type){case"edge":return new n.L({coordinateHelper:t,edgeStart:t.fromPoint(e.start),edgeEnd:t.fromPoint(e.end),targetPoint:t.fromPoint(e.target),objectId:e.objectId});case"vertex":return new a({coordinateHelper:t,targetPoint:t.fromPoint(e.target),objectId:e.objectId})}}}}]);