/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,r){"use strict";return function(n,a){var d=n.strings,o=n.signals,s=new t.UIRow,i=a.geometry.parameters,g=new t.UIRow,m=new t.UINumber(i.radius).onChange(y);g.add(new t.UIText(d.getKey("sidebar/geometry/tetrahedron_geometry/radius")).setWidth("90px")),g.add(m),s.add(g);var u=new t.UIRow,w=new t.UIInteger(i.detail).setRange(0,1/0).onChange(y);function y(){n.execute(new r(n,a,new e.TetrahedronBufferGeometry(m.getValue(),w.getValue()))),o.objectChanged.dispatch(a)}return u.add(new t.UIText(d.getKey("sidebar/geometry/tetrahedron_geometry/detail")).setWidth("90px")),u.add(w),s.add(u),s}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/TetrahedronGeometry.js.map
