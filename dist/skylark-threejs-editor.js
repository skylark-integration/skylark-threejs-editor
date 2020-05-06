/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
!function(r,e){var n=e.define,require=e.require,o="function"==typeof n&&n.amd,t=!o&&"undefined"!=typeof exports;if(!o&&!n){var i={};n=e.define=function(r,e,n){"function"==typeof n?(i[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),o=r.split("/");n.pop();for(var t=0;t<o.length;t++)"."!=o[t]&&(".."==o[t]?n.pop():n.push(o[t]));return n.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):i[r]={factory:null,resolved:!0,exports:n}},require=e.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=i[r];if(!module.resolved){var n=[];module.deps.forEach(function(r){n.push(require(r))}),module.exports=module.factory.apply(e,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-threejs-editor/main",[],function(){}),r("skylark-threejs-editor",["skylark-threejs-editor/main"],function(r){return r})}(n),!o){var s=require("skylark-langx-ns");t?module.exports=s:e.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-threejs-editor.js.map
