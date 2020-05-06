define(['skylark-mrdoobui'], function (mrdoobui) {
    'use strict';
    var ViewportInfo = function (editor) {
        var signals = editor.signals;
        var strings = editor.strings;
        var container = new mrdoobui.UIPanel();
        container.setId('info');
        container.setPosition('absolute');
        container.setLeft('10px');
        container.setBottom('10px');
        container.setFontSize('12px');
        container.setColor('#fff');
        var objectsText = new mrdoobui.UIText('0').setMarginLeft('6px');
        var verticesText = new mrdoobui.UIText('0').setMarginLeft('6px');
        var trianglesText = new mrdoobui.UIText('0').setMarginLeft('6px');
        var frametimeText = new mrdoobui.UIText('0').setMarginLeft('6px');
        container.add(new mrdoobui.UIText(strings.getKey('viewport/info/objects')).setTextTransform('lowercase'));
        container.add(objectsText, new mrdoobui.UIBreak());
        container.add(new mrdoobui.UIText(strings.getKey('viewport/info/vertices')).setTextTransform('lowercase'));
        container.add(verticesText, new mrdoobui.UIBreak());
        container.add(new mrdoobui.UIText(strings.getKey('viewport/info/triangles')).setTextTransform('lowercase'));
        container.add(trianglesText, new mrdoobui.UIBreak());
        container.add(new mrdoobui.UIText(strings.getKey('viewport/info/frametime')).setTextTransform('lowercase'));
        container.add(frametimeText, new mrdoobui.UIBreak());
        signals.objectAdded.add(update);
        signals.objectRemoved.add(update);
        signals.geometryChanged.add(update);
        function update() {
            var scene = editor.scene;
            var objects = 0, vertices = 0, triangles = 0;
            for (var i = 0, l = scene.children.length; i < l; i++) {
                var object = scene.children[i];
                object.traverseVisible(function (object) {
                    objects++;
                    if (object.isMesh) {
                        var geometry = object.geometry;
                        if (geometry.isGeometry) {
                            vertices += geometry.vertices.length;
                            triangles += geometry.faces.length;
                        } else if (geometry.isBufferGeometry) {
                            vertices += geometry.attributes.position.count;
                            if (geometry.index !== null) {
                                triangles += geometry.index.count / 3;
                            } else {
                                triangles += geometry.attributes.position.count / 3;
                            }
                        }
                    }
                });
            }
            objectsText.setValue(objects.format());
            verticesText.setValue(vertices.format());
            trianglesText.setValue(triangles.format());
        }
        signals.sceneRendered.add(updateFrametime);
        function updateFrametime(frametime) {
            frametimeText.setValue(Number(frametime).toFixed(2) + ' ms');
        }
        return container;
    };
    return ViewportInfo;
});