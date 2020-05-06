define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../ThreeUI'
], function (THREE, mrdoobui, ThreeUI) {
    'use strict';
    var MenubarStatus = function (editor) {
        var strings = editor.strings;
        var container = new mrdoobui.UIPanel();
        container.setClass('menu right');
        var autosave = new ThreeUI.UIBoolean(editor.config.getKey('autosave'), strings.getKey('menubar/status/autosave'));
        autosave.text.setColor('#888');
        autosave.onChange(function () {
            var value = this.getValue();
            editor.config.setKey('autosave', value);
            if (value === true) {
                editor.signals.sceneGraphChanged.dispatch();
            }
        });
        container.add(autosave);
        editor.signals.savingStarted.add(function () {
            autosave.text.setTextDecoration('underline');
        });
        editor.signals.savingFinished.add(function () {
            autosave.text.setTextDecoration('none');
        });
        var version = new mrdoobui.UIText('r' + THREE.REVISION);
        version.setClass('title');
        version.setOpacity(0.5);
        container.add(version);
        return container;
    };
    return MenubarStatus;
});