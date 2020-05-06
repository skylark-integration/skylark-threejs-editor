/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./ThreeUI"],function(e,n){"use strict";return{SidebarHistory:function(t){var r=t.strings,i=t.signals,s=t.config,a=t.history,o=new e.UIPanel;o.add(new e.UIText(r.getKey("sidebar/history").toUpperCase()));var d=new n.UIBoolean(s.getKey("settings/history"),r.getKey("sidebar/history/persistent"));d.setPosition("absolute").setRight("8px"),d.onChange(function(){var e=this.getValue();if(s.setKey("settings/history",e),e){alert("The history will be preserved across sessions.\nThis can have an impact on performance when working with textures.");var n=a.undos[a.undos.length-1],r=void 0!==n?n.id:0;t.history.enableSerialization(r)}else i.historyChanged.dispatch()}),o.add(d),o.add(new e.UIBreak,new e.UIBreak);var h=!1,u=new n.UIOutliner(t);u.onChange(function(){h=!0,t.history.goToState(parseInt(u.getValue())),h=!1}),o.add(u);var l=function(){var e=[];function n(e){var n=document.createElement("div");return n.value=e.id,n}!function(t){for(var r=0,i=t.length;r<i;r++){var s=t[r],a=n(s);a.innerHTML="&nbsp;"+s.name,e.push(a)}}(a.undos),function(t){for(var r=t.length-1;r>=0;r--){var i=t[r],s=n(i);s.innerHTML="&nbsp;"+i.name,s.style.opacity=.3,e.push(s)}}(a.redos),u.setOptions(e)};return l(),i.editorCleared.add(l),i.historyChanged.add(l),i.historyChanged.add(function(e){!0!==h&&u.setValue(void 0!==e?e.id:null)}),o}}});
//# sourceMappingURL=../sourcemaps/sideitems/History.js.map
