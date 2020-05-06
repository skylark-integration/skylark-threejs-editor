/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command"],function(t){"use strict";var i=function(i,e,s,a,u){t.call(this,i),this.type="SetScriptValueCommand",this.name="Set Script."+a,this.updatable=!0,this.object=e,this.script=s,this.attributeName=a,this.oldValue=void 0!==s?s[this.attributeName]:void 0,this.newValue=u};return i.prototype={execute:function(){this.script[this.attributeName]=this.newValue,this.editor.signals.scriptChanged.dispatch()},undo:function(){this.script[this.attributeName]=this.oldValue,this.editor.signals.scriptChanged.dispatch()},update:function(t){this.newValue=t.newValue},toJSON:function(){var i=t.prototype.toJSON.call(this);return i.objectUuid=this.object.uuid,i.index=this.editor.scripts[this.object.uuid].indexOf(this.script),i.attributeName=this.attributeName,i.oldValue=this.oldValue,i.newValue=this.newValue,i},fromJSON:function(i){t.prototype.fromJSON.call(this,i),this.oldValue=i.oldValue,this.newValue=i.newValue,this.attributeName=i.attributeName,this.object=this.editor.objectByUuid(i.objectUuid),this.script=this.editor.scripts[i.objectUuid][i.index]}},{SetScriptValueCommand:i}});
//# sourceMappingURL=../sourcemaps/commands/SetScriptValueCommand.js.map
