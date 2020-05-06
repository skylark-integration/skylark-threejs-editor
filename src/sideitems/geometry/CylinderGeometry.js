define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryCylinderGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var radiusTopRow = new mrdoobui.UIRow();
        var radiusTop = new mrdoobui.UINumber(parameters.radiusTop).onChange(update);
        radiusTopRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/cylinder_geometry/radiustop')).setWidth('90px'));
        radiusTopRow.add(radiusTop);
        container.add(radiusTopRow);
        var radiusBottomRow = new mrdoobui.UIRow();
        var radiusBottom = new mrdoobui.UINumber(parameters.radiusBottom).onChange(update);
        radiusBottomRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/cylinder_geometry/radiusbottom')).setWidth('90px'));
        radiusBottomRow.add(radiusBottom);
        container.add(radiusBottomRow);
        var heightRow = new mrdoobui.UIRow();
        var height = new mrdoobui.UINumber(parameters.height).onChange(update);
        heightRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/cylinder_geometry/height')).setWidth('90px'));
        heightRow.add(height);
        container.add(heightRow);
        var radialSegmentsRow = new mrdoobui.UIRow();
        var radialSegments = new mrdoobui.UIInteger(parameters.radialSegments).setRange(1, Infinity).onChange(update);
        radialSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/cylinder_geometry/radialsegments')).setWidth('90px'));
        radialSegmentsRow.add(radialSegments);
        container.add(radialSegmentsRow);
        var heightSegmentsRow = new mrdoobui.UIRow();
        var heightSegments = new mrdoobui.UIInteger(parameters.heightSegments).setRange(1, Infinity).onChange(update);
        heightSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/cylinder_geometry/heightsegments')).setWidth('90px'));
        heightSegmentsRow.add(heightSegments);
        container.add(heightSegmentsRow);
        var openEndedRow = new mrdoobui.UIRow();
        var openEnded = new mrdoobui.UICheckbox(parameters.openEnded).onChange(update);
        openEndedRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/cylinder_geometry/openended')).setWidth('90px'));
        openEndedRow.add(openEnded);
        container.add(openEndedRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.CylinderBufferGeometry(radiusTop.getValue(), radiusBottom.getValue(), height.getValue(), radialSegments.getValue(), heightSegments.getValue(), openEnded.getValue())));
        }
        return container;
    };
    return SidebarGeometryCylinderGeometry;
});