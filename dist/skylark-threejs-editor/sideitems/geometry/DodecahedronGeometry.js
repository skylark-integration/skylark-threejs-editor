/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,d){"use strict";return function(r,n){var a=r.strings,o=new t.UIRow,s=n.geometry.parameters,i=new t.UIRow,g=new t.UINumber(s.radius).onChange(w);i.add(new t.UIText(a.getKey("sidebar/geometry/dodecahedron_geometry/radius")).setWidth("90px")),i.add(g),o.add(i);var m=new t.UIRow,u=new t.UIInteger(s.detail).setRange(0,1/0).onChange(w);function w(){r.execute(new d(r,n,new e.DodecahedronBufferGeometry(g.getValue(),u.getValue())))}return m.add(new t.UIText(a.getKey("sidebar/geometry/dodecahedron_geometry/detail")).setWidth("90px")),m.add(u),o.add(m),o}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/DodecahedronGeometry.js.map
