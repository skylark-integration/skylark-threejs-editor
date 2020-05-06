/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../ThreeUI","../../commands/SetGeometryCommand"],function(e,t,a,n){"use strict";return function(r,d){var o=r.strings,g=new t.UIRow,s=d.geometry.parameters,h=new t.UIRow,i=new t.UIInteger(s.segments).onChange(l);h.add(new t.UIText(o.getKey("sidebar/geometry/lathe_geometry/segments")).setWidth("90px")),h.add(i),g.add(h);var m=new t.UIRow,w=new t.UINumber(180*s.phiStart/Math.PI).onChange(l);m.add(new t.UIText(o.getKey("sidebar/geometry/lathe_geometry/phistart")).setWidth("90px")),m.add(w),g.add(m);var I=new t.UIRow,y=new t.UINumber(180*s.phiLength/Math.PI).onChange(l);I.add(new t.UIText(o.getKey("sidebar/geometry/lathe_geometry/philength")).setWidth("90px")),I.add(y),g.add(I);var u=new t.UIRow;u.add(new t.UIText(o.getKey("sidebar/geometry/lathe_geometry/points")).setWidth("90px"));var U=(new a.UIPoints2).setValue(s.points).onChange(l);function l(){r.execute(new n(r,d,new e.LatheBufferGeometry(U.getValue(),i.getValue(),w.getValue()/180*Math.PI,y.getValue()/180*Math.PI)))}return u.add(U),g.add(u),g}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/LatheGeometry.js.map
