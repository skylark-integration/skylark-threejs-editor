/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return{MenubarHelp:function(t){var n=t.strings,o=new e.UIPanel;o.setClass("menu");var s=new e.UIPanel;s.setClass("title"),s.setTextContent(n.getKey("menubar/help")),o.add(s);var a,r=new e.UIPanel;return r.setClass("options"),o.add(r),(a=new e.UIRow).setClass("option"),a.setTextContent(n.getKey("menubar/help/source_code")),a.onClick(function(){window.open("https://github.com/mrdoob/three.js/tree/master/editor","_blank")}),r.add(a),(a=new e.UIRow).setClass("option"),a.setTextContent(n.getKey("menubar/help/about")),a.onClick(function(){window.open("http://threejs.org","_blank")}),r.add(a),o}}});
//# sourceMappingURL=../sourcemaps/menuitems/Help.js.map
