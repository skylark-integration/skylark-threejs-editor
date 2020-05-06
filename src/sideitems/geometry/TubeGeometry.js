define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../ThreeUI',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, ThreeUI, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryTubeGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var pointsRow = new mrdoobui.UIRow();
        pointsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tube_geometry/path')).setWidth('90px'));
        var points = new ThreeUI.UIPoints3().setValue(parameters.path.points).onChange(update);
        pointsRow.add(points);
        container.add(pointsRow);
        var radiusRow = new mrdoobui.UIRow();
        var radius = new mrdoobui.UINumber(parameters.radius).onChange(update);
        radiusRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tube_geometry/radius')).setWidth('90px'));
        radiusRow.add(radius);
        container.add(radiusRow);
        var tubularSegmentsRow = new mrdoobui.UIRow();
        var tubularSegments = new mrdoobui.UIInteger(parameters.tubularSegments).onChange(update);
        tubularSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tube_geometry/tubularsegments')).setWidth('90px'));
        tubularSegmentsRow.add(tubularSegments);
        container.add(tubularSegmentsRow);
        var radialSegmentsRow = new mrdoobui.UIRow();
        var radialSegments = new mrdoobui.UIInteger(parameters.radialSegments).onChange(update);
        radialSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tube_geometry/radialsegments')).setWidth('90px'));
        radialSegmentsRow.add(radialSegments);
        container.add(radialSegmentsRow);
        var closedRow = new mrdoobui.UIRow();
        var closed = new mrdoobui.UICheckbox(parameters.closed).onChange(update);
        closedRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tube_geometry/closed')).setWidth('90px'));
        closedRow.add(closed);
        container.add(closedRow);
        var curveTypeRow = new mrdoobui.UIRow();
        var curveType = new mrdoobui.UISelect().setOptions({
            centripetal: 'centripetal',
            chordal: 'chordal',
            catmullrom: 'catmullrom'
        }).setValue(parameters.path.curveType).onChange(update);
        curveTypeRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tube_geometry/curvetype')).setWidth('90px'), curveType);
        container.add(curveTypeRow);
        var tensionRow = new mrdoobui.UIRow().setDisplay(curveType.getValue() == 'catmullrom' ? '' : 'none');
        var tension = new mrdoobui.UINumber(parameters.path.tension).setStep(0.01).onChange(update);
        tensionRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tube_geometry/tension')).setWidth('90px'), tension);
        container.add(tensionRow);
        function update() {
            tensionRow.setDisplay(curveType.getValue() == 'catmullrom' ? '' : 'none');
            editor.execute(new SetGeometryCommand(editor, object, new THREE.TubeBufferGeometry(new THREE.CatmullRomCurve3(points.getValue(), closed.getValue(), curveType.getValue(), tension.getValue()), tubularSegments.getValue(), radius.getValue(), radialSegments.getValue(), closed.getValue())));
        }
        return container;
    };
    return SidebarGeometryTubeGeometry;
});