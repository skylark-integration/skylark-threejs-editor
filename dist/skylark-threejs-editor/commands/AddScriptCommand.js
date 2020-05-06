/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command"],function(t){"use strict";var i=function(i,s,c){t.call(this,i),this.type="AddScriptCommand",this.name="Add Script",this.object=s,this.script=c};return i.prototype={execute:function(){void 0===this.editor.scripts[this.object.uuid]&&(this.editor.scripts[this.object.uuid]=[]),this.editor.scripts[this.object.uuid].push(this.script),this.editor.signals.scriptAdded.dispatch(this.script)},undo:function(){if(void 0!==this.editor.scripts[this.object.uuid]){var t=this.editor.scripts[this.object.uuid].indexOf(this.script);-1!==t&&this.editor.scripts[this.object.uuid].splice(t,1),this.editor.signals.scriptRemoved.dispatch(this.script)}},toJSON:function(){var i=t.prototype.toJSON.call(this);return i.objectUuid=this.object.uuid,i.script=this.script,i},fromJSON:function(i){t.prototype.fromJSON.call(this,i),this.script=i.script,this.object=this.editor.objectByUuid(i.objectUuid)}},i});
//# sourceMappingURL=../sourcemaps/commands/AddScriptCommand.js.map
