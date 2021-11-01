"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[2756],{83873:(t,i,e)=>{function s(t,i){return i?"xoffset"in i&&i.xoffset?Math.max(t,Math.abs(i.xoffset)):"yoffset"in i&&i.yoffset?Math.max(t,Math.abs(i.yoffset||0)):t:t}function r(t,i){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let i=0,e=0;for(let s=0;s<t.length;s++){const r=t[s].size;"number"==typeof r&&(i+=r,e++)}return i/e}(t.stops):i}function a(t,i){if(!i)return t;const e=i.filter((t=>"size"===t.type)).map((i=>{const{maxSize:e,minSize:s}=i;return(r(e,t)+r(s,t))/2}));let s=0;const a=e.length;if(0===a)return t;for(let t=0;t<a;t++)s+=e[t];const h=Math.floor(s/a);return Math.max(h,t)}function h(t){const i=t&&t.renderer,e="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!i)return e;const r="visualVariables"in i?a(e,i.visualVariables):e;if("simple"===i.type)return s(r,i.symbol);if("unique-value"===i.type){let t=r;return i.uniqueValueInfos.forEach((i=>{t=s(t,i.symbol)})),t}if("class-breaks"===i.type){let t=r;return i.classBreakInfos.forEach((i=>{t=s(t,i.symbol)})),t}return i.type,r}e.d(i,{k:()=>h})},32756:(t,i,e)=>{e.r(i),e.d(i,{default:()=>E});var s=e(56140),r=(e(99702),e(35470)),a=e(59691),h=e(82550),o=e(59472),n=e(80621),c=e(79881),l=(e(68055),e(95830),e(36544),e(87566)),p=e(94394),d=e(70778),u=e(24591);class y{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-click"}}class v{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-double-click"}}class g{constructor(t,i,e,s,r,a,h,o,n,c){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=a,this.dy=h,this.totalDx=o,this.totalDy=n,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class _{constructor(t,i,e,s,r,a,h,o,n,c){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=a,this.dy=h,this.totalDx=o,this.totalDy=n,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class f{constructor(t,i,e,s,r,a,h,o,n,c){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=a,this.dy=h,this.totalDx=o,this.totalDy=n,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class b{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-over"}}class m{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-out"}}class G{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-down"}}class w{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-up"}}var x=e(69948),C=e(65865),k=e(2887),S=e(88083),M=e(48142),O=e(5674);let D=class extends r.Z.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._indicators=[],this._dragEvent=null,this._handles=new a.Z,this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new a.Z,this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!0,this.layer=new p.Z({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){(0,u.p)(this.view,this.layer),this.refresh(),this._handles.add([(0,n.YP)(this,["graphics","graphics.length"],(()=>this.refresh())),(0,n.N1)(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(t=>this._clickHandler(t)),x.f.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),x.f.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),x.f.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),x.f.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),x.f.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),x.f.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),x.f.TOOL)])}))])}destroy(){var t;this._removeIndicators(),null==(t=this.view.map)||t.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null,this._handles=(0,o.SC)(this._handles),this._viewHandles=(0,o.SC)(this._viewHandles)}get state(){const t=!!this.get("view.ready"),i=!!this.get("graphics.length"),e=this._activeGraphic;return t&&i?e?"moving":"active":t?"ready":"disabled"}refresh(){this._setUpIndicators(),this._setUpManipulators()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(t,i){const e=this.graphics[t];e&&(e.set("geometry",i),this._setUpIndicators())}_clickHandler(t){const i=this._findTargetGraphic((0,k.vT)(t));if(i){const e=new y(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e)}}_doubleClickHandler(t){const i=this._findTargetGraphic((0,k.vT)(t));if(i){const e=new v(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e)}}_pointerDownHandler(t){const i=this._findTargetGraphic((0,k.vT)(t));if(i){this._activeGraphic=i;const{x:e,y:s}=t,r=new G(i,this.graphics.indexOf(i),e,s,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:i,y:e}=t,s=this.graphics.indexOf(this._activeGraphic),r=new w(this._activeGraphic,s,i,e,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(t){if(this._dragEvent)return;const i=this._findTargetGraphic((0,k.vT)(t));if(i){const{x:e,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===i)return;const r=this.graphics.indexOf(this._hoverGraphic),a=new m(this.graphics[r],r,e,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}const r=this.graphics.indexOf(i),a=new b(i,r,e,s,t);return this._hoverGraphic=i,this.emit("graphic-pointer-over",a),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(a))}if(this._hoverGraphic){const{x:i,y:e}=t,s=this.graphics.indexOf(this._hoverGraphic),r=new m(this.graphics[s],s,i,e,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===t.action&&this._removeIndicators(),t.stopPropagation();const{action:i,x:e,y:s}=t,r=this.graphics.indexOf(this._activeGraphic),a=this._activeGraphic.geometry,o=this._dragEvent?e-this._dragEvent.x:0,n=this._dragEvent?s-this._dragEvent.y:0,c=e-t.origin.x,l=s-t.origin.y,p=(0,d.e7)(a,o,n,this.view);if(this._activeGraphic.geometry=p,this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=(0,d.e7)(t.geometry,o,n,this.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=(0,h.d9)(a);const i=new g(this._activeGraphic,this.graphics,r,e,s,o,n,c,l,t);this.emit("graphic-move-start",i),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(i),i.defaultPrevented&&this._activeGraphic.set("geometry",a)}else if("update"===i){const i=new _(this._activeGraphic,this.graphics,r,e,s,o,n,c,l,t);this.emit("graphic-move",i),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(i),i.defaultPrevented&&(this._activeGraphic.geometry=a)}else{const i=new f(this._activeGraphic,this.graphics,r,e,s,o,n,c,l,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",i),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(i),i.defaultPrevented&&(this.graphics[r].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){let i=null,e=Number.MAX_VALUE;return this._manipulators.forEach((s=>{const r=s.intersectionDistance(t);(0,o.pC)(r)&&r<e&&(e=r,i=s.graphic)})),i}_setUpManipulators(){const{graphics:t,view:i}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=null!=t&&t.length?t.map((t=>new C.L({graphic:t,view:i}))):[]}_setUpIndicators(){var t;this._removeIndicators(),this.indicatorsEnabled&&(this._indicators=(null==(t=this.graphics)?void 0:t.map((t=>{const i=t.clone();return i.symbol=this._getSymbolForIndicator(t),i})))||[],this.layer.addMany(this._indicators))}_removeIndicators(){this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((t=>t.destroy())),this._indicators=[])}_getSymbolForIndicator(t){if((0,o.Wi)(t.symbol))return null;switch(t.symbol.type){case"cim":return new S.Z({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:i,yoffset:e,height:s,width:r}=t.symbol,a=s===r?r:Math.max(s,r);return new S.Z({xoffset:i,yoffset:e,size:a,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:i,yoffset:e,size:s,style:r}=t.symbol;return new S.Z({xoffset:i,yoffset:e,style:"circle"===r?"circle":"square",size:s+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new O.Z({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new M.Z({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:i,yoffset:e}=t.symbol;return new S.Z({xoffset:i,yoffset:e,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};(0,s._)([(0,c.Cb)()],D.prototype,"_activeGraphic",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],D.prototype,"type",void 0),(0,s._)([(0,c.Cb)()],D.prototype,"callbacks",void 0),(0,s._)([(0,c.Cb)()],D.prototype,"enableMoveAllGraphics",void 0),(0,s._)([(0,c.Cb)()],D.prototype,"graphics",void 0),(0,s._)([(0,c.Cb)()],D.prototype,"indicatorsEnabled",void 0),(0,s._)([(0,c.Cb)()],D.prototype,"layer",void 0),(0,s._)([(0,c.Cb)({readOnly:!0})],D.prototype,"state",null),(0,s._)([(0,c.Cb)()],D.prototype,"view",void 0),D=(0,s._)([(0,l.j)("esri.views.draw.support.GraphicMover")],D);const E=D},65865:(t,i,e)=>{e.d(i,{L:()=>f});var s=e(56140),r=e(82677),a=e(35470),h=e(59472),o=e(96071),n=e(79881),c=(e(95830),e(68055),e(36544),e(87566)),l=e(14286),p=e(17387),d=e(77625),u=e(28449),y=e(46970),v=e(5684),g=e(79710),_=e(37694);let f=class extends r.Z{constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new a.Z.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,i=(0,y.vu)(this.graphic),e=t?t.offset:0;return new g.Z({mode:i,offset:e})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const i=this.graphic;if(!1===i.visible)return null;const e=i.geometry;if((0,h.Wi)(e))return null;const s=this._get("focusedSymbol"),r=(0,h.pC)(s)?s:i.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,e,r):this._intersectDistance3D(this.view,t,i)}attach(){this.attachSymbolChanged(),(0,h.pC)(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),(0,h.pC)(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(t=>{(0,h.pC)(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&(0,h.pC)(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))}),!0)}detachSymbolChanged(){(0,h.pC)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&(0,h.pC)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,i,e,s){if(s=s||(0,v.js)(e),(0,h.Wi)(s))return null;let r=this._circleCollisionCache;if("point"!==e.type||"simple-marker"!==s.type)return(0,_.D)(i,e,t)?1:null;if((0,h.Wi)(r)||!r.originalPoint.equals(e)){const i=e,a=t.spatialReference;if((0,u.Up)(i.spatialReference,a)){const t=(0,u.iV)(i,a);r={originalPoint:i.clone(),mapPoint:t,radiusPx:(0,o.F2)(s.size)},this._circleCollisionCache=r}}if((0,h.pC)(r)){const e=(0,o.md)(i,m),a=t.toScreen(r.mapPoint),h=r.radiusPx,n=a.x+(0,o.F2)(s.xoffset),c=a.y-(0,o.F2)(s.yoffset);return(0,l.j)(e,[n,c])<h*h?1:null}return null}_intersectDistance3D(t,i,e){const s=t.toMap(i,{include:[e]});return s&&(0,u.KC)(s,b,t.renderSpatialReference)?(0,p.i)(b,t.state.camera.eye):null}};(0,s._)([(0,n.Cb)({constructOnly:!0,nonNullable:!0})],f.prototype,"graphic",null),(0,s._)([(0,n.Cb)({readOnly:!0})],f.prototype,"elevationInfo",null),(0,s._)([(0,n.Cb)({constructOnly:!0,nonNullable:!0})],f.prototype,"view",void 0),(0,s._)([(0,n.Cb)({value:null})],f.prototype,"focusedSymbol",null),(0,s._)([(0,n.Cb)({constructOnly:!0})],f.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"interactive",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"selectable",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"grabbable",void 0),(0,s._)([(0,n.Cb)({value:!1})],f.prototype,"grabbing",null),(0,s._)([(0,n.Cb)()],f.prototype,"dragging",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"hovering",null),(0,s._)([(0,n.Cb)({value:!1})],f.prototype,"selected",null),(0,s._)([(0,n.Cb)()],f.prototype,"cursor",void 0),f=(0,s._)([(0,c.j)("esri.views.interactive.GraphicManipulator")],f);const b=(0,d.c)(),m=(0,o.s1)()},37694:(t,i,e)=>{e.d(i,{K:()=>o,D:()=>n}),e(36348);var s=e(59472),r=e(93533),a=e(83873),h=e(52937);function o(t,i,e,a=new h.Z){let o;if("2d"===e.type)o=i*e.resolution;else if("3d"===e.type){const a=e.overlayPixelSizeInMapUnits(t),h=e.basemapSpatialReference;o=(0,s.pC)(h)&&!h.equals(e.spatialReference)?(0,r.c9)(h)/(0,r.c9)(e.spatialReference):i*a}const n=t.x-o,c=t.y-o,l=t.x+o,p=t.y+o,{spatialReference:d}=e;return a.xmin=Math.min(n,l),a.ymin=Math.min(c,p),a.xmax=Math.max(n,l),a.ymax=Math.max(c,p),a.spatialReference=d,a}function n(t,i,e){const r=e.toMap(t);return!(0,s.Wi)(r)&&o(r,(0,a.k)(),e,c).intersects(i)}const c=new h.Z}}]);