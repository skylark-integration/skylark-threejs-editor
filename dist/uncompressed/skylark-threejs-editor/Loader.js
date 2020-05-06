define([
    'skylark-threejs',
    'skylark-threejs-ex/loaders/AMFLoader',
    'skylark-threejs-ex/loaders/ColladaLoader',
    'skylark-threejs-ex/loaders/DRACOLoader',
    'skylark-threejs-ex/loaders/FBXLoader',
    'skylark-threejs-ex/loaders/GLTFLoader',
    'skylark-threejs-ex/loaders/KMZLoader',
    'skylark-threejs-ex/loaders/MD2Loader',
    'skylark-threejs-ex/loaders/MTLLoader',
    'skylark-threejs-ex/loaders/OBJLoader',
    'skylark-threejs-ex/loaders/PLYLoader',
    'skylark-threejs-ex/loaders/STLLoader',
    'skylark-threejs-ex/loaders/SVGLoader',
    'skylark-threejs-ex/loaders/TDSLoader',
    'skylark-threejs-ex/loaders/VTKLoader',
    'skylark-threejs-ex/loaders/VRMLLoader',

    './commands/AddObjectCommand',
    './commands/SetSceneCommand',
    './LoaderUtils'
], function (
    THREE, 
    AMFLoader, 
    ColladaLoader, 
    DRACOLoader, 
    FBXLoader, 
    GLTFLoader, 
    KMZLoader, 
    MD2Loader, 
    MTLLoader, 
    OBJLoader, 
    PLYLoader, 
    STLLoader, 
    SVGLoader, 
    TDSLoader, 
    VTKLoader, 
    VRMLLoader, 
    AddObjectCommand, 
    SetSceneCommand, 
    LoaderUtils
) {
    'use strict';
    var Loader = function (editor) {
        var scope = this;
        this.texturePath = '';
        this.loadItemList = function (items) {
            LoaderUtils.getFilesFromItemList(items, function (files, filesMap) {
                scope.loadFiles(files, filesMap);
            });
        };
        this.loadFiles = function (files, filesMap) {
            if (files.length > 0) {
                var filesMap = filesMap || LoaderUtils.createFilesMap(files);
                var manager = new THREE.LoadingManager();
                manager.setURLModifier(function (url) {
                    var file = filesMap[url];
                    if (file) {
                        console.log('Loading', url);
                        return URL.createObjectURL(file);
                    }
                    return url;
                });
                for (var i = 0; i < files.length; i++) {
                    scope.loadFile(files[i], manager);
                }
            }
        };
        this.loadFile = function (file, manager) {
            var filename = file.name;
            var extension = filename.split('.').pop().toLowerCase();
            var reader = new FileReader();
            reader.addEventListener('progress', function (event) {
                var size = '(' + Math.floor(event.total / 1000).format() + ' KB)';
                var progress = Math.floor(event.loaded / event.total * 100) + '%';
                console.log('Loading', filename, size, progress);
            });
            switch (extension) {
            case '3ds':
                reader.addEventListener('load', function (event) {
                    var loader = new TDSLoader();
                    var object = loader.parse(event.target.result);
                    editor.execute(new AddObjectCommand(editor, object));
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'amf':
                reader.addEventListener('load', function (event) {
                    var loader = new AMFLoader();
                    var amfobject = loader.parse(event.target.result);
                    editor.execute(new AddObjectCommand(editor, amfobject));
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'dae':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var loader = new ColladaLoader(manager);
                    var collada = loader.parse(contents);
                    collada.scene.name = filename;
                    editor.addAnimation(collada.scene, collada.animations);
                    editor.execute(new AddObjectCommand(editor, collada.scene));
                }, false);
                reader.readAsText(file);
                break;
            case 'drc':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var loader = new DRACOLoader();
                    loader.setDecoderPath('../examples/js/libs/draco/');
                    loader.decodeDracoFile(contents, function (geometry) {
                        var material = new THREE.MeshStandardMaterial();
                        var mesh = new THREE.Mesh(geometry, material);
                        mesh.name = filename;
                        editor.execute(new AddObjectCommand(editor, mesh));
                    });
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'fbx':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var loader = new FBXLoader(manager);
                    var object = loader.parse(contents);
                    editor.addAnimation(object, object.animations);
                    editor.execute(new AddObjectCommand(editor, object));
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'glb':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var dracoLoader = new DRACOLoader();
                    dracoLoader.setDecoderPath('../examples/js/libs/draco/gltf/');
                    var loader = new GLTFLoader();
                    loader.setDRACOLoader(dracoLoader);
                    loader.parse(contents, '', function (result) {
                        var scene = result.scene;
                        scene.name = filename;
                        editor.addAnimation(scene, result.animations);
                        editor.execute(new AddObjectCommand(editor, scene));
                    });
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'gltf':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var loader;
                    if (isGLTF1(contents)) {
                        alert('Import of glTF asset not possible. Only versions >= 2.0 are supported. Please try to upgrade the file to glTF 2.0 using glTF-Pipeline.');
                    } else {
                        var dracoLoader = new DRACOLoader();
                        dracoLoader.setDecoderPath('../examples/js/libs/draco/gltf/');
                        loader = new GLTFLoader(manager);
                        loader.setDRACOLoader(dracoLoader);
                    }
                    loader.parse(contents, '', function (result) {
                        var scene = result.scene;
                        scene.name = filename;
                        editor.addAnimation(scene, result.animations);
                        editor.execute(new AddObjectCommand(editor, scene));
                    });
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'js':
            case 'json':
            case '3geo':
            case '3mat':
            case '3obj':
            case '3scn':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    if (contents.indexOf('postMessage') !== -1) {
                        var blob = new Blob([contents], { type: 'text/javascript' });
                        var url = URL.createObjectURL(blob);
                        var worker = new Worker(url);
                        worker.onmessage = function (event) {
                            event.data.metadata = { version: 2 };
                            handleJSON(event.data);
                        };
                        worker.postMessage(Date.now());
                        return;
                    }
                    var data;
                    try {
                        data = JSON.parse(contents);
                    } catch (error) {
                        alert(error);
                        return;
                    }
                    handleJSON(data);
                }, false);
                reader.readAsText(file);
                break;
            case 'kmz':
                reader.addEventListener('load', function (event) {
                    var loader = new KMZLoader();
                    var collada = loader.parse(event.target.result);
                    collada.scene.name = filename;
                    editor.execute(new AddObjectCommand(editor, collada.scene));
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'md2':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var geometry = new MD2Loader().parse(contents);
                    var material = new THREE.MeshStandardMaterial({
                        morphTargets: true,
                        morphNormals: true
                    });
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.mixer = new THREE.AnimationMixer(mesh);
                    mesh.name = filename;
                    editor.addAnimation(mesh, geometry.animations);
                    editor.execute(new AddObjectCommand(editor, mesh));
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'obj':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var object = new OBJLoader().parse(contents);
                    object.name = filename;
                    editor.execute(new AddObjectCommand(editor, object));
                }, false);
                reader.readAsText(file);
                break;
            case 'ply':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var geometry = new PLYLoader().parse(contents);
                    geometry.sourceType = 'ply';
                    geometry.sourceFile = file.name;
                    var material = new THREE.MeshStandardMaterial();
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.name = filename;
                    editor.execute(new AddObjectCommand(editor, mesh));
                }, false);
                reader.readAsArrayBuffer(file);
                break;
            case 'stl':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var geometry = new STLLoader().parse(contents);
                    geometry.sourceType = 'stl';
                    geometry.sourceFile = file.name;
                    var material = new THREE.MeshStandardMaterial();
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.name = filename;
                    editor.execute(new AddObjectCommand(editor, mesh));
                }, false);
                if (reader.readAsBinaryString !== undefined) {
                    reader.readAsBinaryString(file);
                } else {
                    reader.readAsArrayBuffer(file);
                }
                break;
            case 'svg':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var loader = new SVGLoader();
                    var paths = loader.parse(contents).paths;
                    var group = new THREE.Group();
                    group.scale.multiplyScalar(0.1);
                    group.scale.y *= -1;
                    for (var i = 0; i < paths.length; i++) {
                        var path = paths[i];
                        var material = new THREE.MeshBasicMaterial({
                            color: path.color,
                            depthWrite: false
                        });
                        var shapes = path.toShapes(true);
                        for (var j = 0; j < shapes.length; j++) {
                            var shape = shapes[j];
                            var geometry = new THREE.ShapeBufferGeometry(shape);
                            var mesh = new THREE.Mesh(geometry, material);
                            group.add(mesh);
                        }
                    }
                    editor.execute(new AddObjectCommand(editor, group));
                }, false);
                reader.readAsText(file);
                break;
            case 'vtk':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var geometry = new VTKLoader().parse(contents);
                    geometry.sourceType = 'vtk';
                    geometry.sourceFile = file.name;
                    var material = new THREE.MeshStandardMaterial();
                    var mesh = new THREE.Mesh(geometry, material);
                    mesh.name = filename;
                    editor.execute(new AddObjectCommand(editor, mesh));
                }, false);
                reader.readAsText(file);
                break;
            case 'wrl':
                reader.addEventListener('load', function (event) {
                    var contents = event.target.result;
                    var result = new VRMLLoader().parse(contents);
                    editor.execute(new SetSceneCommand(editor, result));
                }, false);
                reader.readAsText(file);
                break;
            case 'zip':
                reader.addEventListener('load', function (event) {
                    handleZIP(event.target.result);
                }, false);
                reader.readAsBinaryString(file);
                break;
            default:
                break;
            }
        };
        function handleJSON(data) {
            if (data.metadata === undefined) {
                data.metadata = { type: 'Geometry' };
            }
            if (data.metadata.type === undefined) {
                data.metadata.type = 'Geometry';
            }
            if (data.metadata.formatVersion !== undefined) {
                data.metadata.version = data.metadata.formatVersion;
            }
            switch (data.metadata.type.toLowerCase()) {
            case 'buffergeometry':
                var loader = new THREE.BufferGeometryLoader();
                var result = loader.parse(data);
                var mesh = new THREE.Mesh(result);
                editor.execute(new AddObjectCommand(editor, mesh));
                break;
            case 'geometry':
                console.error('Loader: "Geometry" is no longer supported.');
                break;
            case 'object':
                var loader = new THREE.ObjectLoader();
                loader.setResourcePath(scope.texturePath);
                loader.parse(data, function (result) {
                    if (result.isScene) {
                        editor.execute(new SetSceneCommand(editor, result));
                    } else {
                        editor.execute(new AddObjectCommand(editor, result));
                    }
                });
                break;
            case 'app':
                editor.fromJSON(data);
                break;
            }
        }
        function handleZIP(contents) {
            var zip = new JSZip(contents);
            if (zip.files['model.obj'] && zip.files['materials.mtl']) {
                var materials = new MTLLoader().parse(zip.file('materials.mtl').asText());
                var object = new OBJLoader().setMaterials(materials).parse(zip.file('model.obj').asText());
                editor.execute(new AddObjectCommand(editor, object));
            }
            zip.filter(function (path, file) {
                var manager = new THREE.LoadingManager();
                manager.setURLModifier(function (url) {
                    var file = zip.files[url];
                    if (file) {
                        console.log('Loading', url);
                        var blob = new Blob([file.asArrayBuffer()], { type: 'application/octet-stream' });
                        return URL.createObjectURL(blob);
                    }
                    return url;
                });
                var extension = file.name.split('.').pop().toLowerCase();
                switch (extension) {
                case 'fbx':
                    var loader = new FBXLoader(manager);
                    var object = loader.parse(file.asArrayBuffer());
                    editor.execute(new AddObjectCommand(editor, object));
                    break;
                case 'glb':
                    var loader = new GLTFLoader();
                    loader.parse(file.asArrayBuffer(), '', function (result) {
                        var scene = result.scene;
                        editor.addAnimation(scene, result.animations);
                        editor.execute(new AddObjectCommand(editor, scene));
                    });
                    break;
                case 'gltf':
                    var loader = new GLTFLoader(manager);
                    loader.parse(file.asText(), '', function (result) {
                        var scene = result.scene;
                        editor.addAnimation(scene, result.animations);
                        editor.execute(new AddObjectCommand(editor, scene));
                    });
                    break;
                }
            });
        }
        function isGLTF1(contents) {
            var resultContent;
            if (typeof contents === 'string') {
                resultContent = contents;
            } else {
                var magic = THREE.undefined.decodeText(new Uint8Array(contents, 0, 4));
                if (magic === 'glTF') {
                    var version = new DataView(contents).getUint32(4, true);
                    return version < 2;
                } else {
                    resultContent = THREE.undefined.decodeText(new Uint8Array(contents));
                }
            }
            var json = JSON.parse(resultContent);
            return json.asset != undefined && json.asset.version[0] < 2;
        }
    };
    
    return Loader;
});