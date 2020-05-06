/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-threejs-ex/exporters/ColladaExporter","skylark-threejs-ex/exporters/DRACOExporter","skylark-threejs-ex/exporters/GLTFExporter","skylark-threejs-ex/exporters/OBJExporter","skylark-threejs-ex/exporters/PLYExporter","skylark-threejs-ex/exporters/STLExporter","skylark-mrdoobui"],function(e,t,n,o,l,r,s,a){"use strict";return{MenubarFile:function(i){function c(e,t){var n=d.getKey("exportPrecision");return"number"==typeof t?parseFloat(t.toFixed(n)):t}var d=i.config,p=i.strings,u=new a.UIPanel;u.setClass("menu");var f=new a.UIPanel;f.setClass("title"),f.setTextContent(p.getKey("menubar/file")),u.add(f);var y=new a.UIPanel;y.setClass("options"),u.add(y),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/new")),b.onClick(function(){confirm("Any unsaved data will be lost. Are you sure?")&&i.clear()}),y.add(b),y.add(new a.UIHorizontalRule);var x=document.createElement("form");x.style.display="none",document.body.appendChild(x);var b,w=document.createElement("input");w.multiple=!0,w.type="file",w.addEventListener("change",function(){i.loader.loadFiles(w.files),x.reset()}),x.appendChild(w),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/import")),b.onClick(function(){w.click()}),y.add(b),y.add(new a.UIHorizontalRule),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/geometry")),b.onClick(function(){var e=i.selected;if(null!==e){var t=e.geometry;if(void 0!==t){var n=t.toJSON();try{n=(n=JSON.stringify(n,c,"\t")).replace(/[\n\t]+([\d\.e\-\[\]]+)/g,"$1")}catch(e){n=JSON.stringify(n)}j(n,"geometry.json")}else alert("The selected object doesn't have geometry.")}else alert("No object selected.")}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/object")),b.onClick(function(){var e=i.selected;if(null!==e){var t=e.toJSON();try{t=(t=JSON.stringify(t,c,"\t")).replace(/[\n\t]+([\d\.e\-\[\]]+)/g,"$1")}catch(e){t=JSON.stringify(t)}j(t,"model.json")}else alert("No object selected")}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/scene")),b.onClick(function(){var e=i.scene.toJSON();try{e=(e=JSON.stringify(e,c,"\t")).replace(/[\n\t]+([\d\.e\-\[\]]+)/g,"$1")}catch(t){e=JSON.stringify(e)}j(e,"scene.json")}),y.add(b),y.add(new a.UIHorizontalRule),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/dae")),b.onClick(function(){(new t).parse(i.scene,function(e){j(e.data,"scene.dae")})}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/drc")),b.onClick(function(){var e=i.selected;null!==e&&void 0!==e.isMesh?g((new n).parse(e.geometry),"model.drc"):alert("No mesh selected")}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/glb")),b.onClick(function(){(new o).parse(i.scene,function(e){g(e,"scene.glb")},{binary:!0,forceIndices:!0,forcePowerOfTwoTextures:!0})}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/gltf")),b.onClick(function(){(new o).parse(i.scene,function(e){j(JSON.stringify(e,null,2),"scene.gltf")})}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/obj")),b.onClick(function(){var e=i.selected;null!==e?j((new l).parse(e),"model.obj"):alert("No object selected.")}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/ply")),b.onClick(function(){(new r).parse(i.scene,function(e){g(e,"model.ply")})}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/ply_binary")),b.onClick(function(){(new r).parse(i.scene,function(e){g(e,"model-binary.ply")},{binary:!0})}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/stl")),b.onClick(function(){j((new s).parse(i.scene),"model.stl")}),y.add(b),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/export/stl_binary")),b.onClick(function(){g((new s).parse(i.scene,{binary:!0}),"model-binary.stl")}),y.add(b),y.add(new a.UIHorizontalRule),(b=new a.UIRow).setClass("option"),b.setTextContent(p.getKey("menubar/file/publish")),b.onClick(function(){var t=new JSZip,n=i.toJSON();n.metadata.type="App",delete n.history,n=(n=JSON.stringify(n,c,"\t")).replace(/[\n\t]+([\d\.e\-\[\]]+)/g,"$1"),t.file("app.json",n);var o=d.getKey("project/title"),l=new e.LoadingManager(function(){C(t.generate({type:"blob"}),(""!==o?o:"untitled")+".zip")}),r=new e.FileLoader(l);r.load("js/libs/app/index.html",function(e){e=(e=e.replace("\x3c!-- title --\x3e",o)).replace("\x3c!-- includes --\x3e",[].join("\n\t\t"));var n="";d.getKey("project/editable")&&(n=["","\t\t\tvar button = document.createElement( 'a' );","\t\t\tbutton.href = 'https://threejs.org/editor/#file=' + location.href.split( '/' ).slice( 0, - 1 ).join( '/' ) + '/app.json';","\t\t\tbutton.style.cssText = 'position: absolute; bottom: 20px; right: 20px; padding: 10px 16px; color: #fff; border: 1px solid #fff; border-radius: 20px; text-decoration: none;';","\t\t\tbutton.target = '_blank';","\t\t\tbutton.textContent = 'EDIT';","\t\t\tdocument.body.appendChild( button );",""].join("\n")),e=e.replace("\n\t\t\t/* edit button */\n",n),t.file("index.html",e)}),r.load("js/libs/app",function(e){t.file("js/app",e)}),r.load("../build/three.module",function(e){t.file("js/three.module",e)}),r.load("../examples/jsm/webxr/VRButton",function(e){t.file("js/VRButton",e)}),r.load("../examples/js/vr/HelioWebXRPolyfill",function(e){t.file("js/HelioWebXRPolyfill",e)})}),y.add(b);var m=document.createElement("a");function C(e,t){m.href=URL.createObjectURL(e),m.download=t||"data.json",m.dispatchEvent(new MouseEvent("click"))}function g(e,t){C(new Blob([e],{type:"application/octet-stream"}),t)}function j(e,t){C(new Blob([e],{type:"text/plain"}),t)}return u}}});
//# sourceMappingURL=../sourcemaps/menuitems/File.js.map