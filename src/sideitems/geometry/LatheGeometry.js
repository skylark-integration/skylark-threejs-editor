define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../ThreeUI',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, ThreeUI, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryLatheGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var segmentsRow = new mrdoobui.UIRow();
        var segments = new mrdoobui.UIInteger(parameters.segments).onChange(update);
        segmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/lathe_geometry/segments')).setWidth('90px'));
        segmentsRow.add(segments);
        container.add(segmentsRow);
        var phiStartRow = new mrdoobui.UIRow();
        var phiStart = new mrdoobui.UINumber(parameters.phiStart * 180 / Math.PI).onChange(update);
        phiStartRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/lathe_geometry/phistart')).setWidth('90px'));
        phiStartRow.add(phiStart);
        container.add(phiStartRow);
        var phiLengthRow = new mrdoobui.UIRow();
        var phiLength = new mrdoobui.UINumber(parameters.phiLength * 180 / Math.PI).onChange(update);
        phiLengthRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/lathe_geometry/philength')).setWidth('90px'));
        phiLengthRow.add(phiLength);
        container.add(phiLengthRow);
        var pointsRow = new mrdoobui.UIRow();
        pointsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/lathe_geometry/points')).setWidth('90px'));
        var points = new ThreeUI.UIPoints2().setValue(parameters.points).onChange(update);
        pointsRow.add(points);
        container.add(pointsRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.LatheBufferGeometry(points.getValue(), segments.getValue(), phiStart.getValue() / 180 * Math.PI, phiLength.getValue() / 180 * Math.PI)));
        }
        return container;
    };
    return SidebarGeometryLatheGeometry;
});