/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","../skylark-threejs"],function(t,o){"use strict";var i=function(o,i,n,e){t.call(this,o),this.type="SetRotationCommand",this.name="Set Rotation",this.updatable=!0,this.object=i,void 0!==i&&void 0!==n&&(this.oldRotation=i.rotation.clone(),this.newRotation=n.clone()),void 0!==e&&(this.oldRotation=e.clone())};return i.prototype={execute:function(){this.object.rotation.copy(this.newRotation),this.object.updateMatrixWorld(!0),this.editor.signals.objectChanged.dispatch(this.object)},undo:function(){this.object.rotation.copy(this.oldRotation),this.object.updateMatrixWorld(!0),this.editor.signals.objectChanged.dispatch(this.object)},update:function(t){this.newRotation.copy(t.newRotation)},toJSON:function(){var o=t.prototype.toJSON.call(this);return o.objectUuid=this.object.uuid,o.oldRotation=this.oldRotation.toArray(),o.newRotation=this.newRotation.toArray(),o},fromJSON:function(i){t.prototype.fromJSON.call(this,i),this.object=this.editor.objectByUuid(i.objectUuid),this.oldRotation=(new o.Euler).fromArray(i.oldRotation),this.newRotation=(new o.Euler).fromArray(i.newRotation)}},i});
//# sourceMappingURL=../sourcemaps/commands/SetRotationCommand.js.map
