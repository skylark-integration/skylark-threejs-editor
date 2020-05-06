/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./APP"],function(e,t){"use strict";return function(n){var i=n.signals,o=new e.UIPanel;o.setId("player"),o.setPosition("absolute"),o.setDisplay("none");var s=new t.Player;return o.dom.appendChild(s.dom),window.addEventListener("resize",function(){s.setSize(o.dom.clientWidth,o.dom.clientHeight)}),i.startPlayer.add(function(){o.setDisplay(""),s.load(n.toJSON()),s.setSize(o.dom.clientWidth,o.dom.clientHeight),s.play()}),i.stopPlayer.add(function(){o.setDisplay("none"),s.stop(),s.dispose()}),o}});
//# sourceMappingURL=sourcemaps/Player.js.map
