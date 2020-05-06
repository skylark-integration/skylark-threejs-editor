define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryPlaneGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var widthRow = new mrdoobui.UIRow();
        var width = new mrdoobui.UINumber(parameters.width).onChange(update);
        widthRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/plane_geometry/width')).setWidth('90px'));
        widthRow.add(width);
        container.add(widthRow);
        var heightRow = new mrdoobui.UIRow();
        var height = new mrdoobui.UINumber(parameters.height).onChange(update);
        heightRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/plane_geometry/height')).setWidth('90px'));
        heightRow.add(height);
        container.add(heightRow);
        var widthSegmentsRow = new mrdoobui.UIRow();
        var widthSegments = new mrdoobui.UIInteger(parameters.widthSegments).setRange(1, Infinity).onChange(update);
        widthSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/plane_geometry/widthsegments')).setWidth('90px'));
        widthSegmentsRow.add(widthSegments);
        container.add(widthSegmentsRow);
        var heightSegmentsRow = new mrdoobui.UIRow();
        var heightSegments = new mrdoobui.UIInteger(parameters.heightSegments).setRange(1, Infinity).onChange(update);
        heightSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/plane_geometry/heightsegments')).setWidth('90px'));
        heightSegmentsRow.add(heightSegments);
        container.add(heightSegmentsRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.PlaneBufferGeometry(width.getValue(), height.getValue(), widthSegments.getValue(), heightSegments.getValue())));
        }
        return container;
    };
    return SidebarGeometryPlaneGeometry;
});