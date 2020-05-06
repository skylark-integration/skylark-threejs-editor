define([
    'skylark-mrdoobui',
    '../commands/AddObjectCommand',
    '../commands/RemoveObjectCommand',
    '../commands/MultiCmdsCommand',
    '../commands/SetMaterialValueCommand'
], function (mrdoobui, AddObjectCommand, RemoveObjectCommand, MultiCmdsCommand, SetMaterialValueCommand) {
    'use strict';
    var MenubarEdit = function (editor) {
        var strings = editor.strings;
        var container = new mrdoobui.UIPanel();
        container.setClass('menu');
        var title = new mrdoobui.UIPanel();
        title.setClass('title');
        title.setTextContent(strings.getKey('menubar/edit'));
        container.add(title);
        var options = new mrdoobui.UIPanel();
        options.setClass('options');
        container.add(options);
        var undo = new mrdoobui.UIRow();
        undo.setClass('option');
        undo.setTextContent(strings.getKey('menubar/edit/undo'));
        undo.onClick(function () {
            editor.undo();
        });
        options.add(undo);
        var redo = new mrdoobui.UIRow();
        redo.setClass('option');
        redo.setTextContent(strings.getKey('menubar/edit/redo'));
        redo.onClick(function () {
            editor.redo();
        });
        options.add(redo);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/edit/clear_history'));
        option.onClick(function () {
            if (confirm('The Undo/Redo History will be cleared. Are you sure?')) {
                editor.history.clear();
            }
        });
        options.add(option);
        editor.signals.historyChanged.add(function () {
            var history = editor.history;
            undo.setClass('option');
            redo.setClass('option');
            if (history.undos.length == 0) {
                undo.setClass('inactive');
            }
            if (history.redos.length == 0) {
                redo.setClass('inactive');
            }
        });
        options.add(new mrdoobui.UIHorizontalRule());
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/edit/clone'));
        option.onClick(function () {
            var object = editor.selected;
            if (object.parent === null)
                return;
            object = object.clone();
            editor.execute(new AddObjectCommand(editor, object));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/edit/delete'));
        option.onClick(function () {
            var object = editor.selected;
            if (object !== null && object.parent !== null) {
                editor.execute(new RemoveObjectCommand(editor, object));
            }
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/edit/minify_shaders'));
        option.onClick(function () {
            var root = editor.selected || editor.scene;
            var errors = [];
            var nMaterialsChanged = 0;
            var path = [];
            function getPath(object) {
                path.length = 0;
                var parent = object.parent;
                if (parent !== undefined)
                    getPath(parent);
                path.push(object.name || object.uuid);
                return path;
            }
            var cmds = [];
            root.traverse(function (object) {
                var material = object.material;
                if (material !== undefined && material.isShaderMaterial) {
                    try {
                        var shader = glslprep.minifyGlsl([
                            material.vertexShader,
                            material.fragmentShader
                        ]);
                        cmds.push(new SetMaterialValueCommand(editor, object, 'vertexShader', shader[0]));
                        cmds.push(new SetMaterialValueCommand(editor, object, 'fragmentShader', shader[1]));
                        ++nMaterialsChanged;
                    } catch (e) {
                        var path = getPath(object).join('/');
                        if (e instanceof glslprep.SyntaxError)
                            errors.push(path + ':' + e.line + ':' + e.column + ': ' + e.message);
                        else {
                            errors.push(path + ': Unexpected error (see console for details).');
                            console.error(e.stack || e);
                        }
                    }
                }
            });
            if (nMaterialsChanged > 0) {
                editor.execute(new MultiCmdsCommand(editor, cmds), 'Minify Shaders');
            }
            window.alert(nMaterialsChanged + ' material(s) were changed.\n' + errors.join('\n'));
        });
        options.add(option);
        options.add(new mrdoobui.UIHorizontalRule());
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/edit/fixcolormaps'));
        option.onClick(function () {
            editor.scene.traverse(fixColorMap);
        });
        options.add(option);
        var colorMaps = [
            'map',
            'envMap',
            'emissiveMap'
        ];
        function fixColorMap(obj) {
            var material = obj.material;
            if (material !== undefined) {
                if (Array.isArray(material) === true) {
                    for (var i = 0; i < material.length; i++) {
                        fixMaterial(material[i]);
                    }
                } else {
                    fixMaterial(material);
                }
                editor.signals.sceneGraphChanged.dispatch();
            }
        }
        function fixMaterial(material) {
            var needsUpdate = material.needsUpdate;
            for (var i = 0; i < colorMaps.length; i++) {
                var map = material[colorMaps[i]];
                if (map) {
                    map.encoding = THREE.sRGBEncoding;
                    needsUpdate = true;
                }
            }
            material.needsUpdate = needsUpdate;
        }
        return container;
    };
    return MenubarEdit;
});