define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryCircleGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var radiusRow = new mrdoobui.UIRow();
        var radius = new mrdoobui.UINumber(parameters.radius).onChange(update);
        radiusRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/circle_geometry/radius')).setWidth('90px'));
        radiusRow.add(radius);
        container.add(radiusRow);
        var segmentsRow = new mrdoobui.UIRow();
        var segments = new mrdoobui.UIInteger(parameters.segments).setRange(3, Infinity).onChange(update);
        segmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/circle_geometry/segments')).setWidth('90px'));
        segmentsRow.add(segments);
        container.add(segmentsRow);
        var thetaStartRow = new mrdoobui.UIRow();
        var thetaStart = new mrdoobui.UINumber(parameters.thetaStart * THREE.MathUtils.RAD2DEG).setStep(10).onChange(update);
        thetaStartRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/circle_geometry/thetastart')).setWidth('90px'));
        thetaStartRow.add(thetaStart);
        container.add(thetaStartRow);
        var thetaLengthRow = new mrdoobui.UIRow();
        var thetaLength = new mrdoobui.UINumber(parameters.thetaLength * THREE.MathUtils.RAD2DEG).setStep(10).onChange(update);
        thetaLengthRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/circle_geometry/thetalength')).setWidth('90px'));
        thetaLengthRow.add(thetaLength);
        container.add(thetaLengthRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.CircleBufferGeometry(radius.getValue(), segments.getValue(), thetaStart.getValue() * THREE.MathUtils.DEG2RAD, thetaLength.getValue() * THREE.MathUtils.DEG2RAD)));
        }
        return container;
    };
    return SidebarGeometryCircleGeometry;
});