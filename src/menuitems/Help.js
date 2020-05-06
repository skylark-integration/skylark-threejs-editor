define(['skylark-mrdoobui'], function (mrdoobui) {
    'use strict';
    var MenubarHelp = function (editor) {
        var strings = editor.strings;
        var container = new mrdoobui.UIPanel();
        container.setClass('menu');
        var title = new mrdoobui.UIPanel();
        title.setClass('title');
        title.setTextContent(strings.getKey('menubar/help'));
        container.add(title);
        var options = new mrdoobui.UIPanel();
        options.setClass('options');
        container.add(options);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/help/source_code'));
        option.onClick(function () {
            window.open('https://github.com/mrdoob/three.js/tree/master/editor', '_blank');
        });
        options.add(option);
        var option = new mrdoobui.UIRow();
        option.setClass('option');
        option.setTextContent(strings.getKey('menubar/help/about'));
        option.onClick(function () {
            window.open('http://threejs.org', '_blank');
        });
        options.add(option);
        return container;
    };
    return MenubarHelp;
});