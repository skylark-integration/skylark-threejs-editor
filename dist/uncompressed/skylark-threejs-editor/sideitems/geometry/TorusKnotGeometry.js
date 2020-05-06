define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryTorusKnotGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var radiusRow = new mrdoobui.UIRow();
        var radius = new mrdoobui.UINumber(parameters.radius).onChange(update);
        radiusRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torusKnot_geometry/radius')).setWidth('90px'));
        radiusRow.add(radius);
        container.add(radiusRow);
        var tubeRow = new mrdoobui.UIRow();
        var tube = new mrdoobui.UINumber(parameters.tube).onChange(update);
        tubeRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torusKnot_geometry/tube')).setWidth('90px'));
        tubeRow.add(tube);
        container.add(tubeRow);
        var tubularSegmentsRow = new mrdoobui.UIRow();
        var tubularSegments = new mrdoobui.UIInteger(parameters.tubularSegments).setRange(1, Infinity).onChange(update);
        tubularSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torusKnot_geometry/tubularsegments')).setWidth('90px'));
        tubularSegmentsRow.add(tubularSegments);
        container.add(tubularSegmentsRow);
        var radialSegmentsRow = new mrdoobui.UIRow();
        var radialSegments = new mrdoobui.UIInteger(parameters.radialSegments).setRange(1, Infinity).onChange(update);
        radialSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torusKnot_geometry/radialsegments')).setWidth('90px'));
        radialSegmentsRow.add(radialSegments);
        container.add(radialSegmentsRow);
        var pRow = new mrdoobui.UIRow();
        var p = new mrdoobui.UINumber(parameters.p).onChange(update);
        pRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torusKnot_geometry/p')).setWidth('90px'));
        pRow.add(p);
        container.add(pRow);
        var qRow = new mrdoobui.UIRow();
        var q = new mrdoobui.UINumber(parameters.q).onChange(update);
        qRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/torusKnot_geometry/q')).setWidth('90px'));
        qRow.add(q);
        container.add(qRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.TorusKnotBufferGeometry(radius.getValue(), tube.getValue(), tubularSegments.getValue(), radialSegments.getValue(), p.getValue(), q.getValue())));
        }
        return container;
    };
    return SidebarGeometryTorusKnotGeometry;
});