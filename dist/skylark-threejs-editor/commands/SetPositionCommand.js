/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","../skylark-threejs"],function(o,t){"use strict";var i=function(t,i,n,s){o.call(this,t),this.type="SetPositionCommand",this.name="Set Position",this.updatable=!0,this.object=i,void 0!==i&&void 0!==n&&(this.oldPosition=i.position.clone(),this.newPosition=n.clone()),void 0!==s&&(this.oldPosition=s.clone())};return i.prototype={execute:function(){this.object.position.copy(this.newPosition),this.object.updateMatrixWorld(!0),this.editor.signals.objectChanged.dispatch(this.object)},undo:function(){this.object.position.copy(this.oldPosition),this.object.updateMatrixWorld(!0),this.editor.signals.objectChanged.dispatch(this.object)},update:function(o){this.newPosition.copy(o.newPosition)},toJSON:function(){var t=o.prototype.toJSON.call(this);return t.objectUuid=this.object.uuid,t.oldPosition=this.oldPosition.toArray(),t.newPosition=this.newPosition.toArray(),t},fromJSON:function(i){o.prototype.fromJSON.call(this,i),this.object=this.editor.objectByUuid(i.objectUuid),this.oldPosition=(new t.Vector3).fromArray(i.oldPosition),this.newPosition=(new t.Vector3).fromArray(i.newPosition)}},i});
//# sourceMappingURL=../sourcemaps/commands/SetPositionCommand.js.map
