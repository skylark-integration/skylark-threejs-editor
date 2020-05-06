/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define(["skylark-threejs","skylark-mrdoobui","./ThreeUI","../commands/SetMaterialCommand","../commands/SetMaterialColorCommand","../commands/SetMaterialMapCommand","../commands/SetMaterialValueCommand","../commands/SetMaterialVectorCommand"],function(e,a,t,n,l,i,d,r){"use strict";var s={LineBasicMaterial:e.LineBasicMaterial,LineDashedMaterial:e.LineDashedMaterial,MeshBasicMaterial:e.MeshBasicMaterial,MeshDepthMaterial:e.MeshDepthMaterial,MeshNormalMaterial:e.MeshNormalMaterial,MeshLambertMaterial:e.MeshLambertMaterial,MeshMatcapMaterial:e.MeshMatcapMaterial,MeshPhongMaterial:e.MeshPhongMaterial,MeshToonMaterial:e.MeshToonMaterial,MeshStandardMaterial:e.MeshStandardMaterial,MeshPhysicalMaterial:e.MeshPhysicalMaterial,RawShaderMaterial:e.RawShaderMaterial,ShaderMaterial:e.ShaderMaterial,ShadowMaterial:e.ShadowMaterial,SpriteMaterial:e.SpriteMaterial};return{SidebarMaterial:function(n){var l,i=n.strings,d=n.signals,r=0,o=.01-Number.EPSILON,u=new a.UIPanel;u.setBorderTop("0"),u.setDisplay("none"),u.setPaddingTop("20px");var p=new a.UIRow;p.add(new a.UIText("Slot").setWidth("90px"));var m=(new a.UISelect).setWidth("170px").setFontSize("12px").onChange(ra);m.setOptions({0:""}).setValue(0),p.add(m),u.add(p);var g=new a.UIRow,h=(new a.UISelect).setOptions({LineBasicMaterial:"LineBasicMaterial",LineDashedMaterial:"LineDashedMaterial",MeshBasicMaterial:"MeshBasicMaterial",MeshDepthMaterial:"MeshDepthMaterial",MeshNormalMaterial:"MeshNormalMaterial",MeshLambertMaterial:"MeshLambertMaterial",MeshMatcapMaterial:"MeshMatcapMaterial",MeshPhongMaterial:"MeshPhongMaterial",MeshToonMaterial:"MeshToonMaterial",MeshStandardMaterial:"MeshStandardMaterial",MeshPhysicalMaterial:"MeshPhysicalMaterial",RawShaderMaterial:"RawShaderMaterial",ShaderMaterial:"ShaderMaterial",ShadowMaterial:"ShadowMaterial",SpriteMaterial:"SpriteMaterial"}).setWidth("150px").setFontSize("12px").onChange(ra);g.add(new a.UIText(i.getKey("sidebar/material/type")).setWidth("90px")),g.add(h),u.add(g);var M=new a.UIRow,c=(new a.UIInput).setWidth("102px").setFontSize("12px").setDisabled(!0),w=new a.UIButton(i.getKey("sidebar/material/new")).setMarginLeft("7px").onClick(function(){c.setValue(e.MathUtils.generateUUID()),ra()});M.add(new a.UIText(i.getKey("sidebar/material/uuid")).setWidth("90px")),M.add(c),M.add(w),u.add(M);var x=new a.UIRow,v=(new a.UIInput).setWidth("150px").setFontSize("12px").onChange(function(){n.execute(new SetMaterialValueCommand(n,n.selected,"name",v.getValue(),r))});x.add(new a.UIText(i.getKey("sidebar/material/name")).setWidth("90px")),x.add(v),u.add(x);var V=new a.UIRow;V.add(new a.UIText(i.getKey("sidebar/material/program")).setWidth("90px"));var I=new a.UIButton(i.getKey("sidebar/material/info"));I.setMarginLeft("4px"),I.onClick(function(){d.editScript.dispatch(l,"programInfo")}),V.add(I);var U=new a.UIButton(i.getKey("sidebar/material/vertex"));U.setMarginLeft("4px"),U.onClick(function(){d.editScript.dispatch(l,"vertexShader")}),V.add(U);var C=new a.UIButton(i.getKey("sidebar/material/fragment"));C.setMarginLeft("4px"),C.onClick(function(){d.editScript.dispatch(l,"fragmentShader")}),V.add(C),u.add(V);var b=new a.UIRow,S=(new a.UIColor).onChange(ra);b.add(new a.UIText(i.getKey("sidebar/material/color")).setWidth("90px")),b.add(S),u.add(b);var y=new a.UIRow,f=new a.UINumber(.5).setWidth("60px").setRange(0,1).onChange(ra);y.add(new a.UIText(i.getKey("sidebar/material/roughness")).setWidth("90px")),y.add(f),u.add(y);var T=new a.UIRow,R=new a.UINumber(.5).setWidth("60px").setRange(0,1).onChange(ra);T.add(new a.UIText(i.getKey("sidebar/material/metalness")).setWidth("90px")),T.add(R),u.add(T);var W=new a.UIRow,K=(new a.UIColor).setHexValue(0).onChange(ra);W.add(new a.UIText(i.getKey("sidebar/material/emissive")).setWidth("90px")),W.add(K),u.add(W);var k=new a.UIRow,N=(new a.UIColor).setHexValue(1118481).onChange(ra);k.add(new a.UIText(i.getKey("sidebar/material/specular")).setWidth("90px")),k.add(N),u.add(k);var P=new a.UIRow,B=new a.UINumber(30).onChange(ra);P.add(new a.UIText(i.getKey("sidebar/material/shininess")).setWidth("90px")),P.add(B),u.add(P);var D=new a.UIRow,L=new a.UINumber(1).setWidth("60px").setRange(0,1).onChange(ra);D.add(new a.UIText(i.getKey("sidebar/material/clearcoat")).setWidth("90px")),D.add(L),u.add(D);var H=new a.UIRow,A=new a.UINumber(1).setWidth("60px").setRange(0,1).onChange(ra);H.add(new a.UIText(i.getKey("sidebar/material/clearcoatroughness")).setWidth("90px")),H.add(A),u.add(H);var O=new a.UIRow,j=new a.UICheckbox(!1).onChange(ra);O.add(new a.UIText(i.getKey("sidebar/material/vertexcolors")).setWidth("90px")),O.add(j),u.add(O);var z=new a.UIRow,F=new a.UICheckbox(!1).onChange(ra);z.add(new a.UIText(i.getKey("sidebar/material/vertextangents")).setWidth("90px")),z.add(F),u.add(z);var G=new a.UIRow,E=(new a.UISelect).setOptions({[e.BasicDepthPacking]:"BasicDepthPacking",[e.RGBADepthPacking]:"RGBADepthPacking"});E.onChange(ra),G.add(new a.UIText(i.getKey("sidebar/material/depthPacking")).setWidth("90px")),G.add(E),u.add(G);var q=new a.UIRow,J=new a.UICheckbox(!1).onChange(ra);q.add(new a.UIText(i.getKey("sidebar/material/skinning")).setWidth("90px")),q.add(J),u.add(q);var Q=new a.UIRow,X=new a.UICheckbox(!1).onChange(ra),Y=(new t.UITexture).onChange(sa);Q.add(new a.UIText(i.getKey("sidebar/material/map")).setWidth("90px")),Q.add(X),Q.add(Y),u.add(Q);var Z=new a.UIRow,$=new a.UICheckbox(!1).onChange(ra),_=(new t.UITexture).onChange(ra);Z.add(new a.UIText(i.getKey("sidebar/material/matcap")).setWidth("90px")),Z.add($),Z.add(_),u.add(Z);var ee=new a.UIRow,ae=new a.UICheckbox(!1).onChange(ra),te=(new t.UITexture).onChange(ra);ee.add(new a.UIText(i.getKey("sidebar/material/alphamap")).setWidth("90px")),ee.add(ae),ee.add(te),u.add(ee);var ne=new a.UIRow,le=new a.UICheckbox(!1).onChange(ra),ie=(new t.UITexture).onChange(ra),de=new a.UINumber(1).setWidth("30px").onChange(ra);ne.add(new a.UIText(i.getKey("sidebar/material/bumpmap")).setWidth("90px")),ne.add(le),ne.add(ie),ne.add(de),u.add(ne);var re=new a.UIRow,se=new a.UICheckbox(!1).onChange(ra),oe=(new t.UITexture).onChange(ra),ue=new a.UINumber(1).setWidth("30px").onChange(ra),pe=new a.UINumber(1).setWidth("30px").onChange(ra);re.add(new a.UIText(i.getKey("sidebar/material/normalmap")).setWidth("90px")),re.add(se),re.add(oe),re.add(ue),re.add(pe),u.add(re);var me=new a.UIRow,ge=new a.UICheckbox(!1).onChange(ra),he=(new t.UITexture).onChange(ra),Me=new a.UINumber(1).setWidth("30px").onChange(ra),ce=new a.UINumber(1).setWidth("30px").onChange(ra);me.add(new a.UIText(i.getKey("sidebar/material/clearcoatnormalmap")).setWidth("90px")),me.add(ge),me.add(he),me.add(Me),me.add(ce),u.add(me);var we=new a.UIRow,xe=new a.UICheckbox(!1).onChange(ra),ve=(new t.UITexture).onChange(ra),Ve=new a.UINumber(1).setWidth("30px").onChange(ra);we.add(new a.UIText(i.getKey("sidebar/material/displacemap")).setWidth("90px")),we.add(xe),we.add(ve),we.add(Ve),u.add(we);var Ie=new a.UIRow,Ue=new a.UICheckbox(!1).onChange(ra),Ce=(new t.UITexture).onChange(ra);Ie.add(new a.UIText(i.getKey("sidebar/material/roughmap")).setWidth("90px")),Ie.add(Ue),Ie.add(Ce),u.add(Ie);var be=new a.UIRow,Se=new a.UICheckbox(!1).onChange(ra),ye=(new t.UITexture).onChange(ra);be.add(new a.UIText(i.getKey("sidebar/material/metalmap")).setWidth("90px")),be.add(Se),be.add(ye),u.add(be);var fe=new a.UIRow,Te=new a.UICheckbox(!1).onChange(ra),Re=(new t.UITexture).onChange(ra);fe.add(new a.UIText(i.getKey("sidebar/material/specularmap")).setWidth("90px")),fe.add(Te),fe.add(Re),u.add(fe);var We=new a.UIRow,Ke=new a.UICheckbox(!1).onChange(ra),ke=new t.UITexture(e.SphericalReflectionMapping).onChange(sa),Ne=new a.UINumber(1).setWidth("30px").onChange(ra);We.add(new a.UIText(i.getKey("sidebar/material/envmap")).setWidth("90px")),We.add(Ke),We.add(ke),We.add(Ne),u.add(We);var Pe=new a.UIRow,Be=new a.UICheckbox(!1).onChange(ra),De=(new t.UITexture).onChange(ra);Pe.add(new a.UIText(i.getKey("sidebar/material/lightmap")).setWidth("90px")),Pe.add(Be),Pe.add(De),u.add(Pe);var Le=new a.UIRow,He=new a.UICheckbox(!1).onChange(ra),Ae=(new t.UITexture).onChange(ra),Oe=new a.UINumber(1).setRange(0,1).setWidth("30px").onChange(ra);Le.add(new a.UIText(i.getKey("sidebar/material/aomap")).setWidth("90px")),Le.add(He),Le.add(Ae),Le.add(Oe),u.add(Le);var je=new a.UIRow,ze=new a.UICheckbox(!1).onChange(ra),Fe=(new t.UITexture).onChange(sa);je.add(new a.UIText(i.getKey("sidebar/material/emissivemap")).setWidth("90px")),je.add(ze),je.add(Fe),u.add(je);var Ge=new a.UIRow,Ee=new a.UICheckbox(!1).onChange(ra),qe=(new t.UITexture).onChange(ra);Ge.add(new a.UIText(i.getKey("sidebar/material/gradientmap")).setWidth("90px")),Ge.add(Ee),Ge.add(qe),u.add(Ge);var Je=new a.UIRow,Qe=(new a.UISelect).setOptions({0:i.getKey("sidebar/material/side/front"),1:i.getKey("sidebar/material/side/back"),2:i.getKey("sidebar/material/side/double")}).setWidth("150px").setFontSize("12px").onChange(ra);Je.add(new a.UIText(i.getKey("sidebar/material/side")).setWidth("90px")),Je.add(Qe),u.add(Je);var Xe=new a.UIRow,Ye=new a.UICheckbox(!1).setLeft("100px").onChange(ra);Xe.add(new a.UIText(i.getKey("sidebar/material/flatshaded")).setWidth("90px")),Xe.add(Ye),u.add(Xe);var Ze=new a.UIRow,$e=(new a.UISelect).setOptions({0:i.getKey("sidebar/material/blending/no"),1:i.getKey("sidebar/material/blending/normal"),2:i.getKey("sidebar/material/blending/additive"),3:i.getKey("sidebar/material/blending/subtractive"),4:i.getKey("sidebar/material/blending/multiply"),5:i.getKey("sidebar/material/blending/custom")}).setWidth("150px").setFontSize("12px").onChange(ra);Ze.add(new a.UIText(i.getKey("sidebar/material/blending")).setWidth("90px")),Ze.add($e),u.add(Ze);var _e=new a.UIRow,ea=new a.UINumber(1).setWidth("60px").setRange(0,1).onChange(ra);_e.add(new a.UIText(i.getKey("sidebar/material/opacity")).setWidth("90px")),_e.add(ea),u.add(_e);var aa=new a.UIRow,ta=(new a.UICheckbox).setLeft("100px").onChange(ra);aa.add(new a.UIText(i.getKey("sidebar/material/transparent")).setWidth("90px")),aa.add(ta),u.add(aa);var na=new a.UIRow,la=(new a.UINumber).setWidth("60px").setRange(0,1).onChange(ra);na.add(new a.UIText(i.getKey("sidebar/material/alphatest")).setWidth("90px")),na.add(la),u.add(na);var ia=new a.UIRow,da=new a.UICheckbox(!1).onChange(ra);function ra(){var e=l,a=e.geometry,t=r;(r=parseInt(m.getValue()))!==t&&oa(!0);var i=n.getObjectMaterial(l,r),d=!1,u=!1;if(e.isSprite&&(u=!0),a.isGeometry&&a.faceVertexUvs[0].length>0&&(u=!0),a.isBufferGeometry&&void 0!==a.attributes.uv&&(u=!0),i){if(void 0!==i.uuid&&i.uuid!==c.getValue()&&n.execute(new SetMaterialValueCommand(n,l,"uuid",c.getValue(),r)),i.type!==h.getValue()&&("RawShaderMaterial"===(i=new(s[h.getValue()])).type&&(i.vertexShader=ua+i.vertexShader),Array.isArray(l.material)?n.removeMaterial(l.material[r]):n.removeMaterial(l.material),n.execute(new SetMaterialCommand(n,l,i,r),"New Material: "+h.getValue()),n.addMaterial(i)),void 0!==i.color&&i.color.getHex()!==S.getHexValue()&&n.execute(new SetMaterialColorCommand(n,l,"color",S.getHexValue(),r)),void 0!==i.roughness&&Math.abs(i.roughness-f.getValue())>=o&&n.execute(new SetMaterialValueCommand(n,l,"roughness",f.getValue(),r)),void 0!==i.metalness&&Math.abs(i.metalness-R.getValue())>=o&&n.execute(new SetMaterialValueCommand(n,l,"metalness",R.getValue(),r)),void 0!==i.emissive&&i.emissive.getHex()!==K.getHexValue()&&n.execute(new SetMaterialColorCommand(n,l,"emissive",K.getHexValue(),r)),void 0!==i.specular&&i.specular.getHex()!==N.getHexValue()&&n.execute(new SetMaterialColorCommand(n,l,"specular",N.getHexValue(),r)),void 0!==i.shininess&&Math.abs(i.shininess-B.getValue())>=o&&n.execute(new SetMaterialValueCommand(n,l,"shininess",B.getValue(),r)),void 0!==i.clearcoat&&Math.abs(i.clearcoat-L.getValue())>=o&&n.execute(new SetMaterialValueCommand(n,l,"clearcoat",L.getValue(),r)),void 0!==i.clearcoatRoughness&&Math.abs(i.clearcoatRoughness-A.getValue())>=o&&n.execute(new SetMaterialValueCommand(n,l,"clearcoatRoughness",A.getValue(),r)),void 0!==i.vertexColors){var p=j.getValue();i.vertexColors!==p&&n.execute(new SetMaterialValueCommand(n,l,"vertexColors",p,r))}if(void 0!==i.depthPacking){var g=parseInt(E.getValue());i.depthPacking!==g&&n.execute(new SetMaterialValueCommand(n,l,"depthPacking",g,r))}if(void 0!==i.skinning&&i.skinning!==J.getValue()&&n.execute(new SetMaterialValueCommand(n,l,"skinning",J.getValue(),r)),void 0!==i.map){var M=!0===X.getValue();if(u){var w=M?Y.getValue():null;i.map!==w&&n.execute(new SetMaterialMapCommand(n,l,"map",w,r))}else M&&(d=!0)}if(void 0!==i.matcap)if(M=!0===$.getValue(),u){var x=M?_.getValue():null;i.matcap!==x&&n.execute(new SetMaterialMapCommand(n,l,"matcap",x,r))}else M&&(d=!0);if(void 0!==i.alphaMap)if(M=!0===ae.getValue(),u){var v=M?te.getValue():null;i.alphaMap!==v&&n.execute(new SetMaterialMapCommand(n,l,"alphaMap",v,r))}else M&&(d=!0);if(void 0!==i.bumpMap){var V=!0===le.getValue();if(u){var I=V?ie.getValue():null;i.bumpMap!==I&&n.execute(new SetMaterialMapCommand(n,l,"bumpMap",I,r)),i.bumpScale!==de.getValue()&&n.execute(new SetMaterialValueCommand(n,l,"bumpScale",de.getValue(),r))}else V&&(d=!0)}if(void 0!==i.normalMap){var U=!0===se.getValue();if(u){var C=U?oe.getValue():null;if(i.normalMap!==C&&n.execute(new SetMaterialMapCommand(n,l,"normalMap",C,r)),i.normalScale.x!==ue.getValue()||i.normalScale.y!==pe.getValue()){var b=[ue.getValue(),pe.getValue()];n.execute(new SetMaterialVectorCommand(n,l,"normalScale",b,r))}}else U&&(d=!0)}if(void 0!==i.clearcoatNormalMap){var y=!0===ge.getValue();if(u){var T=y?he.getValue():null;i.clearcoatNormalMap!==T&&n.execute(new SetMaterialMapCommand(n,l,"clearcoatNormalMap",T,r)),(i.clearcoatNormalScale.x!==Me.getValue()||i.clearcoatNormalScale.y!==ce.getValue())&&(b=[Me.getValue(),ce.getValue()],n.execute(new SetMaterialVectorCommand(n,l,"clearcoatNormalScale",b,r)))}else y&&(d=!0)}if(void 0!==i.displacementMap){var W=!0===xe.getValue();if(u){var k=W?ve.getValue():null;i.displacementMap!==k&&n.execute(new SetMaterialMapCommand(n,l,"displacementMap",k,r)),i.displacementScale!==Ve.getValue()&&n.execute(new SetMaterialValueCommand(n,l,"displacementScale",Ve.getValue(),r))}else W&&(d=!0)}if(void 0!==i.roughnessMap){var P=!0===Ue.getValue();if(u){var D=P?Ce.getValue():null;i.roughnessMap!==D&&n.execute(new SetMaterialMapCommand(n,l,"roughnessMap",D,r))}else P&&(d=!0)}if(void 0!==i.metalnessMap){var H=!0===Se.getValue();if(u){var O=H?ye.getValue():null;i.metalnessMap!==O&&n.execute(new SetMaterialMapCommand(n,l,"metalnessMap",O,r))}else H&&(d=!0)}if(void 0!==i.specularMap){var z=!0===Te.getValue();if(u){var F=z?Re.getValue():null;i.specularMap!==F&&n.execute(new SetMaterialMapCommand(n,l,"specularMap",F,r))}else z&&(d=!0)}if(void 0!==i.envMap){var G=!0===Ke.getValue()?ke.getValue():null;i.envMap!==G&&n.execute(new SetMaterialMapCommand(n,l,"envMap",G,r))}if(void 0!==i.reflectivity){var q=Ne.getValue();i.reflectivity!==q&&n.execute(new SetMaterialValueCommand(n,l,"reflectivity",q,r))}if(void 0!==i.lightMap){var Q=!0===Be.getValue();if(u){var Z=Q?De.getValue():null;i.lightMap!==Z&&n.execute(new SetMaterialMapCommand(n,l,"lightMap",Z,r))}else Q&&(d=!0)}if(void 0!==i.aoMap){var ee=!0===He.getValue();if(u){var ne=ee?Ae.getValue():null;i.aoMap!==ne&&n.execute(new SetMaterialMapCommand(n,l,"aoMap",ne,r)),i.aoMapIntensity!==Oe.getValue()&&n.execute(new SetMaterialValueCommand(n,l,"aoMapIntensity",Oe.getValue(),r))}else ee&&(d=!0)}if(void 0!==i.emissiveMap){var re=!0===ze.getValue();if(u){var me=re?Fe.getValue():null;i.emissiveMap!==me&&n.execute(new SetMaterialMapCommand(n,l,"emissiveMap",me,r))}else re&&(d=!0)}if(void 0!==i.gradientMap){var we=!0===Ee.getValue()?qe.getValue():null;i.gradientMap!==we&&n.execute(new SetMaterialMapCommand(n,l,"gradientMap",we,r))}if(void 0!==i.side){var Ie=parseInt(Qe.getValue());i.side!==Ie&&n.execute(new SetMaterialValueCommand(n,l,"side",Ie,r))}if(void 0!==i.flatShading){var be=Ye.getValue();i.flatShading!=be&&n.execute(new SetMaterialValueCommand(n,l,"flatShading",be,r))}if(void 0!==i.blending){var fe=parseInt($e.getValue());i.blending!==fe&&n.execute(new SetMaterialValueCommand(n,l,"blending",fe,r))}void 0!==i.opacity&&Math.abs(i.opacity-ea.getValue())>=o&&n.execute(new SetMaterialValueCommand(n,l,"opacity",ea.getValue(),r)),void 0!==i.transparent&&i.transparent!==ta.getValue()&&n.execute(new SetMaterialValueCommand(n,l,"transparent",ta.getValue(),r)),void 0!==i.alphaTest&&Math.abs(i.alphaTest-la.getValue())>=o&&n.execute(new SetMaterialValueCommand(n,l,"alphaTest",la.getValue(),r)),void 0!==i.wireframe&&i.wireframe!==da.getValue()&&n.execute(new SetMaterialValueCommand(n,l,"wireframe",da.getValue(),r)),oa()}d&&console.warn("Can't set texture, model doesn't have texture coordinates")}function sa(a){null!==a&&a.encoding!==e.sRGBEncoding&&(a.encoding=e.sRGBEncoding,null!==l&&(l.material.needsUpdate=!0)),ra()}function oa(e){if(l){var a=l.material;if(Array.isArray(a)){var t={};r=Math.max(0,Math.min(a.length,r));for(var i=0;i<a.length;i++)t[i]=String(i+1)+": "+a[i].name;m.setOptions(t).setValue(r)}void 0!==(a=n.getObjectMaterial(l,r)).uuid&&c.setValue(a.uuid),void 0!==a.name&&v.setValue(a.name),h.setValue(a.type),void 0!==a.color&&S.setHexValue(a.color.getHexString()),void 0!==a.roughness&&f.setValue(a.roughness),void 0!==a.metalness&&R.setValue(a.metalness),void 0!==a.emissive&&K.setHexValue(a.emissive.getHexString()),void 0!==a.specular&&N.setHexValue(a.specular.getHexString()),void 0!==a.shininess&&B.setValue(a.shininess),void 0!==a.clearcoat&&L.setValue(a.clearcoat),void 0!==a.clearcoatRoughness&&A.setValue(a.clearcoatRoughness),void 0!==a.vertexColors&&j.setValue(a.vertexColors),void 0!==a.depthPacking&&E.setValue(a.depthPacking),void 0!==a.skinning&&J.setValue(a.skinning),void 0!==a.map&&(X.setValue(null!==a.map),(null!==a.map||e)&&Y.setValue(a.map)),void 0!==a.matcap&&($.setValue(null!==a.matcap),(null!==a.matcap||e)&&_.setValue(a.matcap)),void 0!==a.alphaMap&&(ae.setValue(null!==a.alphaMap),(null!==a.alphaMap||e)&&te.setValue(a.alphaMap)),void 0!==a.bumpMap&&(le.setValue(null!==a.bumpMap),(null!==a.bumpMap||e)&&ie.setValue(a.bumpMap),de.setValue(a.bumpScale)),void 0!==a.normalMap&&(se.setValue(null!==a.normalMap),(null!==a.normalMap||e)&&oe.setValue(a.normalMap),ue.setValue(a.normalScale.x),pe.setValue(a.normalScale.y)),void 0!==a.clearcoatNormalMap&&(ge.setValue(null!==a.clearcoatNormalMap),(null!==a.clearcoatNormalMap||e)&&he.setValue(a.clearcoatNormalMap),Me.setValue(a.clearcoatNormalScale.x),ce.setValue(a.clearcoatNormalScale.y)),void 0!==a.displacementMap&&(xe.setValue(null!==a.displacementMap),(null!==a.displacementMap||e)&&ve.setValue(a.displacementMap),Ve.setValue(a.displacementScale)),void 0!==a.roughnessMap&&(Ue.setValue(null!==a.roughnessMap),(null!==a.roughnessMap||e)&&Ce.setValue(a.roughnessMap)),void 0!==a.metalnessMap&&(Se.setValue(null!==a.metalnessMap),(null!==a.metalnessMap||e)&&ye.setValue(a.metalnessMap)),void 0!==a.specularMap&&(Te.setValue(null!==a.specularMap),(null!==a.specularMap||e)&&Re.setValue(a.specularMap)),void 0!==a.envMap&&(Ke.setValue(null!==a.envMap),(null!==a.envMap||e)&&ke.setValue(a.envMap)),void 0!==a.gradientMap&&(Ee.setValue(null!==a.gradientMap),(null!==a.gradientMap||e)&&qe.setValue(a.gradientMap)),void 0!==a.reflectivity&&Ne.setValue(a.reflectivity),void 0!==a.lightMap&&(Be.setValue(null!==a.lightMap),(null!==a.lightMap||e)&&De.setValue(a.lightMap)),void 0!==a.aoMap&&(He.setValue(null!==a.aoMap),(null!==a.aoMap||e)&&Ae.setValue(a.aoMap),Oe.setValue(a.aoMapIntensity)),void 0!==a.emissiveMap&&(ze.setValue(null!==a.emissiveMap),(null!==a.emissiveMap||e)&&Fe.setValue(a.emissiveMap)),void 0!==a.side&&Qe.setValue(a.side),void 0!==a.flatShading&&Ye.setValue(a.flatShading),void 0!==a.blending&&$e.setValue(a.blending),void 0!==a.opacity&&ea.setValue(a.opacity),void 0!==a.transparent&&ta.setValue(a.transparent),void 0!==a.alphaTest&&la.setValue(a.alphaTest),void 0!==a.wireframe&&da.setValue(a.wireframe),function(){var e={name:x,color:b,roughness:y,metalness:T,emissive:W,specular:k,shininess:P,clearcoat:D,clearcoatRoughness:H,vertexShader:V,vertexColors:O,vertexTangents:z,depthPacking:G,skinning:q,map:Q,matcap:Z,alphaMap:ee,bumpMap:ne,normalMap:re,clearcoatNormalMap:me,displacementMap:we,roughnessMap:Ie,metalnessMap:be,specularMap:fe,envMap:We,lightMap:Pe,aoMap:Le,emissiveMap:je,gradientMap:Ge,side:Je,flatShading:Xe,blending:Ze,opacity:_e,transparent:aa,alphaTest:na,wireframe:ia},a=l.material;if(Array.isArray(a)){if(p.setDisplay(""),0===a.length)return;a=a[r]}else p.setDisplay("none");for(var t in e)e[t].setDisplay(void 0!==a[t]?"":"none")}()}}ia.add(new a.UIText(i.getKey("sidebar/material/wireframe")).setWidth("90px")),ia.add(da),u.add(ia),d.objectSelected.add(function(e){var a=!1;if(e&&e.material&&(a=!0,Array.isArray(e.material)&&0===e.material.length&&(a=!1)),a){var t=e!==l;l=e,oa(t),u.setDisplay("")}else l=null,u.setDisplay("none")}),d.materialChanged.add(function(){oa()});var ua=["uniform mat4 projectionMatrix;","uniform mat4 modelViewMatrix;\n","attribute vec3 position;\n\n"].join("\n");return u}}});
//# sourceMappingURL=../sourcemaps/sideitems/Material.js.map
