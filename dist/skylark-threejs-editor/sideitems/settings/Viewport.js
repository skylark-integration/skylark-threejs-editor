/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","../../ThreeUI"],function(e,n){"use strict";return function(t){var i=t.signals,r=t.strings,a=new e.UIDiv;a.add(new e.UIBreak),a.add(new e.UIText(r.getKey("sidebar/settings/viewport/grid")).setWidth("90px"));var d=new n.UIBoolean(!0).onChange(function(){i.showGridChanged.dispatch(d.getValue())});return a.add(d),a}});
//# sourceMappingURL=../../sourcemaps/sideitems/settings/Viewport.js.map
