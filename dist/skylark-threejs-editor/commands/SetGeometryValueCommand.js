/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command"],function(t){"use strict";var e=function(e,i,a,s){t.call(this,e),this.type="SetGeometryValueCommand",this.name="Set Geometry."+a,this.object=i,this.attributeName=a,this.oldValue=void 0!==i?i.geometry[a]:void 0,this.newValue=s};return e.prototype={execute:function(){this.object.geometry[this.attributeName]=this.newValue,this.editor.signals.objectChanged.dispatch(this.object),this.editor.signals.geometryChanged.dispatch(),this.editor.signals.sceneGraphChanged.dispatch()},undo:function(){this.object.geometry[this.attributeName]=this.oldValue,this.editor.signals.objectChanged.dispatch(this.object),this.editor.signals.geometryChanged.dispatch(),this.editor.signals.sceneGraphChanged.dispatch()},toJSON:function(){var e=t.prototype.toJSON.call(this);return e.objectUuid=this.object.uuid,e.attributeName=this.attributeName,e.oldValue=this.oldValue,e.newValue=this.newValue,e},fromJSON:function(e){t.prototype.fromJSON.call(this,e),this.object=this.editor.objectByUuid(e.objectUuid),this.attributeName=e.attributeName,this.oldValue=e.oldValue,this.newValue=e.newValue}},e});
//# sourceMappingURL=../sourcemaps/commands/SetGeometryValueCommand.js.map
