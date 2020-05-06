/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./ThreeUI"],function(e,n){"use strict";return{SidebarScene:function(a){var t=a.signals,r=a.strings,s=new e.UIPanel;function o(e,n){var a=document.createElement("div");return a.draggable=n,a.innerHTML=l(e),a.value=e.id,a}function u(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l(e){var n,t='<span class="type '+e.type+'"></span> '+u(e.name);if(e.isMesh){var r=e.geometry,s=e.material;t+=' <span class="type '+r.type+'"></span> '+u(r.name),t+=' <span class="type '+s.type+'"></span> '+u(function(e){if(Array.isArray(e)){for(var n=[],a=0;a<e.length;a++)n.push(e[a].name);return n.join(",")}return e.name}(s))}return t+=(n=e.uuid,void 0!==a.scripts[n]?' <span class="type Script"></span>':"")}s.setBorderTop("0"),s.setPaddingTop("20px");var i=!1,d=new n.UIOutliner(a);function g(){t.sceneBackgroundChanged.dispatch(x.getValue(),V.getHexValue(),v.getValue(),w.getValue(),T.getValue())}function c(e){e.encoding=e.isHDRTexture?THREE.RGBEEncoding:THREE.sRGBEncoding,e.isCubeTexture&&e.isHDRTexture&&(e.format=THREE.RGBAFormat,e.minFilter=THREE.NearestFilter,e.magFilter=THREE.NearestFilter,e.generateMipmaps=!1),g()}d.setId("outliner"),d.onChange(function(){i=!0,a.selectById(parseInt(d.getValue())),i=!1}),d.onDblClick(function(){a.focusById(parseInt(d.getValue()))}),s.add(d),s.add(new e.UIBreak);var p=new e.UIRow,x=(new e.UISelect).setOptions({None:"None",Color:"Color",Texture:"Texture",CubeTexture:"CubeTexture",Equirect:"Equirect (HDR)"}).setWidth("150px");x.onChange(function(){g(),I()}),x.setValue("Color"),p.add(new e.UIText(r.getKey("sidebar/scene/background")).setWidth("90px")),p.add(x),s.add(p);var f=new e.UIRow;f.setMarginLeft("90px");var V=(new e.UIColor).setValue("#aaaaaa").onChange(g);f.add(V),s.add(f);var h=new e.UIRow;h.setDisplay("none"),h.setMarginLeft("90px");var v=(new n.UITexture).onChange(c);h.add(v),s.add(h);var C=new e.UIRow;C.setDisplay("none"),C.setMarginLeft("90px");var w=(new n.UICubeTexture).onChange(c);C.add(w),s.add(C);var y=new e.UIRow;y.setDisplay("none"),y.setMarginLeft("90px");var T=(new n.UITexture).onChange(c);function I(){var e=x.getValue();f.setDisplay("Color"===e?"":"none"),h.setDisplay("Texture"===e?"":"none"),C.setDisplay("CubeTexture"===e?"":"none"),y.setDisplay("Equirect"===e?"":"none")}function b(){t.sceneFogChanged.dispatch(E.getValue(),R.getHexValue(),D.getValue(),H.getValue(),F.getValue())}y.add(T),s.add(y);var U=new e.UIRow,E=(new e.UISelect).setOptions({None:"None",Fog:"Linear",FogExp2:"Exponential"}).setWidth("150px");E.onChange(function(){b(),N()}),U.add(new e.UIText(r.getKey("sidebar/scene/fog")).setWidth("90px")),U.add(E),s.add(U);var m=new e.UIRow;m.setDisplay("none"),m.setMarginLeft("90px"),s.add(m);var R=(new e.UIColor).setValue("#aaaaaa");R.onChange(b),m.add(R);var D=new e.UINumber(.1).setWidth("40px").setRange(0,1/0).onChange(b);m.add(D);var H=new e.UINumber(50).setWidth("40px").setRange(0,1/0).onChange(b);m.add(H);var F=new e.UINumber(.05).setWidth("40px").setRange(0,.1).setStep(.001).setPrecision(3).onChange(b);function k(){var e=a.camera,n=a.scene,t=[];t.push(o(e,!1)),t.push(o(n,!1)),function e(n,a){for(var r=0,s=n.length;r<s;r++){var u=n[r],l=o(u,!0);l.style.paddingLeft=10*a+"px",t.push(l),e(u.children,a+1)}}(n.children,1),d.setOptions(t),null!==a.selected&&d.setValue(a.selected.id),n.background?n.background.isColor?(x.setValue("Color"),V.setHexValue(n.background.getHex()),v.setValue(null),w.setValue(null),T.setValue(null)):n.background.isTexture&&!n.background.isPmremTexture?(x.setValue("Texture"),v.setValue(n.background),w.setValue(null),T.setValue(null)):n.background.isCubeTexture&&(x.setValue("CubeTexture"),w.setValue(n.background),v.setValue(null),T.setValue(null)):(x.setValue("None"),v.setValue(null)),n.fog?(R.setHexValue(n.fog.color.getHex()),n.fog.isFog?(E.setValue("Fog"),D.setValue(n.fog.near),H.setValue(n.fog.far)):n.fog.isFogExp2&&(E.setValue("FogExp2"),F.setValue(n.fog.density))):E.setValue("None"),I(),N()}function N(){var e=E.getValue();m.setDisplay("None"===e?"none":""),D.setDisplay("Fog"===e?"":"none"),H.setDisplay("Fog"===e?"":"none"),F.setDisplay("FogExp2"===e?"":"none")}return m.add(F),k(),t.editorCleared.add(k),t.sceneGraphChanged.add(k),t.objectChanged.add(function(e){for(var n=d.options,a=0;a<n.length;a++){var t=n[a];if(t.value===e.id)return void(t.innerHTML=l(e))}}),t.objectSelected.add(function(e){!0!==i&&d.setValue(null!==e?e.id:null)}),s}}});
//# sourceMappingURL=../sourcemaps/sideitems/Scene.js.map