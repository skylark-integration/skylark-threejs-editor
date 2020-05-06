/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(function(){"use strict";var t=function(t){this.id=-1,this.inMemory=!1,this.updatable=!1,this.type="",this.name="",this.editor=t};return t.prototype.toJSON=function(){var t={};return t.type=this.type,t.id=this.id,t.name=this.name,t},t.prototype.fromJSON=function(t){this.inMemory=!0,this.type=t.type,this.id=t.id,this.name=t.name},t});
//# sourceMappingURL=sourcemaps/Command.js.map
