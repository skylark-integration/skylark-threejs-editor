define([
    'skylark-mrdoobui'
], function (mrdoobui) {
    'use strict';
    var SidebarAnimation = function (editor) {
        var signals = editor.signals;
        var mixer = editor.mixer;
        var actions = {};
        signals.objectSelected.add(function (object) {
            var animations = editor.animations[object !== null ? object.uuid : ''];
            if (animations !== undefined) {
                container.setDisplay('');
                var options = {};
                var firstAnimation;
                for (var animation of animations) {
                    if (firstAnimation === undefined)
                        firstAnimation = animation.name;
                    actions[animation.name] = mixer.clipAction(animation, object);
                    options[animation.name] = animation.name;
                }
                animationsSelect.setOptions(options);
                animationsSelect.setValue(firstAnimation);
            } else {
                container.setDisplay('none');
            }
        });
        signals.objectRemoved.add(function (object) {
            var animations = editor.animations[object !== null ? object.uuid : ''];
            if (animations !== undefined) {
                mixer.uncacheRoot(object);
            }
        });
        function playAction() {
            actions[animationsSelect.getValue()].play();
        }
        function stopAction() {
            actions[animationsSelect.getValue()].stop();
        }
        var container = new mrdoobui.UIPanel();
        container.setDisplay('none');
        container.add(new mrdoobui.UIText('Animations').setTextTransform('uppercase'));
        container.add(new mrdoobui.UIBreak());
        container.add(new mrdoobui.UIBreak());
        var div = new mrdoobui.UIDiv();
        container.add(div);
        var animationsSelect = new mrdoobui.UISelect().setFontSize('12px');
        div.add(animationsSelect);
        div.add(new mrdoobui.UIButton('Play').setMarginLeft('4px').onClick(playAction));
        div.add(new mrdoobui.UIButton('Stop').setMarginLeft('4px').onClick(stopAction));
        return container;
    };
    return SidebarAnimation;
});