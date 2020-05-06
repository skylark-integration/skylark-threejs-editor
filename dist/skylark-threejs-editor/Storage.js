/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(function(){"use strict";return function(){var e=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;if(void 0===e)return console.warn("Storage: IndexedDB not available."),{init:function(){},get:function(){},set:function(){},clear:function(){}};var t;return{init:function(n){var o=e.open("threejs-editor",1);o.onupgradeneeded=function(e){var t=e.target.result;!1===t.objectStoreNames.contains("states")&&t.createObjectStore("states")},o.onsuccess=function(e){t=e.target.result,n()},o.onerror=function(e){console.error("IndexedDB",e)}},get:function(e){t.transaction(["states"],"readwrite").objectStore("states").get(0).onsuccess=function(t){e(t.target.result)}},set:function(e){var n=performance.now();t.transaction(["states"],"readwrite").objectStore("states").put(e,0).onsuccess=function(){console.log("["+/\d\d\:\d\d\:\d\d/.exec(new Date)[0]+"]","Saved state to IndexedDB. "+(performance.now()-n).toFixed(2)+"ms")}},clear:function(){void 0!==t&&(t.transaction(["states"],"readwrite").objectStore("states").clear().onsuccess=function(){console.log("["+/\d\d\:\d\d\:\d\d/.exec(new Date)[0]+"]","Cleared IndexedDB.")})}}}});
//# sourceMappingURL=sourcemaps/Storage.js.map
