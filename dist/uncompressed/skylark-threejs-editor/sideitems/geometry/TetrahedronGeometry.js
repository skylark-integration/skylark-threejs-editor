define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryTetrahedronGeometry = function (editor, object) {
        var strings = editor.strings;
        var signals = editor.signals;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var radiusRow = new mrdoobui.UIRow();
        var radius = new mrdoobui.UINumber(parameters.radius).onChange(update);
        radiusRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tetrahedron_geometry/radius')).setWidth('90px'));
        radiusRow.add(radius);
        container.add(radiusRow);
        var detailRow = new mrdoobui.UIRow();
        var detail = new mrdoobui.UIInteger(parameters.detail).setRange(0, Infinity).onChange(update);
        detailRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/tetrahedron_geometry/detail')).setWidth('90px'));
        detailRow.add(detail);
        container.add(detailRow);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.TetrahedronBufferGeometry(radius.getValue(), detail.getValue())));
            signals.objectChanged.dispatch(object);
        }
        return container;
    };
    return SidebarGeometryTetrahedronGeometry;
});