define([
    'skylark-mrdoobui',
    './sideitems/Scene',
    './sideitems/Properties',
    './sideitems/Script',
    './sideitems/Animation',
    './sideitems/Project',
    './sideitems/History',
    './sideitems/Settings'
], function (
    mrdoobui, 
    SidebarScene, 
    SidebarProperties, 
    SidebarScript, 
    SidebarAnimation, 
    SidebarProject, 
    SidebarHistory, 
    SidebarSettings
) {
    'use strict';
    var Sidebar = function (editor) {
        var strings = editor.strings;
        var container = new mrdoobui.UITabbedPanel();
        container.setId('sidebar');
        var scene = new mrdoobui.UISpan().add(new SidebarScene(editor), new SidebarProperties(editor), new SidebarAnimation(editor), new SidebarScript(editor));
        var project = new SidebarProject(editor);
        var settings = new mrdoobui.UISpan().add(new SidebarSettings(editor), new SidebarHistory(editor));
        container.addTab('scene', strings.getKey('sidebar/scene'), scene);
        container.addTab('project', strings.getKey('sidebar/project'), project);
        container.addTab('settings', strings.getKey('sidebar/settings'), settings);
        container.select('scene');
        return container;
    };
    return Sidebar ;
});