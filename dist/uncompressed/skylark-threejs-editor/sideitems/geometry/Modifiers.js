define(['skylark-mrdoobui'], function (mrdoobui) {
    'use strict';
    var SidebarGeometryModifiers = function (editor, object) {
        var signals = editor.signals;
        var container = new mrdoobui.UIRow().setPaddingLeft('90px');
        var geometry = object.geometry;
        var button = new mrdoobui.UIButton('Compute Vertex Normals');
        button.onClick(function () {
            geometry.computeVertexNormals();
            if (geometry.isBufferGeometry) {
                geometry.attributes.normal.needsUpdate = true;
            } else {
                geometry.normalsNeedUpdate = true;
            }
            signals.geometryChanged.dispatch(object);
        });
        container.add(button);
        return container;
    };
    return SidebarGeometryModifiers;
});