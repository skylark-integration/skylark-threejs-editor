define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryShapeGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var curveSegmentsRow = new mrdoobui.UIRow();
        var curveSegments = new mrdoobui.UIInteger(parameters.curveSegments || 12).onChange(changeShape).setRange(1, Infinity);
        curveSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/shape_geometry/curveSegments')).setWidth('90px'));
        curveSegmentsRow.add(curveSegments);
        container.add(curveSegmentsRow);
        var button = new mrdoobui.UIButton(strings.getKey('sidebar/geometry/shape_geometry/extrude')).onClick(toExtrude).setWidth('90px').setMarginLeft('90px');
        container.add(button);
        function changeShape() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.ShapeBufferGeometry(parameters.shapes, curveSegments.getValue())));
        }
        function toExtrude() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.ExtrudeBufferGeometry(parameters.shapes, { curveSegments: curveSegments.getValue() })));
        }
        return container;
    };
    return  SidebarGeometryShapeGeometry ;
});