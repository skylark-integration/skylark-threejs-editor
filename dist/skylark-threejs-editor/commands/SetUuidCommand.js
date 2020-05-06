/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command"],function(i){"use strict";var t=function(t,d,e){i.call(this,t),this.type="SetUuidCommand",this.name="Update UUID",this.object=d,this.oldUuid=void 0!==d?d.uuid:void 0,this.newUuid=e};return t.prototype={execute:function(){this.object.uuid=this.newUuid,this.editor.signals.objectChanged.dispatch(this.object),this.editor.signals.sceneGraphChanged.dispatch()},undo:function(){this.object.uuid=this.oldUuid,this.editor.signals.objectChanged.dispatch(this.object),this.editor.signals.sceneGraphChanged.dispatch()},toJSON:function(){var t=i.prototype.toJSON.call(this);return t.oldUuid=this.oldUuid,t.newUuid=this.newUuid,t},fromJSON:function(t){i.prototype.fromJSON.call(this,t),this.oldUuid=t.oldUuid,this.newUuid=t.newUuid,this.object=this.editor.objectByUuid(t.oldUuid),void 0===this.object&&(this.object=this.editor.objectByUuid(t.newUuid))}},t});
//# sourceMappingURL=../sourcemaps/commands/SetUuidCommand.js.map
