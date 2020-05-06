/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","../skylark-threejs"],function(t,e){"use strict";var i=function(e,i){t.call(this,e),this.type="RemoveObjectCommand",this.name="Remove Object",this.object=i,this.parent=void 0!==i?i.parent:void 0,void 0!==this.parent&&(this.index=this.parent.children.indexOf(this.object))};return i.prototype={execute:function(){this.editor.removeObject(this.object),this.editor.deselect()},undo:function(){this.editor.addObject(this.object,this.parent,this.index),this.editor.select(this.object)},toJSON:function(){var e=t.prototype.toJSON.call(this);return e.object=this.object.toJSON(),e.index=this.index,e.parentUuid=this.parent.uuid,e},fromJSON:function(i){if(t.prototype.fromJSON.call(this,i),this.parent=this.editor.objectByUuid(i.parentUuid),void 0===this.parent&&(this.parent=this.editor.scene),this.index=i.index,this.object=this.editor.objectByUuid(i.object.object.uuid),void 0===this.object){var o=new e.ObjectLoader;this.object=o.parse(i.object)}}},i});
//# sourceMappingURL=../sourcemaps/commands/RemoveObjectCommand.js.map
