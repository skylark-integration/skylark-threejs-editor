/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return function(a){var t=a.signals,n=new e.UISelect;function r(){var e={},t=a.cameras;for(var r in t){var i=t[r];e[i.uuid]=i.name}n.setOptions(e),n.setValue(a.viewportCamera.uuid)}return n.setPosition("absolute"),n.setRight("10px"),n.setTop("10px"),n.onChange(function(){a.setViewportCamera(this.getValue())}),t.cameraAdded.add(r),t.cameraRemoved.add(r),r(),n}});
//# sourceMappingURL=../sourcemaps/viewports/Camera.js.map
