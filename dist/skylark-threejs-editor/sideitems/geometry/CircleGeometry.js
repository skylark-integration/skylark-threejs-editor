/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,a){"use strict";return function(r,n){var d=r.strings,s=new t.UIRow,g=n.geometry.parameters,o=new t.UIRow,i=new t.UINumber(g.radius).onChange(l);o.add(new t.UIText(d.getKey("sidebar/geometry/circle_geometry/radius")).setWidth("90px")),o.add(i),s.add(o);var m=new t.UIRow,w=new t.UIInteger(g.segments).setRange(3,1/0).onChange(l);m.add(new t.UIText(d.getKey("sidebar/geometry/circle_geometry/segments")).setWidth("90px")),m.add(w),s.add(m);var h=new t.UIRow,u=new t.UINumber(g.thetaStart*e.MathUtils.RAD2DEG).setStep(10).onChange(l);h.add(new t.UIText(d.getKey("sidebar/geometry/circle_geometry/thetastart")).setWidth("90px")),h.add(u),s.add(h);var y=new t.UIRow,U=new t.UINumber(g.thetaLength*e.MathUtils.RAD2DEG).setStep(10).onChange(l);function l(){r.execute(new a(r,n,new e.CircleBufferGeometry(i.getValue(),w.getValue(),u.getValue()*e.MathUtils.DEG2RAD,U.getValue()*e.MathUtils.DEG2RAD)))}return y.add(new t.UIText(d.getKey("sidebar/geometry/circle_geometry/thetalength")).setWidth("90px")),y.add(U),s.add(y),s}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/CircleGeometry.js.map
