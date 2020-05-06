/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return function(t){var d=t.strings,a=t.signals,n=new e.UIRow,r=new e.UIRow,s=new e.UIText;r.add(new e.UIText(d.getKey("sidebar/geometry/geometry/vertices")).setWidth("90px")),r.add(s),n.add(r);var o=new e.UIRow,i=new e.UIText;function g(e){if(null!==e&&void 0!==e){var t=e.geometry;t&&t.isGeometry?(n.setDisplay("block"),s.setValue(t.vertices.length.format()),i.setValue(t.faces.length.format())):n.setDisplay("none")}}return o.add(new e.UIText(d.getKey("sidebar/geometry/geometry/faces")).setWidth("90px")),o.add(i),n.add(o),a.objectSelected.add(g),a.geometryChanged.add(g),n}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/Geometry.js.map
