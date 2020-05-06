/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","../commands/AddScriptCommand","../commands/SetScriptValueCommand","../commands/RemoveScriptCommand"],function(e,n,t,a){"use strict";return{SidebarScript:function(d){var i=d.strings,r=d.signals,s=new e.UIPanel;s.setDisplay("none"),s.add(new e.UIText(i.getKey("sidebar/script")).setTextTransform("uppercase")),s.add(new e.UIBreak),s.add(new e.UIBreak);var c=new e.UIRow;s.add(c);var o=new e.UIButton(i.getKey("sidebar/script/new"));function u(){c.clear(),c.setDisplay("none");var n=d.selected;if(null!==n){var s=d.scripts[n.uuid];if(void 0!==s&&s.length>0){c.setDisplay("block");for(var o=0;o<s.length;o++)!function(n,s){var o=new e.UIInput(s.name).setWidth("130px").setFontSize("12px");o.onChange(function(){d.execute(new t(d,d.selected,s,"name",this.getValue()))}),c.add(o);var u=new e.UIButton(i.getKey("sidebar/script/edit"));u.setMarginLeft("4px"),u.onClick(function(){r.editScript.dispatch(n,s)}),c.add(u);var l=new e.UIButton(i.getKey("sidebar/script/remove"));l.setMarginLeft("4px"),l.onClick(function(){confirm("Are you sure?")&&d.execute(new a(d,d.selected,s))}),c.add(l),c.add(new e.UIBreak)}(n,s[o])}}}return o.onClick(function(){d.execute(new n(d,d.selected,{name:"",source:"function update( event ) {}"}))}),s.add(o),r.objectSelected.add(function(e){null!==e&&d.camera!==e?(s.setDisplay("block"),u()):s.setDisplay("none")}),r.scriptAdded.add(u),r.scriptRemoved.add(u),r.scriptChanged.add(u),s}}});
//# sourceMappingURL=../sourcemaps/sideitems/Script.js.map
