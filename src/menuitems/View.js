define(['skylark-mrdoobui'], function (mrdoobui) {
    'use strict';
    var MenubarView = function (editor) {
        var container = new mrdoobui.UIPanel();
        container.setClass('menu');
        var title = new mrdoobui.UIPanel();
        title.setClass('title');
        title.setTextContent('View');
        container.add(title);
        var options = new mrdoobui.UIPanel();
        options.setClass('options');
        container.add(options);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent('VR mode');
        option.onClick(function () {
            editor.signals.enterVR.dispatch();
        });
        options.add(option);
        return container;
    };
    return { MenubarView };
});