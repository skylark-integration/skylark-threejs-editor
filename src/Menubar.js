define([
    'skylark-mrdoobui',
    './menuitems/Add',
    './menuitems/Edit',
    './menuitems/File',
    './menuitems/Examples',
    './menuitems/Help',
    './menuitems/Play',
    './menuitems/Status'
], function (mrdoobui, MenubarAdd, MenubarEdit, MenubarFile, MenubarExamples, MenubarHelp, MenubarPlay, MenubarStatus) {
    'use strict';
    var Menubar = function (editor) {
        var container = new mrdoobui.UIPanel();
        container.setId('menubar');
        container.add(new MenubarFile(editor));
        container.add(new MenubarEdit(editor));
        container.add(new MenubarAdd(editor));
        container.add(new MenubarPlay(editor));
        container.add(new MenubarExamples(editor));
        container.add(new MenubarHelp(editor));
        container.add(new MenubarStatus(editor));
        return container;
    };
    return Menubar;
});