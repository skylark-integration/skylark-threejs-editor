/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,d){"use strict";return function(n,a){var r=n.strings,g=new t.UIRow,o=a.geometry.parameters,i=new t.UIRow,s=new t.UINumber(o.radiusTop).onChange(b);i.add(new t.UIText(r.getKey("sidebar/geometry/cylinder_geometry/radiustop")).setWidth("90px")),i.add(s),g.add(i);var m=new t.UIRow,y=new t.UINumber(o.radiusBottom).onChange(b);m.add(new t.UIText(r.getKey("sidebar/geometry/cylinder_geometry/radiusbottom")).setWidth("90px")),m.add(y),g.add(m);var w=new t.UIRow,h=new t.UINumber(o.height).onChange(b);w.add(new t.UIText(r.getKey("sidebar/geometry/cylinder_geometry/height")).setWidth("90px")),w.add(h),g.add(w);var u=new t.UIRow,I=new t.UIInteger(o.radialSegments).setRange(1,1/0).onChange(b);u.add(new t.UIText(r.getKey("sidebar/geometry/cylinder_geometry/radialsegments")).setWidth("90px")),u.add(I),g.add(u);var U=new t.UIRow,l=new t.UIInteger(o.heightSegments).setRange(1,1/0).onChange(b);U.add(new t.UIText(r.getKey("sidebar/geometry/cylinder_geometry/heightsegments")).setWidth("90px")),U.add(l),g.add(U);var x=new t.UIRow,c=new t.UICheckbox(o.openEnded).onChange(b);function b(){n.execute(new d(n,a,new e.CylinderBufferGeometry(s.getValue(),y.getValue(),h.getValue(),I.getValue(),l.getValue(),c.getValue())))}return x.add(new t.UIText(r.getKey("sidebar/geometry/cylinder_geometry/openended")).setWidth("90px")),x.add(c),g.add(x),g}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/CylinderGeometry.js.map
