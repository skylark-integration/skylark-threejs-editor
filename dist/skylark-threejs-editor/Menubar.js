/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./menuitems/Add","./menuitems/Edit","./menuitems/File","./menuitems/Examples","./menuitems/Help","./menuitems/Play","./menuitems/Status"],function(e,n,d,m,t,u,a,i){"use strict";return function(s){var r=new e.UIPanel;return r.setId("menubar"),r.add(new m(s)),r.add(new d(s)),r.add(new n(s)),r.add(new a(s)),r.add(new t(s)),r.add(new u(s)),r.add(new i(s)),r}});
//# sourceMappingURL=sourcemaps/Menubar.js.map
