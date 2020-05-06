/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui"],function(e){"use strict";return function(t,n){var r=t.signals,o=(new e.UIRow).setPaddingLeft("90px"),a=n.geometry,s=new e.UIButton("Compute Vertex Normals");return s.onClick(function(){a.computeVertexNormals(),a.isBufferGeometry?a.attributes.normal.needsUpdate=!0:a.normalsNeedUpdate=!0,r.geometryChanged.dispatch(n)}),o.add(s),o}});
//# sourceMappingURL=../../sourcemaps/sideitems/geometry/Modifiers.js.map
