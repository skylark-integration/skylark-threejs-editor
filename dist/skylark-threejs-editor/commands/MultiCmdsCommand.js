/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command"],function(t){"use strict";var e=function(e,i){t.call(this,e),this.type="MultiCmdsCommand",this.name="Multiple Changes",this.cmdArray=void 0!==i?i:[]};return e.prototype={execute:function(){this.editor.signals.sceneGraphChanged.active=!1;for(var t=0;t<this.cmdArray.length;t++)this.cmdArray[t].execute();this.editor.signals.sceneGraphChanged.active=!0,this.editor.signals.sceneGraphChanged.dispatch()},undo:function(){this.editor.signals.sceneGraphChanged.active=!1;for(var t=this.cmdArray.length-1;t>=0;t--)this.cmdArray[t].undo();this.editor.signals.sceneGraphChanged.active=!0,this.editor.signals.sceneGraphChanged.dispatch()},toJSON:function(){for(var e=t.prototype.toJSON.call(this),i=[],r=0;r<this.cmdArray.length;r++)i.push(this.cmdArray[r].toJSON());return e.cmds=i,e},fromJSON:function(e){t.prototype.fromJSON.call(this,e);for(var i=e.cmds,r=0;r<i.length;r++){var s=new window[i[r].type];s.fromJSON(i[r]),this.cmdArray.push(s)}}},e});
//# sourceMappingURL=../sourcemaps/commands/MultiCmdsCommand.js.map
