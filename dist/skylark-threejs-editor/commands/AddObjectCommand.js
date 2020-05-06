/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","../skylark-threejs"],function(t,e){"use strict";var o=function(e,o){t.call(this,e),this.type="AddObjectCommand",this.object=o,void 0!==o&&(this.name="Add Object: "+o.name)};return o.prototype={execute:function(){this.editor.addObject(this.object),this.editor.select(this.object)},undo:function(){this.editor.removeObject(this.object),this.editor.deselect()},toJSON:function(){var e=t.prototype.toJSON.call(this);return e.object=this.object.toJSON(),e},fromJSON:function(o){if(t.prototype.fromJSON.call(this,o),this.object=this.editor.objectByUuid(o.object.object.uuid),void 0===this.object){var i=new e.ObjectLoader;this.object=i.parse(o.object)}}},o});
//# sourceMappingURL=../sourcemaps/commands/AddObjectCommand.js.map
