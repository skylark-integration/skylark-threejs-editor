/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["../Command","../skylark-threejs"],function(e,t){"use strict";var o=function(t,o,i){e.call(this,t),this.type="SetGeometryCommand",this.name="Set Geometry",this.updatable=!0,this.object=o,this.oldGeometry=void 0!==o?o.geometry:void 0,this.newGeometry=i};return o.prototype={execute:function(){this.object.geometry.dispose(),this.object.geometry=this.newGeometry,this.object.geometry.computeBoundingSphere(),this.editor.signals.geometryChanged.dispatch(this.object),this.editor.signals.sceneGraphChanged.dispatch()},undo:function(){this.object.geometry.dispose(),this.object.geometry=this.oldGeometry,this.object.geometry.computeBoundingSphere(),this.editor.signals.geometryChanged.dispatch(this.object),this.editor.signals.sceneGraphChanged.dispatch()},update:function(e){this.newGeometry=e.newGeometry},toJSON:function(){var t=e.prototype.toJSON.call(this);return t.objectUuid=this.object.uuid,t.oldGeometry=this.object.geometry.toJSON(),t.newGeometry=this.newGeometry.toJSON(),t},fromJSON:function(o){function i(e){return(new t.ObjectLoader).parseGeometries([e])[e.uuid]}e.prototype.fromJSON.call(this,o),this.object=this.editor.objectByUuid(o.objectUuid),this.oldGeometry=i(o.oldGeometry),this.newGeometry=i(o.newGeometry)}},o});
//# sourceMappingURL=../sourcemaps/commands/SetGeometryCommand.js.map
