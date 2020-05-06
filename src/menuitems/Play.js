define(['skylark-mrdoobui'], function (mrdoobui) {
    'use strict';
    var MenubarPlay = function (editor) {
        var signals = editor.signals;
        var strings = editor.strings;
        var container = new mrdoobui.UIPanel();
        container.setClass('menu');
        var isPlaying = false;
        var title = new mrdoobui.UIPanel();
        title.setClass('title');
        title.setTextContent(strings.getKey('menubar/play'));
        title.onClick(function () {
            if (isPlaying === false) {
                isPlaying = true;
                title.setTextContent(strings.getKey('menubar/play/stop'));
                signals.startPlayer.dispatch();
            } else {
                isPlaying = false;
                title.setTextContent(strings.getKey('menubar/play/play'));
                signals.stopPlayer.dispatch();
            }
        });
        container.add(title);
        return container;
    };
    return { MenubarPlay };
});