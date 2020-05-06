define(['skylark-mrdoobui'], function (mrdoobui) {
    'use strict';
    var ViewportCamera = function (editor) {
        var signals = editor.signals;
        var cameraSelect = new mrdoobui.UISelect();
        cameraSelect.setPosition('absolute');
        cameraSelect.setRight('10px');
        cameraSelect.setTop('10px');
        cameraSelect.onChange(function () {
            editor.setViewportCamera(this.getValue());
        });
        signals.cameraAdded.add(update);
        signals.cameraRemoved.add(update);
        update();
        function update() {
            var options = {};
            var cameras = editor.cameras;
            for (var key in cameras) {
                var camera = cameras[key];
                options[camera.uuid] = camera.name;
            }
            cameraSelect.setOptions(options);
            cameraSelect.setValue(editor.viewportCamera.uuid);
        }
        return cameraSelect;
    };
    return ViewportCamera ;
});