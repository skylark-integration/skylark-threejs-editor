define([
    'skylark-mrdoobui',
    '../commands/AddScriptCommand',
    '../commands/SetScriptValueCommand',
    '../commands/RemoveScriptCommand'
], function (mrdoobui, AddScriptCommand, SetScriptValueCommand, RemoveScriptCommand) {
    'use strict';
    var SidebarScript = function (editor) {
        var strings = editor.strings;
        var signals = editor.signals;
        var container = new mrdoobui.UIPanel();
        container.setDisplay('none');
        container.add(new mrdoobui.UIText(strings.getKey('sidebar/script')).setTextTransform('uppercase'));
        container.add(new mrdoobui.UIBreak());
        container.add(new mrdoobui.UIBreak());
        var scriptsContainer = new mrdoobui.UIRow();
        container.add(scriptsContainer);
        var newScript = new mrdoobui.UIButton(strings.getKey('sidebar/script/new'));
        newScript.onClick(function () {
            var script = {
                name: '',
                source: 'function update( event ) {}'
            };
            editor.execute(new AddScriptCommand(editor, editor.selected, script));
        });
        container.add(newScript);
        function update() {
            scriptsContainer.clear();
            scriptsContainer.setDisplay('none');
            var object = editor.selected;
            if (object === null) {
                return;
            }
            var scripts = editor.scripts[object.uuid];
            if (scripts !== undefined && scripts.length > 0) {
                scriptsContainer.setDisplay('block');
                for (var i = 0; i < scripts.length; i++) {
                    (function (object, script) {
                        var name = new mrdoobui.UIInput(script.name).setWidth('130px').setFontSize('12px');
                        name.onChange(function () {
                            editor.execute(new SetScriptValueCommand(editor, editor.selected, script, 'name', this.getValue()));
                        });
                        scriptsContainer.add(name);
                        var edit = new mrdoobui.UIButton(strings.getKey('sidebar/script/edit'));
                        edit.setMarginLeft('4px');
                        edit.onClick(function () {
                            signals.editScript.dispatch(object, script);
                        });
                        scriptsContainer.add(edit);
                        var remove = new mrdoobui.UIButton(strings.getKey('sidebar/script/remove'));
                        remove.setMarginLeft('4px');
                        remove.onClick(function () {
                            if (confirm('Are you sure?')) {
                                editor.execute(new RemoveScriptCommand(editor, editor.selected, script));
                            }
                        });
                        scriptsContainer.add(remove);
                        scriptsContainer.add(new mrdoobui.UIBreak());
                    }(object, scripts[i]));
                }
            }
        }
        signals.objectSelected.add(function (object) {
            if (object !== null && editor.camera !== object) {
                container.setDisplay('block');
                update();
            } else {
                container.setDisplay('none');
            }
        });
        signals.scriptAdded.add(update);
        signals.scriptRemoved.add(update);
        signals.scriptChanged.add(update);
        return container;
    };
    return SidebarScript ;
});