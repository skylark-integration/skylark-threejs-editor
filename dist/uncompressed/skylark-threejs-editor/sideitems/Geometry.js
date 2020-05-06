define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../commands/SetGeometryValueCommand',
    './geometry/Geometry',
    './geometry/BufferGeometry',
    './geometry/Modifiers',
    './geometry/BoxGeometry',
    './geometry/CircleGeometry',
    './geometry/CylinderGeometry',
    './geometry/DodecahedronGeometry',
    './geometry/ExtrudeGeometry',
    './geometry/IcosahedronGeometry',
    './geometry/LatheGeometry',
    './geometry/OctahedronGeometry',
    './geometry/PlaneGeometry',
    './geometry/RingGeometry',
    './geometry/ShapeGeometry',
    './geometry/SphereGeometry',
    './geometry/TeapotBufferGeometry',
    './geometry/TetrahedronGeometry',
    './geometry/TorusGeometry',
    './geometry/TorusKnotGeometry',
    './geometry/TubeGeometry'
], function (
    THREE, 
    mrdoobui, 
    SetGeometryValueCommand, 
    SidebarGeometryGeometry,
    SidebarGeometryBufferGeometry,
    SidebarGeometryModifiers,
    SidebarGeometryBoxGeometry,
    SidebarGeometryCircleGeometry,
    SidebarGeometryCylinderGeometry,
    SidebarGeometryDodecahedronGeometry,
    SidebarGeometryExtrudeGeometry,
    SidebarGeometryIcosahedronGeometry,
    SidebarGeometryLatheGeometry,
    SidebarGeometryOctahedronGeometry,
    SidebarGeometryPlaneGeometry,
    SidebarGeometryRingGeometry,
    SidebarGeometryShapeGeometry,
    SidebarGeometrySphereGeometry,
    SidebarGeometryTeapotBufferGeometry,
    SidebarGeometryTetrahedronGeometry,
    SidebarGeometryTorusGeometry,
    SidebarGeometryTorusKnotGeometry,
    SidebarGeometryTubeGeometry
) {
    'use strict';
    var geometryUIClasses = {
        'BoxBufferGeometry': SidebarGeometryBoxGeometry,
        'CircleBufferGeometry': SidebarGeometryCircleGeometry,
        'CylinderBufferGeometry': SidebarGeometryCylinderGeometry,
        'DodecahedronBufferGeometry': SidebarGeometryDodecahedronGeometry,
        'ExtrudeBufferGeometry': SidebarGeometryExtrudeGeometry,
        'IcosahedronBufferGeometry': SidebarGeometryIcosahedronGeometry,
        'LatheBufferGeometry': SidebarGeometryLatheGeometry,
        'OctahedronBufferGeometry': SidebarGeometryOctahedronGeometry,
        'PlaneBufferGeometry': SidebarGeometryPlaneGeometry,
        'RingBufferGeometry': SidebarGeometryRingGeometry,
        'ShapeBufferGeometry': SidebarGeometryShapeGeometry,
        'SphereBufferGeometry': SidebarGeometrySphereGeometry,
        'TeapotBufferGeometry': SidebarGeometryTeapotBufferGeometry,
        'TetrahedronBufferGeometry': SidebarGeometryTetrahedronGeometry,
        'TorusBufferGeometry': SidebarGeometryTorusGeometry,
        'TorusKnotBufferGeometry': SidebarGeometryTorusKnotGeometry,
        'TubeBufferGeometry': SidebarGeometryTubeGeometry
    };
    var SidebarGeometry = function (editor) {
        var strings = editor.strings;
        var signals = editor.signals;
        var container = new mrdoobui.UIPanel();
        container.setBorderTop('0');
        container.setDisplay('none');
        container.setPaddingTop('20px');
        var currentGeometryType = null;
        var geometryTypeRow = new mrdoobui.UIRow();
        var geometryType = new mrdoobui.UIText();
        geometryTypeRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/type')).setWidth('90px'));
        geometryTypeRow.add(geometryType);
        container.add(geometryTypeRow);
        var geometryUUIDRow = new mrdoobui.UIRow();
        var geometryUUID = new mrdoobui.UIInput().setWidth('102px').setFontSize('12px').setDisabled(true);
        var geometryUUIDRenew = new mrdoobui.UIButton(strings.getKey('sidebar/geometry/new')).setMarginLeft('7px').onClick(function () {
            geometryUUID.setValue(THREE.MathUtils.generateUUID());
            editor.execute(new SetGeometryValueCommand(editor, editor.selected, 'uuid', geometryUUID.getValue()));
        });
        geometryUUIDRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/uuid')).setWidth('90px'));
        geometryUUIDRow.add(geometryUUID);
        geometryUUIDRow.add(geometryUUIDRenew);
        container.add(geometryUUIDRow);
        var geometryNameRow = new mrdoobui.UIRow();
        var geometryName = new mrdoobui.UIInput().setWidth('150px').setFontSize('12px').onChange(function () {
            editor.execute(new SetGeometryValueCommand(editor, editor.selected, 'name', geometryName.getValue()));
        });
        geometryNameRow.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/name')).setWidth('90px'));
        geometryNameRow.add(geometryName);
        container.add(geometryNameRow);
        var parameters = new mrdoobui.UISpan();
        container.add(parameters);
        container.add(new SidebarGeometryGeometry(editor));
        container.add(new SidebarGeometryBufferGeometry(editor));
        var geometryBoundingSphere = new mrdoobui.UIText();
        container.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/bounds')).setWidth('90px'));
        container.add(geometryBoundingSphere);
        function build() {
            var object = editor.selected;
            if (object && object.geometry) {
                var geometry = object.geometry;
                container.setDisplay('block');
                geometryType.setValue(geometry.type);
                geometryUUID.setValue(geometry.uuid);
                geometryName.setValue(geometry.name);
                if (currentGeometryType !== geometry.type) {
                    parameters.clear();
                    if (geometry.type === 'BufferGeometry' || geometry.type === 'Geometry') {
                        parameters.add(new SidebarGeometryModifiers(editor, object));
                    } else if (geometryUIClasses[geometry.type] !== undefined) {
                        parameters.add(new geometryUIClasses[geometry.type](editor, object));
                    }
                    currentGeometryType = geometry.type;
                }
                if (geometry.boundingSphere === null)
                    geometry.computeBoundingSphere();
                geometryBoundingSphere.setValue(Math.floor(geometry.boundingSphere.radius * 1000) / 1000);
            } else {
                container.setDisplay('none');
            }
        }
        signals.objectSelected.add(function () {
            currentGeometryType = null;
            build();
        });
        signals.geometryChanged.add(build);
        return container;
    };
    return SidebarGeometry;
});