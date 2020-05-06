define(['skylark-mrdoobui'], function (mrdoobui) {
    'use strict';
    var SidebarGeometryGeometry = function (editor) {
        var strings = editor.strings;
        var signals = editor.signals;
        var container = new mrdoobui.UIRow();
        var verticesRow = new mrdoobui.UIRow();
        var vertices = new mrdoobui.UIText();
        verticesRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/geometry/vertices')).setWidth('90px'));
        verticesRow.add(vertices);
        container.add(verticesRow);
        var facesRow = new mrdoobui.UIRow();
        var faces = new mrdoobui.UIText();
        facesRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/geometry/faces')).setWidth('90px'));
        facesRow.add(faces);
        container.add(facesRow);
        function update(object) {
            if (object === null)
                return;
            if (object === undefined)
                return;
            var geometry = object.geometry;
            if (geometry && geometry.isGeometry) {
                container.setDisplay('block');
                vertices.setValue(geometry.vertices.length.format());
                faces.setValue(geometry.faces.length.format());
            } else {
                container.setDisplay('none');
            }
        }
        signals.objectSelected.add(update);
        signals.geometryChanged.add(update);
        return container;
    };
    return SidebarGeometryGeometry;
});