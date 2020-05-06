/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,n){"use strict";return function(a,r){var d=a.strings,o=a.signals,s=new t.UIRow,i=r.geometry.parameters,g=new t.UIRow,m=new t.UINumber(i.radius).onChange(c);g.add(new t.UIText(d.getKey("sidebar/geometry/icosahedron_geometry/radius")).setWidth("90px")),g.add(m),s.add(g);var u=new t.UIRow,w=new t.UIInteger(i.detail).setRange(0,1/0).onChange(c);function c(){a.execute(new n(a,r,new e.IcosahedronBufferGeometry(m.getValue(),w.getValue()))),o.objectChanged.dispatch(r)}return u.add(new t.UIText(d.getKey("sidebar/geometry/icosahedron_geometry/detail")).setWidth("90px")),u.add(w),s.add(u),s}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/IcosahedronGeometry.js.map
