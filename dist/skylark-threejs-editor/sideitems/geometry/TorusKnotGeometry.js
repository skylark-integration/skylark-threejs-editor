/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,n){"use strict";return function(r,a){var d=r.strings,o=new t.UIRow,g=a.geometry.parameters,s=new t.UIRow,u=new t.UINumber(g.radius).onChange(l);s.add(new t.UIText(d.getKey("sidebar/geometry/torusKnot_geometry/radius")).setWidth("90px")),s.add(u),o.add(s);var m=new t.UIRow,w=new t.UINumber(g.tube).onChange(l);m.add(new t.UIText(d.getKey("sidebar/geometry/torusKnot_geometry/tube")).setWidth("90px")),m.add(w),o.add(m);var i=new t.UIRow,y=new t.UIInteger(g.tubularSegments).setRange(1,1/0).onChange(l);i.add(new t.UIText(d.getKey("sidebar/geometry/torusKnot_geometry/tubularsegments")).setWidth("90px")),i.add(y),o.add(i);var I=new t.UIRow,U=new t.UIInteger(g.radialSegments).setRange(1,1/0).onChange(l);I.add(new t.UIText(d.getKey("sidebar/geometry/torusKnot_geometry/radialsegments")).setWidth("90px")),I.add(U),o.add(I);var b=new t.UIRow,h=new t.UINumber(g.p).onChange(l);b.add(new t.UIText(d.getKey("sidebar/geometry/torusKnot_geometry/p")).setWidth("90px")),b.add(h),o.add(b);var x=new t.UIRow,K=new t.UINumber(g.q).onChange(l);function l(){r.execute(new n(r,a,new e.TorusKnotBufferGeometry(u.getValue(),w.getValue(),y.getValue(),U.getValue(),h.getValue(),K.getValue())))}return x.add(new t.UIText(d.getKey("sidebar/geometry/torusKnot_geometry/q")).setWidth("90px")),x.add(K),o.add(x),o}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/TorusKnotGeometry.js.map
