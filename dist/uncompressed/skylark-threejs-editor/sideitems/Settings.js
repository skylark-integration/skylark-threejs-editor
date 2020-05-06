define([
    'skylark-mrdoobui',
    './settings/Viewport',
    './settings/Shortcuts'
], function (
    mrdoobui, 
    SidebarSettingsViewport, 
    SidebarSettingsShortcuts
) {
    'use strict';
    var SidebarSettings = function (editor) {
        var config = editor.config;
        var strings = editor.strings;
        var container = new mrdoobui.UIPanel();
        container.setBorderTop('0');
        container.setPaddingTop('20px');
        container.setPaddingBottom('20px');
        var options = {
            en: 'English',
            fr: 'Français',
            zh: '中文'
        };
        var languageRow = new mrdoobui.UIRow();
        var language = new mrdoobui.UISelect().setWidth('150px');
        language.setOptions(options);
        if (config.getKey('language') !== undefined) {
            language.setValue(config.getKey('language'));
        }
        language.onChange(function () {
            var value = this.getValue();
            editor.config.setKey('language', value);
        });
        languageRow.add(new mrdoobui.UIText(strings.getKey('sidebar/settings/language')).setWidth('90px'));
        languageRow.add(language);
        container.add(languageRow);
        var exportPrecisionRow = new mrdoobui.UIRow();
        var exportPrecision = new mrdoobui.UIInteger(config.getKey('exportPrecision')).setRange(2, Infinity);
        exportPrecision.onChange(function () {
            var value = this.getValue();
            editor.config.setKey('exportPrecision', value);
        });
        exportPrecisionRow.add(new mrdoobui.UIText(strings.getKey('sidebar/settings/exportPrecision')).setWidth('90px'));
        exportPrecisionRow.add(exportPrecision);
        container.add(exportPrecisionRow);
        container.add(new SidebarSettingsShortcuts(editor));
        container.add(new SidebarSettingsViewport(editor));
        return container;
    };
    return { SidebarSettings };
});