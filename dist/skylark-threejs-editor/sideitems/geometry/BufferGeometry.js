/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return function(t){var r=t.strings,n=t.signals,a=new e.UIRow;function d(t){if(null!==t&&void 0!==t){var n=t.geometry;if(n&&n.isBufferGeometry){a.clear(),a.setDisplay("block");var d=new e.UIText(r.getKey("sidebar/geometry/buffer_geometry/attributes")).setWidth("90px");a.add(d);var i=(new e.UISpan).setDisplay("inline-block").setWidth("160px");a.add(i);var o=n.index;null!==o&&(i.add(new e.UIText(r.getKey("sidebar/geometry/buffer_geometry/index")).setWidth("80px")),i.add(new e.UIText(o.count.format()).setFontSize("12px")),i.add(new e.UIBreak));var s=n.attributes;for(var u in s){var f=s[u];i.add(new e.UIText(u).setWidth("80px")),i.add(new e.UIText(f.count.format()+" ("+f.itemSize+")").setFontSize("12px")),i.add(new e.UIBreak)}}else a.setDisplay("none")}}return n.objectSelected.add(d),n.geometryChanged.add(d),a}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/BufferGeometry.js.map
