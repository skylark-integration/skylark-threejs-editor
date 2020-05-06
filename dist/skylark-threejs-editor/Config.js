/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(function(){"use strict";return function(){var e="threejs-editor",t={language:"en",exportPrecision:6,autosave:!0,"project/title":"","project/editable":!1,"project/vr":!1,"project/renderer/antialias":!0,"project/renderer/shadows":!0,"project/renderer/shadowType":1,"project/renderer/physicallyCorrectLights":!1,"project/renderer/toneMapping":1,"project/renderer/toneMappingExposure":1,"project/renderer/toneMappingWhitePoint":1,"settings/history":!1,"settings/shortcuts/translate":"w","settings/shortcuts/rotate":"e","settings/shortcuts/scale":"r","settings/shortcuts/undo":"z","settings/shortcuts/focus":"f"};if(void 0===window.localStorage[e])window.localStorage[e]=JSON.stringify(t);else{var r=JSON.parse(window.localStorage[e]);for(var o in r)t[o]=r[o]}return{getKey:function(e){return t[e]},setKey:function(){for(var r=0,o=arguments.length;r<o;r+=2)t[arguments[r]]=arguments[r+1];window.localStorage[e]=JSON.stringify(t),console.log("["+/\d\d\:\d\d\:\d\d/.exec(new Date)[0]+"]","Saved config to LocalStorage.")},clear:function(){delete window.localStorage[e]}}}});
//# sourceMappingURL=sourcemaps/Config.js.map
