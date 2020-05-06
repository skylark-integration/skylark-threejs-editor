define(['../Command'], function (Command) {
    'use strict';
    var SetValueCommand = function (editor, object, attributeName, newValue) {
        Command.call(this, editor);
        this.type = 'SetValueCommand';
        this.name = 'Set ' + attributeName;
        this.updatable = true;
        this.object = object;
        this.attributeName = attributeName;
        this.oldValue = object !== undefined ? object[attributeName] : undefined;
        this.newValue = newValue;
    };
    SetValueCommand.prototype = {
        execute: function () {
            this.object[this.attributeName] = this.newValue;
            this.editor.signals.objectChanged.dispatch(this.object);
        },
        undo: function () {
            this.object[this.attributeName] = this.oldValue;
            this.editor.signals.objectChanged.dispatch(this.object);
        },
        update: function (cmd) {
            this.newValue = cmd.newValue;
        },
        toJSON: function () {
            var output = Command.prototype.toJSON.call(this);
            output.objectUuid = this.object.uuid;
            output.attributeName = this.attributeName;
            output.oldValue = this.oldValue;
            output.newValue = this.newValue;
            return output;
        },
        fromJSON: function (json) {
            Command.prototype.fromJSON.call(this, json);
            this.attributeName = json.attributeName;
            this.oldValue = json.oldValue;
            this.newValue = json.newValue;
            this.object = this.editor.objectByUuid(json.objectUuid);
        }
    };
    return SetValueCommand;
});