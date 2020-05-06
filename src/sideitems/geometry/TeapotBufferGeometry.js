define([
    'skylark-mrdoobui',
    'skylark-threejs-ex/geometries/TeapotBufferGeometry'
], function (mrdoobui, TeapotBufferGeometry) {
    'use strict';
    var SidebarGeometryTeapotBufferGeometry = function (signals, object) {
        var container = new mrdoobui.UIRow();
        var parameters = object.geometry.parameters;
        var sizeRow = new mrdoobui.UIRow();
        var size = new mrdoobui.UINumber(parameters.size).onChange(update);
        sizeRow.add(new mrdoobui.UIText('Size').setWidth('90px'));
        sizeRow.add(size);
        container.add(sizeRow);
        var segmentsRow = new mrdoobui.UIRow();
        var segments = new mrdoobui.UIInteger(parameters.segments).setRange(1, Infinity).onChange(update);
        segmentsRow.add(new mrdoobui.UIText('Segments').setWidth('90px'));
        segmentsRow.add(segments);
        container.add(segmentsRow);
        var bottomRow = new mrdoobui.UIRow();
        var bottom = new mrdoobui.UICheckbox(parameters.bottom).onChange(update);
        bottomRow.add(new mrdoobui.UIText('Bottom').setWidth('90px'));
        bottomRow.add(bottom);
        container.add(bottomRow);
        var lidRow = new mrdoobui.UIRow();
        var lid = new mrdoobui.UICheckbox(parameters.lid).onChange(update);
        lidRow.add(new mrdoobui.UIText('Lid').setWidth('90px'));
        lidRow.add(lid);
        container.add(lidRow);
        var bodyRow = new mrdoobui.UIRow();
        var body = new mrdoobui.UICheckbox(parameters.body).onChange(update);
        bodyRow.add(new mrdoobui.UIText('Body').setWidth('90px'));
        bodyRow.add(body);
        container.add(bodyRow);
        var fitLidRow = new mrdoobui.UIRow();
        var fitLid = new mrdoobui.UICheckbox(parameters.fitLid).onChange(update);
        fitLidRow.add(new mrdoobui.UIText('Fitted Lid').setWidth('90px'));
        fitLidRow.add(fitLid);
        container.add(fitLidRow);
        var blinnRow = new mrdoobui.UIRow();
        var blinn = new mrdoobui.UICheckbox(parameters.blinn).onChange(update);
        blinnRow.add(new mrdoobui.UIText('Blinn-scaled').setWidth('90px'));
        blinnRow.add(blinn);
        container.add(blinnRow);
        function update() {
            object.geometry.dispose();
            object.geometry = new TeapotBufferGeometry(size.getValue(), segments.getValue(), bottom.getValue(), lid.getValue(), body.getValue(), fitLid.getValue(), blinn.getValue());
            object.geometry.computeBoundingSphere();
            signals.geometryChanged.dispatch(object);
        }
        return container;
    };
    return SidebarGeometryTeapotBufferGeometry ;
});