/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-mrdoobui","./commands/SetScriptValueCommand","./commands/SetMaterialValueCommand"],function(e,t,r){"use strict";return function(a){var n=a.signals,i=new e.UIPanel;i.setId("script"),i.setPosition("absolute"),i.setBackgroundColor("#272822"),i.setDisplay("none");var s=new e.UIPanel;s.setPadding("10px"),i.add(s);var o=(new e.UIText).setColor("#fff");s.add(o);var l,u,c,d,m,f=function(){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("width",32),e.setAttribute("height",32);var t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d","M 12,12 L 22,22 M 22,12 12,22"),t.setAttribute("stroke","#fff"),e.appendChild(t),e}(),p=new e.UIElement(f);p.setPosition("absolute"),p.setTop("3px"),p.setRight("1px"),p.setCursor("pointer"),p.onClick(function(){i.setDisplay("none")}),s.add(p),n.rendererChanged.add(function(e){l=e});var g=CodeMirror(i.dom,{value:"",lineNumbers:!0,matchBrackets:!0,indentWithTabs:!0,tabSize:4,indentUnit:4,hintOptions:{completeSingle:!1}});g.setOption("theme","monokai"),g.on("change",function(){!1!==g.state.focused&&(clearTimeout(u),u=setTimeout(function(){var e=g.getValue();if(b(e))if("object"!=typeof d){if("programInfo"===d){var n,i=JSON.parse(e);JSON.stringify(m.material.defines)!==JSON.stringify(i.defines)&&((n=new r(a,m,"defines",i.defines)).updatable=!1,a.execute(n)),JSON.stringify(m.material.uniforms)!==JSON.stringify(i.uniforms)&&((n=new r(a,m,"uniforms",i.uniforms)).updatable=!1,a.execute(n)),JSON.stringify(m.material.attributes)!==JSON.stringify(i.attributes)&&((n=new r(a,m,"attributes",i.attributes)).updatable=!1,a.execute(n))}}else e!==d.source&&a.execute(new t(a,m,d,"source",e))},300))}),g.getWrapperElement().addEventListener("keydown",function(e){e.stopPropagation()});var h=[],v=[],b=function(e){var t,r=[];return g.operation(function(){for(;h.length>0;)g.removeLineClass(h.shift(),"background","errorLine");for(;v.length>0;)g.removeLineWidget(v.shift());switch(c){case"javascript":try{var a=esprima.parse(e,{tolerant:!0});r=a.errors}catch(w){r.push({lineNumber:w.lineNumber-1,message:w.message})}for(var i=0;i<r.length;i++)(w=r[i]).message=w.message.replace(/Line [0-9]+: /,"");break;case"json":r=[],jsonlint.parseError=function(e,t){e=e.split("\n")[3],r.push({lineNumber:t.loc.first_line-1,message:e})};try{jsonlint.parse(e)}catch(w){}break;case"glsl":try{var s="vertexShader"===d?glslprep.Shader.VERTEX:glslprep.Shader.FRAGMENT;glslprep.parseGlsl(e,s)}catch(w){w instanceof glslprep.SyntaxError?r.push({lineNumber:w.line,message:"Syntax Error: "+w.message}):console.error(w.stack||w)}if(0!==r.length)break;if(l instanceof THREE.WebGLRenderer==0)break;m.material[d]=e,m.material.needsUpdate=!0,n.materialChanged.dispatch(m.material);var o=l.info.programs;t=!0;for(var u=/^(?:ERROR|WARNING): \d+:(\d+): (.*)/g,f=(i=0,o.length);i!==f;++i){var p=o[i].diagnostics;if(void 0!==p&&p.material===m.material){p.runnable||(t=!1);for(var b=p[d],S=b.prefix.split(/\r\n|\r|\n/).length;;){var y=u.exec(b.log);if(null===y)break;r.push({lineNumber:y[1]-S,message:y[2]})}break}}}for(i=0;i<r.length;i++){var w=r[i],C=document.createElement("div");C.className="esprima-error",C.textContent=w.message;var k=Math.max(w.lineNumber,0);h.push(k),g.addLineClass(k,"background","errorLine");var N=g.addLineWidget(k,C);v.push(N)}return void 0!==t?t:0===r.length})},S=new CodeMirror.TernServer({caseInsensitive:!0,plugins:{threejs:null}});return g.setOption("extraKeys",{"Ctrl-Space":function(e){S.complete(e)},"Ctrl-I":function(e){S.showType(e)},"Ctrl-O":function(e){S.showDocs(e)},"Alt-.":function(e){S.jumpToDef(e)},"Alt-,":function(e){S.jumpBack(e)},"Ctrl-Q":function(e){S.rename(e)},"Ctrl-.":function(e){S.selectName(e)}}),g.on("cursorActivity",function(e){"javascript"===c&&S.updateArgHints(e)}),g.on("keypress",function(e,t){if("javascript"===c){var r=String.fromCharCode(t.which||t.keyCode);/[\w\.]/.exec(r)&&S.complete(e)}}),n.editorCleared.add(function(){i.setDisplay("none")}),n.editScript.add(function(e,t){var r,a,n;if("object"==typeof t)r="javascript",a=t.name,n=t.source,o.setValue(e.name+" / "+a);else{switch(t){case"vertexShader":r="glsl",a="Vertex Shader",n=e.material.vertexShader||"";break;case"fragmentShader":r="glsl",a="Fragment Shader",n=e.material.fragmentShader||"";break;case"programInfo":r="json",a="Program Properties";var s={defines:e.material.defines,uniforms:e.material.uniforms,attributes:e.material.attributes};n=JSON.stringify(s,null,"\t")}o.setValue(e.material.name+" / "+a)}c=r,d=t,m=e,i.setDisplay(""),g.setValue(n),g.clearHistory(),"json"===r&&(r={name:"javascript",json:!0}),g.setOption("mode",r)}),n.scriptRemoved.add(function(e){d===e&&i.setDisplay("none")}),i}});
//# sourceMappingURL=sourcemaps/Script.js.map