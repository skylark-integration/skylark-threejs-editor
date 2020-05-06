/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,a){"use strict";return function(r,d){var n=r.strings,s=new t.UIRow,o=d.geometry.parameters,g=new t.UIRow,u=new t.UINumber(o.radius).onChange(l);g.add(new t.UIText(n.getKey("sidebar/geometry/torus_geometry/radius")).setWidth("90px")),g.add(u),s.add(g);var m=new t.UIRow,w=new t.UINumber(o.tube).onChange(l);m.add(new t.UIText(n.getKey("sidebar/geometry/torus_geometry/tube")).setWidth("90px")),m.add(w),s.add(m);var i=new t.UIRow,y=new t.UIInteger(o.radialSegments).setRange(1,1/0).onChange(l);i.add(new t.UIText(n.getKey("sidebar/geometry/torus_geometry/radialsegments")).setWidth("90px")),i.add(y),s.add(i);var I=new t.UIRow,U=new t.UIInteger(o.tubularSegments).setRange(1,1/0).onChange(l);I.add(new t.UIText(n.getKey("sidebar/geometry/torus_geometry/tubularsegments")).setWidth("90px")),I.add(U),s.add(I);var b=new t.UIRow,h=new t.UINumber(o.arc*e.MathUtils.RAD2DEG).setStep(10).onChange(l);function l(){r.execute(new a(r,d,new e.TorusBufferGeometry(u.getValue(),w.getValue(),y.getValue(),U.getValue(),h.getValue()*e.MathUtils.DEG2RAD)))}return b.add(new t.UIText(n.getKey("sidebar/geometry/torus_geometry/arc")).setWidth("90px")),b.add(h),s.add(b),s}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/TorusGeometry.js.map
