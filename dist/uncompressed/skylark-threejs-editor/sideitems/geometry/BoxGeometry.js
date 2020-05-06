define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryBoxGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var widthRow = new mrdoobui.UIRow();
        var width = new mrdoobui.UINumber(parameters.width).onChange(update);
        widthRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/box_geometry/width')).setWidth('90px'));
        widthRow.add(width);
        container.add(widthRow);
        var heightRow = new mrdoobui.UIRow();
        var height = new mrdoobui.UINumber(parameters.height).onChange(update);
        heightRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/box_geometry/height')).setWidth('90px'));
        heightRow.add(height);
        container.add(heightRow);
        var depthRow = new mrdoobui.UIRow();
        var depth = new mrdoobui.UINumber(parameters.depth).onChange(update);
        depthRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/box_geometry/depth')).setWidth('90px'));
        depthRow.add(depth);
        container.add(depthRow);
        var widthSegmentsRow = new mrdoobui.UIRow();
        var widthSegments = new mrdoobui.UIInteger(parameters.widthSegments).setRange(1, Infinity).onChange(update);
        widthSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/box_geometry/widthseg')).setWidth('90px'));
        widthSegmentsRow.add(widthSegments);
        container.add(widthSegmentsRow);
        var heightSegmentsRow = new mrdoobui.UIRow();
        var heightSegments = new mrdoobui.UIInteger(parameters.heightSegments).setRange(1, Infinity).onChange(update);
        heightSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/box_geometry/heightseg')).setWidth('90px'));
        heightSegmentsRow.add(heightSegments);
        container.add(heightSegmentsRow);
        var depthSegmentsRow = new mrdoobui.UIRow();
        var depthSegments = new mrdoobui.UIInteger(parameters.depthSegments).setRange(1, Infinity).onChange(update);
        depthSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/box_geometry/depthseg')).setWidth('90px'));
        depthSegmentsRow.add(depthSegments);
        container.add(depthSegmentsRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.BoxBufferGeometry(width.getValue(), height.getValue(), depth.getValue(), widthSegments.getValue(), heightSegments.getValue(), depthSegments.getValue())));
        }
        return container;
    };
    return SidebarGeometryBoxGeometry;
});