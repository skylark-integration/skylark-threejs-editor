/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return{MenubarPlay:function(t){var n=t.signals,a=t.strings,s=new e.UIPanel;s.setClass("menu");var r=!1,l=new e.UIPanel;return l.setClass("title"),l.setTextContent(a.getKey("menubar/play")),l.onClick(function(){!1===r?(r=!0,l.setTextContent(a.getKey("menubar/play/stop")),n.startPlayer.dispatch()):(r=!1,l.setTextContent(a.getKey("menubar/play/play")),n.stopPlayer.dispatch())}),s.add(l),s}}});
//# sourceMappingURL=../sourcemaps/menuitems/Play.js.map
