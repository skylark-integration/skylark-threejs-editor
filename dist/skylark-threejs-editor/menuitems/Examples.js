/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui"],function(e,a){"use strict";return function(n){var t=n.strings,s=new a.UIPanel;s.setClass("menu");var l=new a.UIPanel;l.setClass("title"),l.setTextContent(t.getKey("menubar/examples")),s.add(l);var r=new a.UIPanel;r.setClass("options"),s.add(r);for(var i=[{title:"menubar/examples/Arkanoid",file:"arkanoid.app.json"},{title:"menubar/examples/Camera",file:"camera.app.json"},{title:"menubar/examples/Particles",file:"particles.app.json"},{title:"menubar/examples/Pong",file:"pong.app.json"},{title:"menubar/examples/Shaders",file:"shaders.app.json"}],o=new e.FileLoader,p=0;p<i.length;p++)!function(e){var s=i[e],l=new a.UIRow;l.setClass("option"),l.setTextContent(t.getKey(s.title)),l.onClick(function(){confirm("Any unsaved data will be lost. Are you sure?")&&o.load("examples/"+s.file,function(e){n.clear(),n.fromJSON(JSON.parse(e))})}),r.add(l)}(p);return s}});
//# sourceMappingURL=../sourcemaps/menuitems/Examples.js.map
