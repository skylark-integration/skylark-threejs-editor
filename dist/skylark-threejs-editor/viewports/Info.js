/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return function(t){var n=t.signals,r=t.strings,s=new e.UIPanel;s.setId("info"),s.setPosition("absolute"),s.setLeft("10px"),s.setBottom("10px"),s.setFontSize("12px"),s.setColor("#fff");var o=new e.UIText("0").setMarginLeft("6px"),a=new e.UIText("0").setMarginLeft("6px"),i=new e.UIText("0").setMarginLeft("6px"),d=new e.UIText("0").setMarginLeft("6px");function f(){for(var e=t.scene,n=0,r=0,s=0,d=0,f=e.children.length;d<f;d++)e.children[d].traverseVisible(function(e){if(n++,e.isMesh){var t=e.geometry;t.isGeometry?(r+=t.vertices.length,s+=t.faces.length):t.isBufferGeometry&&(r+=t.attributes.position.count,null!==t.index?s+=t.index.count/3:s+=t.attributes.position.count/3)}});o.setValue(n.format()),a.setValue(r.format()),i.setValue(s.format())}return s.add(new e.UIText(r.getKey("viewport/info/objects")).setTextTransform("lowercase")),s.add(o,new e.UIBreak),s.add(new e.UIText(r.getKey("viewport/info/vertices")).setTextTransform("lowercase")),s.add(a,new e.UIBreak),s.add(new e.UIText(r.getKey("viewport/info/triangles")).setTextTransform("lowercase")),s.add(i,new e.UIBreak),s.add(new e.UIText(r.getKey("viewport/info/frametime")).setTextTransform("lowercase")),s.add(d,new e.UIBreak),n.objectAdded.add(f),n.objectRemoved.add(f),n.geometryChanged.add(f),n.sceneRendered.add(function(e){d.setValue(Number(e).toFixed(2)+" ms")}),s}});
//# sourceMappingURL=../sourcemaps/viewports/Info.js.map
