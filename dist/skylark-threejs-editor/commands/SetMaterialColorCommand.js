/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command"],function(t){"use strict";var e=function(e,i,a,s,l){t.call(this,e),this.type="SetMaterialColorCommand",this.name="Set Material."+a,this.updatable=!0,this.object=i,this.material=this.editor.getObjectMaterial(i,l),this.oldValue=void 0!==this.material?this.material[a].getHex():void 0,this.newValue=s,this.attributeName=a};return e.prototype={execute:function(){this.material[this.attributeName].setHex(this.newValue),this.editor.signals.materialChanged.dispatch(this.material)},undo:function(){this.material[this.attributeName].setHex(this.oldValue),this.editor.signals.materialChanged.dispatch(this.material)},update:function(t){this.newValue=t.newValue},toJSON:function(){var e=t.prototype.toJSON.call(this);return e.objectUuid=this.object.uuid,e.attributeName=this.attributeName,e.oldValue=this.oldValue,e.newValue=this.newValue,e},fromJSON:function(e){t.prototype.fromJSON.call(this,e),this.object=this.editor.objectByUuid(e.objectUuid),this.attributeName=e.attributeName,this.oldValue=e.oldValue,this.newValue=e.newValue}},e});
//# sourceMappingURL=../sourcemaps/commands/SetMaterialColorCommand.js.map
