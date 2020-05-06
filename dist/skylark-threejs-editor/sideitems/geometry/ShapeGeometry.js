/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,n){"use strict";return function(r,a){var s=r.strings,o=new t.UIRow,u=a.geometry.parameters,d=new t.UIRow,g=new t.UIInteger(u.curveSegments||12).onChange(function(){r.execute(new n(r,a,new e.ShapeBufferGeometry(u.shapes,g.getValue())))}).setRange(1,1/0);d.add(new t.UIText(s.getKey("sidebar/geometry/shape_geometry/curveSegments")).setWidth("90px")),d.add(g),o.add(d);var m=new t.UIButton(s.getKey("sidebar/geometry/shape_geometry/extrude")).onClick(function(){r.execute(new n(r,a,new e.ExtrudeBufferGeometry(u.shapes,{curveSegments:g.getValue()})))}).setWidth("90px").setMarginLeft("90px");return o.add(m),o}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/ShapeGeometry.js.map
