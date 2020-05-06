/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","../skylark-threejs"],function(t,e){"use strict";var a=function(e,a,i,s,r){t.call(this,e),this.type="SetMaterialMapCommand",this.name="Set Material."+i,this.object=a,this.material=this.editor.getObjectMaterial(a,r),this.oldMap=void 0!==a?this.material[i]:void 0,this.newMap=s,this.mapName=i};return a.prototype={execute:function(){this.material[this.mapName]=this.newMap,this.material.needsUpdate=!0,this.editor.signals.materialChanged.dispatch(this.material)},undo:function(){this.material[this.mapName]=this.oldMap,this.material.needsUpdate=!0,this.editor.signals.materialChanged.dispatch(this.material)},toJSON:function(){var e=t.prototype.toJSON.call(this);return e.objectUuid=this.object.uuid,e.mapName=this.mapName,e.newMap=a(this.newMap),e.oldMap=a(this.oldMap),e;function a(t){if(null===t||void 0===t)return null;var e={geometries:{},materials:{},textures:{},images:{}},a=t.toJSON(e),i=function(t){var e=[];for(var a in t){var i=t[a];delete i.metadata,e.push(i)}return e}(e.images);return i.length>0&&(a.images=i),a.sourceFile=t.sourceFile,a}},fromJSON:function(a){function i(t){var a=null;if(null!==t){var i=new e.ObjectLoader,s=i.parseImages(t.images);(a=i.parseTextures([t],s)[t.uuid]).sourceFile=t.sourceFile}return a}t.prototype.fromJSON.call(this,a),this.object=this.editor.objectByUuid(a.objectUuid),this.mapName=a.mapName,this.oldMap=i(a.oldMap),this.newMap=i(a.newMap)}},a});
//# sourceMappingURL=../sourcemaps/commands/SetMaterialMapCommand.js.map
