/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","../skylark-threejs"],function(t,e){"use strict";var o=function(e,o,c,i){t.call(this,e),this.type="SetScaleCommand",this.name="Set Scale",this.updatable=!0,this.object=o,void 0!==o&&void 0!==c&&(this.oldScale=o.scale.clone(),this.newScale=c.clone()),void 0!==i&&(this.oldScale=i.clone())};return o.prototype={execute:function(){this.object.scale.copy(this.newScale),this.object.updateMatrixWorld(!0),this.editor.signals.objectChanged.dispatch(this.object)},undo:function(){this.object.scale.copy(this.oldScale),this.object.updateMatrixWorld(!0),this.editor.signals.objectChanged.dispatch(this.object)},update:function(t){this.newScale.copy(t.newScale)},toJSON:function(){var e=t.prototype.toJSON.call(this);return e.objectUuid=this.object.uuid,e.oldScale=this.oldScale.toArray(),e.newScale=this.newScale.toArray(),e},fromJSON:function(o){t.prototype.fromJSON.call(this,o),this.object=this.editor.objectByUuid(o.objectUuid),this.oldScale=(new e.Vector3).fromArray(o.oldScale),this.newScale=(new e.Vector3).fromArray(o.newScale)}},o});
//# sourceMappingURL=../sourcemaps/commands/SetScaleCommand.js.map
