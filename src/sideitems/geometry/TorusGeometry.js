define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryTorusGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var radiusRow = new mrdoobui.UIRow();
        var radius = new mrdoobui.UINumber(parameters.radius).onChange(update);
        radiusRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torus_geometry/radius')).setWidth('90px'));
        radiusRow.add(radius);
        container.add(radiusRow);
        var tubeRow = new mrdoobui.UIRow();
        var tube = new mrdoobui.UINumber(parameters.tube).onChange(update);
        tubeRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torus_geometry/tube')).setWidth('90px'));
        tubeRow.add(tube);
        container.add(tubeRow);
        var radialSegmentsRow = new mrdoobui.UIRow();
        var radialSegments = new mrdoobui.UIInteger(parameters.radialSegments).setRange(1, Infinity).onChange(update);
        radialSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torus_geometry/radialsegments')).setWidth('90px'));
        radialSegmentsRow.add(radialSegments);
        container.add(radialSegmentsRow);
        var tubularSegmentsRow = new mrdoobui.UIRow();
        var tubularSegments = new mrdoobui.UIInteger(parameters.tubularSegments).setRange(1, Infinity).onChange(update);
        tubularSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torus_geometry/tubularsegments')).setWidth('90px'));
        tubularSegmentsRow.add(tubularSegments);
        container.add(tubularSegmentsRow);
        var arcRow = new mrdoobui.UIRow();
        var arc = new mrdoobui.UINumber(parameters.arc * THREE.MathUtils.RAD2DEG).setStep(10).onChange(update);
        arcRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torus_geometry/arc')).setWidth('90px'));
        arcRow.add(arc);
        container.add(arcRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.TorusBufferGeometry(radius.getValue(), tube.getValue(), radialSegments.getValue(), tubularSegments.getValue(), arc.getValue() * THREE.MathUtils.DEG2RAD)));
        }
        return container;
    };
    return SidebarGeometryTorusGeometry;
});