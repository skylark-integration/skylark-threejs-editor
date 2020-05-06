define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometrySphereGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var radiusRow = new mrdoobui.UIRow();
        var radius = new mrdoobui.UINumber(parameters.radius).onChange(update);
        radiusRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/sphere_geometry/radius')).setWidth('90px'));
        radiusRow.add(radius);
        container.add(radiusRow);
        var widthSegmentsRow = new mrdoobui.UIRow();
        var widthSegments = new mrdoobui.UIInteger(parameters.widthSegments).setRange(1, Infinity).onChange(update);
        widthSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/sphere_geometry/widthsegments')).setWidth('90px'));
        widthSegmentsRow.add(widthSegments);
        container.add(widthSegmentsRow);
        var heightSegmentsRow = new mrdoobui.UIRow();
        var heightSegments = new mrdoobui.UIInteger(parameters.heightSegments).setRange(1, Infinity).onChange(update);
        heightSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/sphere_geometry/heightsegments')).setWidth('90px'));
        heightSegmentsRow.add(heightSegments);
        container.add(heightSegmentsRow);
        var phiStartRow = new mrdoobui.UIRow();
        var phiStart = new mrdoobui.UINumber(parameters.phiStart * THREE.MathUtils.RAD2DEG).setStep(10).onChange(update);
        phiStartRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/sphere_geometry/phistart')).setWidth('90px'));
        phiStartRow.add(phiStart);
        container.add(phiStartRow);
        var phiLengthRow = new mrdoobui.UIRow();
        var phiLength = new mrdoobui.UINumber(parameters.phiLength * THREE.MathUtils.RAD2DEG).setStep(10).onChange(update);
        phiLengthRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/sphere_geometry/philength')).setWidth('90px'));
        phiLengthRow.add(phiLength);
        container.add(phiLengthRow);
        var thetaStartRow = new mrdoobui.UIRow();
        var thetaStart = new mrdoobui.UINumber(parameters.thetaStart * THREE.MathUtils.RAD2DEG).setStep(10).onChange(update);
        thetaStartRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/sphere_geometry/thetastart')).setWidth('90px'));
        thetaStartRow.add(thetaStart);
        container.add(thetaStartRow);
        var thetaLengthRow = new mrdoobui.UIRow();
        var thetaLength = new mrdoobui.UINumber(parameters.thetaLength * THREE.MathUtils.RAD2DEG).setStep(10).onChange(update);
        thetaLengthRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/sphere_geometry/thetalength')).setWidth('90px'));
        thetaLengthRow.add(thetaLength);
        container.add(thetaLengthRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.SphereBufferGeometry(radius.getValue(), widthSegments.getValue(), heightSegments.getValue(), phiStart.getValue() * THREE.MathUtils.DEG2RAD, phiLength.getValue() * THREE.MathUtils.DEG2RAD, thetaStart.getValue() * THREE.MathUtils.DEG2RAD, thetaLength.getValue() * THREE.MathUtils.DEG2RAD)));
        }
        return container;
    };
    return SidebarGeometrySphereGeometry;
});