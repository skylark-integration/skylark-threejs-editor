/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,d){"use strict";return function(n,s){var r=n.strings,a=new t.UIRow,g=s.geometry.parameters,o=g.options;o.curveSegments=void 0!=o.curveSegments?o.curveSegments:12,o.steps=void 0!=o.steps?o.steps:1,o.depth=void 0!=o.depth?o.depth:100,o.bevelThickness=void 0!==o.bevelThickness?o.bevelThickness:6,o.bevelSize=void 0!==o.bevelSize?o.bevelSize:4,o.bevelOffset=void 0!==o.bevelOffset?o.bevelOffset:0,o.bevelSegments=void 0!==o.bevelSegments?o.bevelSegments:3;var v=new t.UIRow,i=new t.UIInteger(o.curveSegments).onChange(k).setRange(1,1/0);v.add(new t.UIText(r.getKey("sidebar/geometry/extrude_geometry/curveSegments")).setWidth("90px")),v.add(i),a.add(v);var b=new t.UIRow,l=new t.UIInteger(o.steps).onChange(k).setRange(1,1/0);b.add(new t.UIText(r.getKey("sidebar/geometry/extrude_geometry/steps")).setWidth("90px")),b.add(l),a.add(b);var m=new t.UIRow,u=new t.UINumber(o.depth).onChange(k).setRange(1,1/0);m.add(new t.UIText(r.getKey("sidebar/geometry/extrude_geometry/depth")).setWidth("90px")),m.add(u),a.add(m);var w=new t.UIRow,h=new t.UICheckbox(o.bevelEnabled).onChange(k);if(w.add(new t.UIText(r.getKey("sidebar/geometry/extrude_geometry/bevelEnabled")).setWidth("90px")),w.add(h),a.add(w),!0===o.bevelEnabled){var y=new t.UIRow,x=new t.UINumber(o.bevelThickness).onChange(k);y.add(new t.UIText(r.getKey("sidebar/geometry/extrude_geometry/bevelThickness")).setWidth("90px")),y.add(x),a.add(y);var I=new t.UIRow,p=new t.UINumber(o.bevelSize).onChange(k);I.add(new t.UIText(r.getKey("sidebar/geometry/extrude_geometry/bevelSize")).setWidth("90px")),I.add(p),a.add(I);var U=new t.UIRow,f=new t.UINumber(o.bevelOffset).onChange(k);U.add(new t.UIText(r.getKey("sidebar/geometry/extrude_geometry/bevelOffset")).setWidth("90px")),U.add(f),a.add(U);var c=new t.UIRow,S=new t.UIInteger(o.bevelSegments).onChange(k).setRange(0,1/0);c.add(new t.UIText(r.getKey("sidebar/geometry/extrude_geometry/bevelSegments")).setWidth("90px")),c.add(S),a.add(c)}var T=new t.UIButton(r.getKey("sidebar/geometry/extrude_geometry/shape")).onClick(function(){n.execute(new d(n,s,new e.ShapeBufferGeometry(g.shapes,o.curveSegments)))}).setWidth("90px").setMarginLeft("90px");function k(){n.execute(new d(n,s,new e.ExtrudeBufferGeometry(g.shapes,{curveSegments:i.getValue(),steps:l.getValue(),depth:u.getValue(),bevelEnabled:h.getValue(),bevelThickness:void 0!==x?x.getValue():o.bevelThickness,bevelSize:void 0!==p?p.getValue():o.bevelSize,bevelOffset:void 0!==f?f.getValue():o.bevelOffset,bevelSegments:void 0!==S?S.getValue():o.bevelSegments})))}return a.add(T),a}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/ExtrudeGeometry.js.map