/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return function(n){var a=n.signals,t=n.mixer,i={};a.objectSelected.add(function(e){var a=n.animations[null!==e?e.uuid:""];if(void 0!==a){o.setDisplay("");var d,r={};for(var u of a)void 0===d&&(d=u.name),i[u.name]=t.clipAction(u,e),r[u.name]=u.name;s.setOptions(r),s.setValue(d)}else o.setDisplay("none")}),a.objectRemoved.add(function(e){void 0!==n.animations[null!==e?e.uuid:""]&&t.uncacheRoot(e)});var o=new e.UIPanel;o.setDisplay("none"),o.add(new e.UIText("Animations").setTextTransform("uppercase")),o.add(new e.UIBreak),o.add(new e.UIBreak);var d=new e.UIDiv;o.add(d);var s=(new e.UISelect).setFontSize("12px");return d.add(s),d.add(new e.UIButton("Play").setMarginLeft("4px").onClick(function(){i[s.getValue()].play()})),d.add(new e.UIButton("Stop").setMarginLeft("4px").onClick(function(){i[s.getValue()].stop()})),o}});
//# sourceMappingURL=../sourcemaps/sideitems/Animation.js.map
