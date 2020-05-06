/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","../skylark-threejs"],function(t,e){"use strict";var i=function(e,i,a,r){t.call(this,e),this.type="SetMaterialCommand",this.name="New Material",this.object=i,this.materialSlot=r,this.oldMaterial=this.editor.getObjectMaterial(i,r),this.newMaterial=a};return i.prototype={execute:function(){this.editor.setObjectMaterial(this.object,this.materialSlot,this.newMaterial),this.editor.signals.materialChanged.dispatch(this.newMaterial)},undo:function(){this.editor.setObjectMaterial(this.object,this.materialSlot,this.oldMaterial),this.editor.signals.materialChanged.dispatch(this.oldMaterial)},toJSON:function(){var e=t.prototype.toJSON.call(this);return e.objectUuid=this.object.uuid,e.oldMaterial=this.oldMaterial.toJSON(),e.newMaterial=this.newMaterial.toJSON(),e},fromJSON:function(i){function a(t){var i=new e.ObjectLoader,a=i.parseImages(t.images),r=i.parseTextures(t.textures,a);return i.parseMaterials([t],r)[t.uuid]}t.prototype.fromJSON.call(this,i),this.object=this.editor.objectByUuid(i.objectUuid),this.oldMaterial=a(i.oldMaterial),this.newMaterial=a(i.newMaterial)}},i});
//# sourceMappingURL=../sourcemaps/commands/SetMaterialCommand.js.map
