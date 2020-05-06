define([
    'skylark-mrdoobui',
    './Object',
    './Geometry',
    './Material'
], function (mrdoobui, SidebarObject, SidebarGeometry, SidebarMaterial) {
    'use strict';
    var SidebarProperties = function (editor) {
        var strings = editor.strings;
        var container = new mrdoobui.UITabbedPanel();
        container.setId('properties');
        container.addTab('object', strings.getKey('sidebar/properties/object'), new SidebarObject(editor));
        container.addTab('geometry', strings.getKey('sidebar/properties/geometry'), new SidebarGeometry(editor));
        container.addTab('material', strings.getKey('sidebar/properties/material'), new SidebarMaterial(editor));
        container.select('object');
        return container;
    };
    return SidebarProperties;
});