/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","../ThreeUI"],function(e,t,n){"use strict";return{MenubarStatus:function(a){var s=a.strings,i=new t.UIPanel;i.setClass("menu right");var r=new n.UIBoolean(a.config.getKey("autosave"),s.getKey("menubar/status/autosave"));r.text.setColor("#888"),r.onChange(function(){var e=this.getValue();a.config.setKey("autosave",e),!0===e&&a.signals.sceneGraphChanged.dispatch()}),i.add(r),a.signals.savingStarted.add(function(){r.text.setTextDecoration("underline")}),a.signals.savingFinished.add(function(){r.text.setTextDecoration("none")});var o=new t.UIText("r"+e.REVISION);return o.setClass("title"),o.setOpacity(.5),i.add(o),i}}});
//# sourceMappingURL=../sourcemaps/menuitems/Status.js.map
