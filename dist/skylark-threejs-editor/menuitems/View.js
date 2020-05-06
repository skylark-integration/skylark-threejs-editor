/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return{MenubarView:function(n){var t=new e.UIPanel;t.setClass("menu");var s=new e.UIPanel;s.setClass("title"),s.setTextContent("View"),t.add(s);var a=new e.UIPanel;a.setClass("options"),t.add(a);var i=new e.UIRow;return i.setClass("option"),i.setTextContent("VR mode"),i.onClick(function(){n.signals.enterVR.dispatch()}),a.add(i),t}}});
//# sourceMappingURL=../sourcemaps/menuitems/View.js.map
