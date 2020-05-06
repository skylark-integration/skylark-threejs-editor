/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../../commands/SetGeometryCommand"],function(e,t,d){"use strict";return function(n,a){var g=n.strings,r=new t.UIRow,o=a.geometry.parameters,w=new t.UIRow,s=new t.UINumber(o.width).onChange(R);w.add(new t.UIText(g.getKey("sidebar/geometry/box_geometry/width")).setWidth("90px")),w.add(s),r.add(w);var h=new t.UIRow,i=new t.UINumber(o.height).onChange(R);h.add(new t.UIText(g.getKey("sidebar/geometry/box_geometry/height")).setWidth("90px")),h.add(i),r.add(h);var m=new t.UIRow,y=new t.UINumber(o.depth).onChange(R);m.add(new t.UIText(g.getKey("sidebar/geometry/box_geometry/depth")).setWidth("90px")),m.add(y),r.add(m);var I=new t.UIRow,x=new t.UIInteger(o.widthSegments).setRange(1,1/0).onChange(R);I.add(new t.UIText(g.getKey("sidebar/geometry/box_geometry/widthseg")).setWidth("90px")),I.add(x),r.add(I);var U=new t.UIRow,u=new t.UIInteger(o.heightSegments).setRange(1,1/0).onChange(R);U.add(new t.UIText(g.getKey("sidebar/geometry/box_geometry/heightseg")).setWidth("90px")),U.add(u),r.add(U);var b=new t.UIRow,p=new t.UIInteger(o.depthSegments).setRange(1,1/0).onChange(R);function R(){n.execute(new d(n,a,new e.BoxBufferGeometry(s.getValue(),i.getValue(),y.getValue(),x.getValue(),u.getValue(),p.getValue())))}return b.add(new t.UIText(g.getKey("sidebar/geometry/box_geometry/depthseg")).setWidth("90px")),b.add(p),r.add(b),r}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/BoxGeometry.js.map
