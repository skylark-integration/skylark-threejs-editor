/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,n){"use strict";return function(a,d){var r=a.strings,g=new t.UIRow,o=d.geometry.parameters,s=new t.UIRow,w=new t.UINumber(o.width).onChange(U);s.add(new t.UIText(r.getKey("sidebar/geometry/plane_geometry/width")).setWidth("90px")),s.add(w),g.add(s);var i=new t.UIRow,m=new t.UINumber(o.height).onChange(U);i.add(new t.UIText(r.getKey("sidebar/geometry/plane_geometry/height")).setWidth("90px")),i.add(m),g.add(i);var h=new t.UIRow,y=new t.UIInteger(o.widthSegments).setRange(1,1/0).onChange(U);h.add(new t.UIText(r.getKey("sidebar/geometry/plane_geometry/widthsegments")).setWidth("90px")),h.add(y),g.add(h);var u=new t.UIRow,I=new t.UIInteger(o.heightSegments).setRange(1,1/0).onChange(U);function U(){a.execute(new n(a,d,new e.PlaneBufferGeometry(w.getValue(),m.getValue(),y.getValue(),I.getValue())))}return u.add(new t.UIText(r.getKey("sidebar/geometry/plane_geometry/heightsegments")).setWidth("90px")),u.add(I),g.add(u),g}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/PlaneGeometry.js.map
