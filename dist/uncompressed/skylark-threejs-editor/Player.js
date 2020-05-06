define([
    'skylark-mrdoobui',
    './APP'
], function (mrdoobui, APP) {
    'use strict';
    function Player(editor) {
        var signals = editor.signals;
        var container = new mrdoobui.UIPanel();
        container.setId('player');
        container.setPosition('absolute');
        container.setDisplay('none');
        var player = new APP.Player();
        container.dom.appendChild(player.dom);
        window.addEventListener('resize', function () {
            player.setSize(container.dom.clientWidth, container.dom.clientHeight);
        });
        signals.startPlayer.add(function () {
            container.setDisplay('');
            player.load(editor.toJSON());
            player.setSize(container.dom.clientWidth, container.dom.clientHeight);
            player.play();
        });
        signals.stopPlayer.add(function () {
            container.setDisplay('none');
            player.stop();
            player.dispose();
        });
        return container;
    }
    return Player;
});