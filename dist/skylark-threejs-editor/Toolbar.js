/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./ThreeUI"],function(e,a){"use strict";return function(t){var s=t.signals,o=t.strings,n=new e.UIPanel;n.setId("toolbar"),n.setDisplay("none");var d=new e.UIPanel;n.add(d);var l=new e.UIButton(o.getKey("toolbar/translate"));l.dom.className="Button selected",l.onClick(function(){s.transformModeChanged.dispatch("translate")}),d.add(l);var c=new e.UIButton(o.getKey("toolbar/rotate"));c.onClick(function(){s.transformModeChanged.dispatch("rotate")}),d.add(c);var r=new e.UIButton(o.getKey("toolbar/scale"));r.onClick(function(){s.transformModeChanged.dispatch("scale")}),d.add(r);var i=new a.UIBoolean(!1,o.getKey("toolbar/local"));return i.onChange(function(){s.spaceChanged.dispatch(!0===this.getValue()?"local":"world")}),d.add(i),s.objectSelected.add(function(e){n.setDisplay(null===e?"none":"")}),s.transformModeChanged.add(function(e){switch(l.dom.classList.remove("selected"),c.dom.classList.remove("selected"),r.dom.classList.remove("selected"),e){case"translate":l.dom.classList.add("selected");break;case"rotate":c.dom.classList.add("selected");break;case"scale":r.dom.classList.add("selected")}}),n}});
//# sourceMappingURL=sourcemaps/Toolbar.js.map
