/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","skylark-threejs-ex/geometries/TeapotBufferGeometry"],function(e,d){"use strict";return function(t,n){var a=new e.UIRow,o=n.geometry.parameters,w=new e.UIRow,r=new e.UINumber(o.size).onChange(c);w.add(new e.UIText("Size").setWidth("90px")),w.add(r),a.add(w);var i=new e.UIRow,g=new e.UIInteger(o.segments).setRange(1,1/0).onChange(c);i.add(new e.UIText("Segments").setWidth("90px")),i.add(g),a.add(i);var h=new e.UIRow,s=new e.UICheckbox(o.bottom).onChange(c);h.add(new e.UIText("Bottom").setWidth("90px")),h.add(s),a.add(h);var I=new e.UIRow,U=new e.UICheckbox(o.lid).onChange(c);I.add(new e.UIText("Lid").setWidth("90px")),I.add(U),a.add(I);var x=new e.UIRow,u=new e.UICheckbox(o.body).onChange(c);x.add(new e.UIText("Body").setWidth("90px")),x.add(u),a.add(x);var m=new e.UIRow,l=new e.UICheckbox(o.fitLid).onChange(c);m.add(new e.UIText("Fitted Lid").setWidth("90px")),m.add(l),a.add(m);var p=new e.UIRow,C=new e.UICheckbox(o.blinn).onChange(c);function c(){n.geometry.dispose(),n.geometry=new d(r.getValue(),g.getValue(),s.getValue(),U.getValue(),u.getValue(),l.getValue(),C.getValue()),n.geometry.computeBoundingSphere(),t.geometryChanged.dispatch(n)}return p.add(new e.UIText("Blinn-scaled").setWidth("90px")),p.add(C),a.add(p),a}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/TeapotBufferGeometry.js.map
