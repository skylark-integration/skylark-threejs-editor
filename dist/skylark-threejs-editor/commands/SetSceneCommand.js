/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","./SetUuidCommand","./SetValueCommand","./AddObjectCommand"],function(e,t,i,r){"use strict";var s=function(s,n){if(e.call(this,s),this.type="SetSceneCommand",this.name="Set Scene",this.cmdArray=[],void 0!==n)for(this.cmdArray.push(new t(this.editor,this.editor.scene,n.uuid)),this.cmdArray.push(new i(this.editor,this.editor.scene,"name",n.name)),this.cmdArray.push(new i(this.editor,this.editor.scene,"userData",JSON.parse(JSON.stringify(n.userData))));n.children.length>0;){var a=n.children.pop();this.cmdArray.push(new r(this.editor,a))}};return s.prototype={execute:function(){this.editor.signals.sceneGraphChanged.active=!1;for(var e=0;e<this.cmdArray.length;e++)this.cmdArray[e].execute();this.editor.signals.sceneGraphChanged.active=!0,this.editor.signals.sceneGraphChanged.dispatch()},undo:function(){this.editor.signals.sceneGraphChanged.active=!1;for(var e=this.cmdArray.length-1;e>=0;e--)this.cmdArray[e].undo();this.editor.signals.sceneGraphChanged.active=!0,this.editor.signals.sceneGraphChanged.dispatch()},toJSON:function(){for(var t=e.prototype.toJSON.call(this),i=[],r=0;r<this.cmdArray.length;r++)i.push(this.cmdArray[r].toJSON());return t.cmds=i,t},fromJSON:function(t){e.prototype.fromJSON.call(this,t);for(var i=t.cmds,r=0;r<i.length;r++){var s=new window[i[r].type];s.fromJSON(i[r]),this.cmdArray.push(s)}}},{SetSceneCommand:s}});
//# sourceMappingURL=../sourcemaps/commands/SetSceneCommand.js.map
