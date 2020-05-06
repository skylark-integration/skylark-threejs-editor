define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../../commands/SetGeometryCommand'
], function (THREE, mrdoobui, SetGeometryCommand) {
    'use strict';
    var SidebarGeometryExtrudeGeometry = function (editor, object) {
        var strings = editor.strings;
        var container = new mrdoobui.UIRow();
        var geometry = object.geometry;
        var parameters = geometry.parameters;
        var options = parameters.options;
        options.curveSegments = options.curveSegments != undefined ? options.curveSegments : 12;
        options.steps = options.steps != undefined ? options.steps : 1;
        options.depth = options.depth != undefined ? options.depth : 100;
        options.bevelThickness = options.bevelThickness !== undefined ? options.bevelThickness : 6;
        options.bevelSize = options.bevelSize !== undefined ? options.bevelSize : 4;
        options.bevelOffset = options.bevelOffset !== undefined ? options.bevelOffset : 0;
        options.bevelSegments = options.bevelSegments !== undefined ? options.bevelSegments : 3;
        var curveSegmentsRow = new mrdoobui.UIRow();
        var curveSegments = new mrdoobui.UIInteger(options.curveSegments).onChange(update).setRange(1, Infinity);
        curveSegmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/extrude_geometry/curveSegments')).setWidth('90px'));
        curveSegmentsRow.add(curveSegments);
        container.add(curveSegmentsRow);
        var stepsRow = new mrdoobui.UIRow();
        var steps = new mrdoobui.UIInteger(options.steps).onChange(update).setRange(1, Infinity);
        stepsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/extrude_geometry/steps')).setWidth('90px'));
        stepsRow.add(steps);
        container.add(stepsRow);
        var depthRow = new mrdoobui.UIRow();
        var depth = new mrdoobui.UINumber(options.depth).onChange(update).setRange(1, Infinity);
        depthRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/extrude_geometry/depth')).setWidth('90px'));
        depthRow.add(depth);
        container.add(depthRow);
        var enabledRow = new mrdoobui.UIRow();
        var enabled = new mrdoobui.UICheckbox(options.bevelEnabled).onChange(update);
        enabledRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/extrude_geometry/bevelEnabled')).setWidth('90px'));
        enabledRow.add(enabled);
        container.add(enabledRow);
        if (options.bevelEnabled === true) {
            var thicknessRow = new mrdoobui.UIRow();
            var thickness = new mrdoobui.UINumber(options.bevelThickness).onChange(update);
            thicknessRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/extrude_geometry/bevelThickness')).setWidth('90px'));
            thicknessRow.add(thickness);
            container.add(thicknessRow);
            var sizeRow = new mrdoobui.UIRow();
            var size = new mrdoobui.UINumber(options.bevelSize).onChange(update);
            sizeRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/extrude_geometry/bevelSize')).setWidth('90px'));
            sizeRow.add(size);
            container.add(sizeRow);
            var offsetRow = new mrdoobui.UIRow();
            var offset = new mrdoobui.UINumber(options.bevelOffset).onChange(update);
            offsetRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/extrude_geometry/bevelOffset')).setWidth('90px'));
            offsetRow.add(offset);
            container.add(offsetRow);
            var segmentsRow = new mrdoobui.UIRow();
            var segments = new mrdoobui.UIInteger(options.bevelSegments).onChange(update).setRange(0, Infinity);
            segmentsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/extrude_geometry/bevelSegments')).setWidth('90px'));
            segmentsRow.add(segments);
            container.add(segmentsRow);
        }
        var button = new mrdoobui.UIButton(strings.getKey('sidebar/geometry/extrude_geometry/shape')).onClick(toShape).setWidth('90px').setMarginLeft('90px');
        container.add(button);
        function update() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.ExtrudeBufferGeometry(parameters.shapes, {
                curveSegments: curveSegments.getValue(),
                steps: steps.getValue(),
                depth: depth.getValue(),
                bevelEnabled: enabled.getValue(),
                bevelThickness: thickness !== undefined ? thickness.getValue() : options.bevelThickness,
                bevelSize: size !== undefined ? size.getValue() : options.bevelSize,
                bevelOffset: offset !== undefined ? offset.getValue() : options.bevelOffset,
                bevelSegments: segments !== undefined ? segments.getValue() : options.bevelSegments
            })));
        }
        function toShape() {
            editor.execute(new SetGeometryCommand(editor, object, new THREE.ShapeBufferGeometry(parameters.shapes, options.curveSegments)));
        }
        return container;
    };
    return SidebarGeometryExtrudeGeometry;
});