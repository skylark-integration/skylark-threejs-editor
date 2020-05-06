define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../commands/AddObjectCommand'
], function (THREE, mrdoobui, AddObjectCommand) {
    'use strict';
    var MenubarAdd = function (editor) {
        var strings = editor.strings;
        var container = new mrdoobui.UIPanel();
        container.setClass('menu');
        var title = new mrdoobui.UIPanel();
        title.setClass('title');
        title.setTextContent(strings.getKey('menubar/add'));
        container.add(title);
        var options = new mrdoobui.UIPanel();
        options.setClass('options');
        container.add(options);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/group'));
        option.onClick(function () {
            var mesh = new THREE.Group();
            mesh.name = 'Group';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        options.add(new mrdoobui.UIHorizontalRule());
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/box'));
        option.onClick(function () {
            var geometry = new THREE.BoxBufferGeometry(1, 1, 1, 1, 1, 1);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Box';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/circle'));
        option.onClick(function () {
            var geometry = new THREE.CircleBufferGeometry(1, 8, 0, Math.PI * 2);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Circle';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/cylinder'));
        option.onClick(function () {
            var geometry = new THREE.CylinderBufferGeometry(1, 1, 1, 8, 1, false, 0, Math.PI * 2);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Cylinder';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/dodecahedron'));
        option.onClick(function () {
            var geometry = new THREE.DodecahedronBufferGeometry(1, 0);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Dodecahedron';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/icosahedron'));
        option.onClick(function () {
            var geometry = new THREE.IcosahedronBufferGeometry(1, 0);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Icosahedron';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/lathe'));
        option.onClick(function () {
            var points = [
                new THREE.Vector2(0, 0),
                new THREE.Vector2(0.4, 0),
                new THREE.Vector2(0.35, 0.05),
                new THREE.Vector2(0.1, 0.075),
                new THREE.Vector2(0.08, 0.1),
                new THREE.Vector2(0.08, 0.4),
                new THREE.Vector2(0.1, 0.42),
                new THREE.Vector2(0.14, 0.48),
                new THREE.Vector2(0.2, 0.5),
                new THREE.Vector2(0.25, 0.54),
                new THREE.Vector2(0.3, 1.2)
            ];
            var geometry = new THREE.LatheBufferGeometry(points, 12, 0, Math.PI * 2);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ side: THREE.DoubleSide }));
            mesh.name = 'Lathe';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/octahedron'));
        option.onClick(function () {
            var geometry = new THREE.OctahedronBufferGeometry(1, 0);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Octahedron';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/plane'));
        option.onClick(function () {
            var geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);
            var material = new THREE.MeshStandardMaterial();
            var mesh = new THREE.Mesh(geometry, material);
            mesh.name = 'Plane';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/ring'));
        option.onClick(function () {
            var geometry = new THREE.RingBufferGeometry(0.5, 1, 8, 1, 0, Math.PI * 2);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Ring';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/sphere'));
        option.onClick(function () {
            var geometry = new THREE.SphereBufferGeometry(1, 8, 6, 0, Math.PI * 2, 0, Math.PI);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Sphere';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/sprite'));
        option.onClick(function () {
            var sprite = new THREE.Sprite(new THREE.SpriteMaterial());
            sprite.name = 'Sprite';
            editor.execute(new AddObjectCommand(editor, sprite));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/tetrahedron'));
        option.onClick(function () {
            var geometry = new THREE.TetrahedronBufferGeometry(1, 0);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Tetrahedron';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/torus'));
        option.onClick(function () {
            var geometry = new THREE.TorusBufferGeometry(1, 0.4, 8, 6, Math.PI * 2);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Torus';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/torusknot'));
        option.onClick(function () {
            var geometry = new THREE.TorusKnotBufferGeometry(1, 0.4, 64, 8, 2, 3);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'TorusKnot';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/tube'));
        option.onClick(function () {
            var path = new THREE.CatmullRomCurve3([
                new THREE.Vector3(2, 2, -2),
                new THREE.Vector3(2, -2, -0.6666666666666667),
                new THREE.Vector3(-2, -2, 0.6666666666666667),
                new THREE.Vector3(-2, 2, 2)
            ]);
            var geometry = new THREE.TubeBufferGeometry(path, 64, 1, 8, false);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
            mesh.name = 'Tube';
            editor.execute(new AddObjectCommand(editor, mesh));
        });
        options.add(option);
        options.add(new mrdoobui.UIHorizontalRule());
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/ambientlight'));
        option.onClick(function () {
            var color = 2236962;
            var light = new THREE.AmbientLight(color);
            light.name = 'AmbientLight';
            editor.execute(new AddObjectCommand(editor, light));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/directionallight'));
        option.onClick(function () {
            var color = 16777215;
            var intensity = 1;
            var light = new THREE.DirectionalLight(color, intensity);
            light.name = 'DirectionalLight';
            light.target.name = 'DirectionalLight Target';
            light.position.set(5, 10, 7.5);
            editor.execute(new AddObjectCommand(editor, light));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/hemispherelight'));
        option.onClick(function () {
            var skyColor = 43775;
            var groundColor = 16755200;
            var intensity = 1;
            var light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            light.name = 'HemisphereLight';
            light.position.set(0, 10, 0);
            editor.execute(new AddObjectCommand(editor, light));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/pointlight'));
        option.onClick(function () {
            var color = 16777215;
            var intensity = 1;
            var distance = 0;
            var light = new THREE.PointLight(color, intensity, distance);
            light.name = 'PointLight';
            editor.execute(new AddObjectCommand(editor, light));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/spotlight'));
        option.onClick(function () {
            var color = 16777215;
            var intensity = 1;
            var distance = 0;
            var angle = Math.PI * 0.1;
            var penumbra = 0;
            var light = new THREE.SpotLight(color, intensity, distance, angle, penumbra);
            light.name = 'SpotLight';
            light.target.name = 'SpotLight Target';
            light.position.set(5, 10, 7.5);
            editor.execute(new AddObjectCommand(editor, light));
        });
        options.add(option);
        options.add(new mrdoobui.UIHorizontalRule());
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/orthographiccamera'));
        option.onClick(function () {
            var camera = new THREE.OrthographicCamera();
            camera.name = 'OrthographicCamera';
            editor.execute(new AddObjectCommand(editor, camera));
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/add/perspectivecamera'));
        option.onClick(function () {
            var camera = new THREE.PerspectiveCamera();
            camera.name = 'PerspectiveCamera';
            editor.execute(new AddObjectCommand(editor, camera));
        });
        options.add(option);
        return container;
    };
    return MenubarAdd ;
});