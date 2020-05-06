/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command"],function(i){"use strict";var t=function(t,s,e){i.call(this,t),this.type="RemoveScriptCommand",this.name="Remove Script",this.object=s,this.script=e,this.object&&this.script&&(this.index=this.editor.scripts[this.object.uuid].indexOf(this.script))};return t.prototype={execute:function(){void 0!==this.editor.scripts[this.object.uuid]&&(-1!==this.index&&this.editor.scripts[this.object.uuid].splice(this.index,1),this.editor.signals.scriptRemoved.dispatch(this.script))},undo:function(){void 0===this.editor.scripts[this.object.uuid]&&(this.editor.scripts[this.object.uuid]=[]),this.editor.scripts[this.object.uuid].splice(this.index,0,this.script),this.editor.signals.scriptAdded.dispatch(this.script)},toJSON:function(){var t=i.prototype.toJSON.call(this);return t.objectUuid=this.object.uuid,t.script=this.script,t.index=this.index,t},fromJSON:function(t){i.prototype.fromJSON.call(this,t),this.script=t.script,this.index=t.index,this.object=this.editor.objectByUuid(t.objectUuid)}},t});
//# sourceMappingURL=../sourcemaps/commands/RemoveScriptCommand.js.map
