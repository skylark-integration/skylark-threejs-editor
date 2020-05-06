/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command"],function(t){"use strict";var e=function(e,i,a,o){t.call(this,e),this.type="SetColorCommand",this.name="Set "+a,this.updatable=!0,this.object=i,this.attributeName=a,this.oldValue=void 0!==i?this.object[this.attributeName].getHex():void 0,this.newValue=o};return e.prototype={execute:function(){this.object[this.attributeName].setHex(this.newValue),this.editor.signals.objectChanged.dispatch(this.object)},undo:function(){this.object[this.attributeName].setHex(this.oldValue),this.editor.signals.objectChanged.dispatch(this.object)},update:function(t){this.newValue=t.newValue},toJSON:function(){var e=t.prototype.toJSON.call(this);return e.objectUuid=this.object.uuid,e.attributeName=this.attributeName,e.oldValue=this.oldValue,e.newValue=this.newValue,e},fromJSON:function(e){t.prototype.fromJSON.call(this,e),this.object=this.editor.objectByUuid(e.objectUuid),this.attributeName=e.attributeName,this.oldValue=e.oldValue,this.newValue=e.newValue}},e});
//# sourceMappingURL=../sourcemaps/commands/SetColorCommand.js.map
