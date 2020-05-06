/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./Object","./Geometry","./Material"],function(e,r,t,a){"use strict";return{SidebarProperties:function(i){var o=i.strings,s=new e.UITabbedPanel;return s.setId("properties"),s.addTab("object",o.getKey("sidebar/properties/object"),new r(i)),s.addTab("geometry",o.getKey("sidebar/properties/geometry"),new t(i)),s.addTab("material",o.getKey("sidebar/properties/material"),new a(i)),s.select("object"),s}}});
//# sourceMappingURL=../sourcemaps/sideitems/Properties.js.map
