define([
    'skylark-mrdoobui',
    '../../ThreeUI'
], function (mrdoobui, ThreeUI) {
    'use strict';
    var SidebarSettingsViewport = function (editor) {
        var signals = editor.signals;
        var strings = editor.strings;
        var container = new mrdoobui.UIDiv();
        container.add(new mrdoobui.UIBreak());
        container.add(new mrdoobui.UIText(strings.getKey('sidebar/settings/viewport/grid')).setWidth('90px'));
        var show = new ThreeUI.UIBoolean(true).onChange(update);
        container.add(show);
        function update() {
            signals.showGridChanged.dispatch(show.getValue());
        }
        return container;
    };
    return SidebarSettingsViewport;
});