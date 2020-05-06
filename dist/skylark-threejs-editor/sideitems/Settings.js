/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./settings/Viewport","./settings/Shortcuts"],function(e,t,n){"use strict";return{SidebarSettings:function(i){var a=i.config,s=i.strings,g=new e.UIPanel;g.setBorderTop("0"),g.setPaddingTop("20px"),g.setPaddingBottom("20px");var d=new e.UIRow,r=(new e.UISelect).setWidth("150px");r.setOptions({en:"English",fr:"Français",zh:"中文"}),void 0!==a.getKey("language")&&r.setValue(a.getKey("language")),r.onChange(function(){var e=this.getValue();i.config.setKey("language",e)}),d.add(new e.UIText(s.getKey("sidebar/settings/language")).setWidth("90px")),d.add(r),g.add(d);var o=new e.UIRow,u=new e.UIInteger(a.getKey("exportPrecision")).setRange(2,1/0);return u.onChange(function(){var e=this.getValue();i.config.setKey("exportPrecision",e)}),o.add(new e.UIText(s.getKey("sidebar/settings/exportPrecision")).setWidth("90px")),o.add(u),g.add(o),g.add(new n(i)),g.add(new t(i)),g}}});
//# sourceMappingURL=../sourcemaps/sideitems/Settings.js.map
