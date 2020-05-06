/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(function(){"use strict";return{createFilesMap:function(e){for(var t={},n=0;n<e.length;n++){var r=e[n];t[r.name]=r}return t},getFilesFromItemList:function(e,t){var n=0,r=0,i=[],f={};function u(){++n===r&&t(i,f)}function a(e){e.isDirectory?e.createReader().readEntries(function(e){for(var t=0;t<e.length;t++)a(e[t]);u()}):e.isFile&&e.file(function(t){i.push(t),f[e.fullPath.substr(1)]=t,u()}),r++}for(var o=0;o<e.length;o++)a(e[o].webkitGetAsEntry())}}});
//# sourceMappingURL=sourcemaps/LoaderUtils.js.map
