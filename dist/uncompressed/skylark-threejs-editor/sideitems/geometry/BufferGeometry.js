define(['skylark-mrdoobui'], function (mrdoobui) {
    'use strict';
    var SidebarGeometryBufferGeometry = function (editor) {
        var strings = editor.strings;
        var signals = editor.signals;
        var container = new mrdoobui.UIRow();
        function update(object) {
            if (object === null)
                return;
            if (object === undefined)
                return;
            var geometry = object.geometry;
            if (geometry && geometry.isBufferGeometry) {
                container.clear();
                container.setDisplay('block');
                var text = new mrdoobui.UIText(strings.getKey('sidebar/geometry/buffer_geometry/attributes')).setWidth('90px');
                container.add(text);
                var container2 = new mrdoobui.UISpan().setDisplay('inline-block').setWidth('160px');
                container.add(container2);
                var index = geometry.index;
                if (index !== null) {
                    container2.add(new mrdoobui.UIText(strings.getKey('sidebar/geometry/buffer_geometry/index')).setWidth('80px'));
                    container2.add(new mrdoobui.UIText(index.count.format()).setFontSize('12px'));
                    container2.add(new mrdoobui.UIBreak());
                }
                var attributes = geometry.attributes;
                for (var name in attributes) {
                    var attribute = attributes[name];
                    container2.add(new mrdoobui.UIText(name).setWidth('80px'));
                    container2.add(new mrdoobui.UIText(attribute.count.format() + ' (' + attribute.itemSize + ')').setFontSize('12px'));
                    container2.add(new mrdoobui.UIBreak());
                }
            } else {
                container.setDisplay('none');
            }
        }
        signals.objectSelected.add(update);
        signals.geometryChanged.add(update);
        return container;
    };
    return SidebarGeometryBufferGeometry;
});