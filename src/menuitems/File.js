define([
    'skylark-threejs',
    'skylark-threejs-ex/exporters/ColladaExporter',
    'skylark-threejs-ex/exporters/DRACOExporter',
    'skylark-threejs-ex/exporters/GLTFExporter',
    'skylark-threejs-ex/exporters/OBJExporter',
    'skylark-threejs-ex/exporters/PLYExporter',
    'skylark-threejs-ex/exporters/STLExporter',
    'skylark-mrdoobui'
], function (
    THREE, 
    ColladaExporter, 
    DRACOExporter, 
    GLTFExporter, 
    OBJExporter, 
    PLYExporter, 
    STLExporter, 
    mrdoobui
) {
    'use strict';
    var MenubarFile = function (editor) {
        function parseNumber(key, value) {
            var precision = config.getKey('exportPrecision');
            return typeof value === 'number' ? parseFloat(value.toFixed(precision)) : value;
        }
        var config = editor.config;
        var strings = editor.strings;
        var container = new mrdoobui.UIPanel();
        container.setClass('menu');
        var title = new mrdoobui.UIPanel();
        title.setClass('title');
        title.setTextContent(strings.getKey('menubar/file'));
        container.add(title);
        var options = new mrdoobui.UIPanel();
        options.setClass('options');
        container.add(options);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/new'));
        option.onClick(function () {
            if (confirm('Any unsaved data will be lost. Are you sure?')) {
                editor.clear();
            }
        });
        options.add(option);
        options.add(new mrdoobui.UIHorizontalRule());
        var form = document.createElement('form');
        form.style.display = 'none';
        document.body.appendChild(form);
        var fileInput = document.createElement('input');
        fileInput.multiple = true;
        fileInput.type = 'file';
        fileInput.addEventListener('change', function () {
            editor.loader.loadFiles(fileInput.files);
            form.reset();
        });
        form.appendChild(fileInput);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/import'));
        option.onClick(function () {
            fileInput.click();
        });
        options.add(option);
        options.add(new mrdoobui.UIHorizontalRule());
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/geometry'));
        option.onClick(function () {
            var object = editor.selected;
            if (object === null) {
                alert('No object selected.');
                return;
            }
            var geometry = object.geometry;
            if (geometry === undefined) {
                alert("The selected object doesn't have geometry.");
                return;
            }
            var output = geometry.toJSON();
            try {
                output = JSON.stringify(output, parseNumber, '\t');
                output = output.replace(/[\n\t]+([\d\.e\-\[\]]+)/g, '$1');
            } catch (e) {
                output = JSON.stringify(output);
            }
            saveString(output, 'geometry.json');
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/object'));
        option.onClick(function () {
            var object = editor.selected;
            if (object === null) {
                alert('No object selected');
                return;
            }
            var output = object.toJSON();
            try {
                output = JSON.stringify(output, parseNumber, '\t');
                output = output.replace(/[\n\t]+([\d\.e\-\[\]]+)/g, '$1');
            } catch (e) {
                output = JSON.stringify(output);
            }
            saveString(output, 'model.json');
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/scene'));
        option.onClick(function () {
            var output = editor.scene.toJSON();
            try {
                output = JSON.stringify(output, parseNumber, '\t');
                output = output.replace(/[\n\t]+([\d\.e\-\[\]]+)/g, '$1');
            } catch (e) {
                output = JSON.stringify(output);
            }
            saveString(output, 'scene.json');
        });
        options.add(option);
        options.add(new mrdoobui.UIHorizontalRule());
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/dae'));
        option.onClick(function () {
            var exporter = new ColladaExporter();
            exporter.parse(editor.scene, function (result) {
                saveString(result.data, 'scene.dae');
            });
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/drc'));
        option.onClick(function () {
            var object = editor.selected;
            if (object === null || object.isMesh === undefined) {
                alert('No mesh selected');
                return;
            }
            var exporter = new DRACOExporter();
            var result = exporter.parse(object.geometry);
            saveArrayBuffer(result, 'model.drc');
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/glb'));
        option.onClick(function () {
            var exporter = new GLTFExporter();
            exporter.parse(editor.scene, function (result) {
                saveArrayBuffer(result, 'scene.glb');
            }, {
                binary: true,
                forceIndices: true,
                forcePowerOfTwoTextures: true
            });
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/gltf'));
        option.onClick(function () {
            var exporter = new GLTFExporter();
            exporter.parse(editor.scene, function (result) {
                saveString(JSON.stringify(result, null, 2), 'scene.gltf');
            });
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/obj'));
        option.onClick(function () {
            var object = editor.selected;
            if (object === null) {
                alert('No object selected.');
                return;
            }
            var exporter = new OBJExporter();
            saveString(exporter.parse(object), 'model.obj');
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/ply'));
        option.onClick(function () {
            var exporter = new PLYExporter();
            exporter.parse(editor.scene, function (result) {
                saveArrayBuffer(result, 'model.ply');
            });
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/ply_binary'));
        option.onClick(function () {
            var exporter = new PLYExporter();
            exporter.parse(editor.scene, function (result) {
                saveArrayBuffer(result, 'model-binary.ply');
            }, { binary: true });
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/stl'));
        option.onClick(function () {
            var exporter = new STLExporter();
            saveString(exporter.parse(editor.scene), 'model.stl');
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/export/stl_binary'));
        option.onClick(function () {
            var exporter = new STLExporter();
            saveArrayBuffer(exporter.parse(editor.scene, { binary: true }), 'model-binary.stl');
        });
        options.add(option);
        options.add(new mrdoobui.UIHorizontalRule());
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/file/publish'));
        option.onClick(function () {
            var zip = new JSZip();
            var output = editor.toJSON();
            output.metadata.type = 'App';
            delete output.history;
            output = JSON.stringify(output, parseNumber, '\t');
            output = output.replace(/[\n\t]+([\d\.e\-\[\]]+)/g, '$1');
            zip.file('app.json', output);
            var title = config.getKey('project/title');
            var manager = new THREE.LoadingManager(function () {
                save(zip.generate({ type: 'blob' }), (title !== '' ? title : 'untitled') + '.zip');
            });
            var loader = new THREE.FileLoader(manager);
            loader.load('js/libs/app/index.html', function (content) {
                content = content.replace('<!-- title -->', title);
                var includes = [];
                content = content.replace('<!-- includes -->', includes.join('\n\t\t'));
                var editButton = '';
                if (config.getKey('project/editable')) {
                    editButton = [
                        '',
                        "\t\t\tvar button = document.createElement( 'a' );",
                        "\t\t\tbutton.href = 'https://threejs.org/editor/#file=' + location.href.split( '/' ).slice( 0, - 1 ).join( '/' ) + '/app.json';",
                        "\t\t\tbutton.style.cssText = 'position: absolute; bottom: 20px; right: 20px; padding: 10px 16px; color: #fff; border: 1px solid #fff; border-radius: 20px; text-decoration: none;';",
                        "\t\t\tbutton.target = '_blank';",
                        "\t\t\tbutton.textContent = 'EDIT';",
                        '\t\t\tdocument.body.appendChild( button );',
                        ''
                    ].join('\n');
                }
                content = content.replace('\n\t\t\t/* edit button */\n', editButton);
                zip.file('index.html', content);
            });
            loader.load('js/libs/app', function (content) {
                zip.file('js/app', content);
            });
            loader.load('../build/three.module', function (content) {
                zip.file('js/three.module', content);
            });
            loader.load('../examples/jsm/webxr/VRButton', function (content) {
                zip.file('js/VRButton', content);
            });
            loader.load('../examples/js/vr/HelioWebXRPolyfill', function (content) {
                zip.file('js/HelioWebXRPolyfill', content);
            });
        });
        options.add(option);
        var link = document.createElement('a');
        function save(blob, filename) {
            link.href = URL.createObjectURL(blob);
            link.download = filename || 'data.json';
            link.dispatchEvent(new MouseEvent('click'));
        }
        function saveArrayBuffer(buffer, filename) {
            save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
        }
        function saveString(text, filename) {
            save(new Blob([text], { type: 'text/plain' }), filename);
        }
        return container;
    };
    return MenubarFile;
});