/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./sideitems/Scene","./sideitems/Properties","./sideitems/Script","./sideitems/Animation","./sideitems/Project","./sideitems/History","./sideitems/Settings"],function(e,s,i,t,n,d,r,a){"use strict";return function(c){var b=c.strings,o=new e.UITabbedPanel;o.setId("sidebar");var w=(new e.UISpan).add(new s(c),new i(c),new n(c),new t(c)),m=new d(c),g=(new e.UISpan).add(new a(c),new r(c));return o.addTab("scene",b.getKey("sidebar/scene"),w),o.addTab("project",b.getKey("sidebar/project"),m),o.addTab("settings",b.getKey("sidebar/settings"),g),o.select("scene"),o}});
//# sourceMappingURL=sourcemaps/Sidebar.js.map
