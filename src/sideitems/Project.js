define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../ThreeUI',
    '../commands/SetMaterialCommand'
], function (THREE, mrdoobui, ThreeUI, SetMaterialCommand) {
    'use strict';
    var SidebarProject = function (editor) {
        var config = editor.config;
        var signals = editor.signals;
        var strings = editor.strings;
        var currentRenderer = null;
        var currentPmremGenerator = null;
        var container = new mrdoobui.UISpan();
        var projectsettings = new mrdoobui.UIPanel();
        projectsettings.setBorderTop('0');
        projectsettings.setPaddingTop('20px');
        container.add(projectsettings);
        var titleRow = new mrdoobui.UIRow();
        var title = new mrdoobui.UIInput(config.getKey('project/title')).setLeft('100px').onChange(function () {
            config.setKey('project/title', this.getValue());
        });
        titleRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/title')).setWidth('90px'));
        titleRow.add(title);
        projectsettings.add(titleRow);
        var editableRow = new mrdoobui.UIRow();
        var editable = new mrdoobui.UICheckbox(config.getKey('project/editable')).setLeft('100px').onChange(function () {
            config.setKey('project/editable', this.getValue());
        });
        editableRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/editable')).setWidth('90px'));
        editableRow.add(editable);
        projectsettings.add(editableRow);
        var vrRow = new mrdoobui.UIRow();
        var vr = new mrdoobui.UICheckbox(config.getKey('project/vr')).setLeft('100px').onChange(function () {
            config.setKey('project/vr', this.getValue());
        });
        vrRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/vr')).setWidth('90px'));
        vrRow.add(vr);
        projectsettings.add(vrRow);
        var rendererPanel = new mrdoobui.UIPanel();
        container.add(rendererPanel);
        var headerRow = new mrdoobui.UIRow();
        headerRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/renderer').toUpperCase()));
        rendererPanel.add(headerRow);
        var antialiasRow = new mrdoobui.UIRow();
        var antialiasBoolean = new ThreeUI.UIBoolean(config.getKey('project/renderer/antialias')).onChange(function () {
            config.setKey('project/renderer/antialias', this.getValue());
            updateRenderer();
        });
        antialiasRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/antialias')).setWidth('90px'));
        antialiasRow.add(antialiasBoolean);
        rendererPanel.add(antialiasRow);
        var shadowsRow = new mrdoobui.UIRow();
        var shadowsBoolean = new ThreeUI.UIBoolean(config.getKey('project/renderer/shadows')).onChange(function () {
            config.setKey('project/renderer/shadows', this.getValue());
            updateRenderer();
        });
        shadowsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/shadows')).setWidth('90px'));
        shadowsRow.add(shadowsBoolean);
        rendererPanel.add(shadowsRow);
        var shadowTypeRow = new mrdoobui.UIRow();
        var shadowTypeSelect = new mrdoobui.UISelect().setOptions({
            0: 'Basic',
            1: 'PCF',
            2: 'PCF (Soft)'
        }).setWidth('150px').onChange(function () {
            config.setKey('project/renderer/shadowType', parseFloat(this.getValue()));
            updateRenderer();
        });
        shadowTypeSelect.setValue(config.getKey('project/renderer/shadowType'));
        shadowTypeRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/shadowType')).setWidth('90px'));
        shadowTypeRow.add(shadowTypeSelect);
        rendererPanel.add(shadowTypeRow);
        var physicallyCorrectLightsRow = new mrdoobui.UIRow();
        var physicallyCorrectLightsBoolean = new ThreeUI.UIBoolean(config.getKey('project/renderer/physicallyCorrectLights')).onChange(function () {
            config.setKey('project/renderer/physicallyCorrectLights', this.getValue());
            updateRenderer();
        });
        physicallyCorrectLightsRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/physicallyCorrectLights')).setWidth('90px'));
        physicallyCorrectLightsRow.add(physicallyCorrectLightsBoolean);
        rendererPanel.add(physicallyCorrectLightsRow);
        var toneMappingRow = new mrdoobui.UIRow();
        var toneMappingSelect = new mrdoobui.UISelect().setOptions({
            0: 'None',
            1: 'Linear',
            2: 'Reinhard',
            3: 'Uncharted2',
            4: 'Cineon',
            5: 'ACESFilmic'
        }).setWidth('150px').onChange(function () {
            var toneMapping = parseFloat(this.getValue());
            config.setKey('project/renderer/toneMapping', toneMapping);
            updateRenderer();
            toneMappingWhitePointRow.setDisplay(toneMapping === 3 ? 'block' : 'none');
        });
        toneMappingSelect.setValue(config.getKey('project/renderer/toneMapping'));
        toneMappingRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/toneMapping')).setWidth('90px'));
        toneMappingRow.add(toneMappingSelect);
        rendererPanel.add(toneMappingRow);
        var toneMappingExposureRow = new mrdoobui.UIRow();
        var toneMappingExposure = new mrdoobui.UINumber(config.getKey('project/renderer/toneMappingExposure')).setRange(0, 10).onChange(function () {
            config.setKey('project/renderer/toneMappingExposure', this.getValue());
            updateTonemapping();
        });
        toneMappingExposureRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/toneMappingExposure')).setWidth('90px'));
        toneMappingExposureRow.add(toneMappingExposure);
        rendererPanel.add(toneMappingExposureRow);
        var toneMappingWhitePointRow = new mrdoobui.UIRow();
        var toneMappingWhitePoint = new mrdoobui.UINumber(config.getKey('project/renderer/toneMappingWhitePoint')).setRange(0, 10).onChange(function () {
            config.setKey('project/renderer/toneMappingWhitePoint', this.getValue());
            updateTonemapping();
        });
        toneMappingWhitePointRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/toneMappingWhitePoint')).setWidth('90px'));
        toneMappingWhitePointRow.add(toneMappingWhitePoint);
        rendererPanel.add(toneMappingWhitePointRow);
        toneMappingWhitePointRow.setDisplay(config.getKey('project/renderer/toneMapping') === 3 ? 'block' : 'none');
        function updateRenderer() {
            createRenderer(antialiasBoolean.getValue(), shadowsBoolean.getValue(), shadowTypeSelect.getValue(), toneMappingSelect.getValue(), physicallyCorrectLightsBoolean.getValue());
        }
        function createRenderer(antialias, shadows, shadowType, toneMapping, physicallyCorrectLights) {
            var parameters = { antialias: antialias };
            if (currentRenderer !== null) {
                currentRenderer.dispose();
                currentPmremGenerator.dispose();
            }
            currentRenderer = new THREE.WebGLRenderer(parameters);
            currentPmremGenerator = new THREE.PMREMGenerator(currentRenderer);
            currentPmremGenerator.compileCubemapShader();
            currentPmremGenerator.compileEquirectangularShader();
            if (shadows) {
                currentRenderer.shadowMap.enabled = true;
                currentRenderer.shadowMap.type = parseFloat(shadowType);
            }
            currentRenderer.toneMapping = parseFloat(toneMapping);
            currentRenderer.physicallyCorrectLights = physicallyCorrectLights;
            signals.rendererChanged.dispatch(currentRenderer, currentPmremGenerator);
        }
        function updateTonemapping() {
            currentRenderer.toneMappingExposure = toneMappingExposure.getValue();
            currentRenderer.toneMappingWhitePoint = toneMappingWhitePoint.getValue();
            signals.rendererUpdated.dispatch();
        }
        createRenderer(config.getKey('project/renderer/antialias'), config.getKey('project/renderer/shadows'), config.getKey('project/renderer/shadowType'), config.getKey('project/renderer/toneMapping'), config.getKey('project/renderer/physicallyCorrectLights'));
        var materials = new mrdoobui.UIPanel();
        var headerRow = new mrdoobui.UIRow();
        headerRow.add(new mrdoobui.UIText(strings.getKey('sidebar/project/materials').toUpperCase()));
        materials.add(headerRow);
        var listbox = new mrdoobui.UIListbox();
        materials.add(listbox);
        var buttonsRow = new mrdoobui.UIRow();
        buttonsRow.setPadding('10px 0px');
        materials.add(buttonsRow);
        var assignMaterial = new mrdoobui.UIButton().setLabel(strings.getKey('sidebar/project/Assign')).setMargin('0px 5px');
        assignMaterial.onClick(function () {
            var selectedObject = editor.selected;
            if (selectedObject !== null) {
                var oldMaterial = selectedObject.material;
                if (oldMaterial !== undefined) {
                    var material = editor.getMaterialById(parseInt(listbox.getValue()));
                    if (material !== undefined) {
                        editor.removeMaterial(oldMaterial);
                        editor.execute(new SetMaterialCommand(editor, selectedObject, material));
                        editor.addMaterial(material);
                    }
                }
            }
        });
        buttonsRow.add(assignMaterial);
        container.add(materials);
        signals.objectSelected.add(function (object) {
            if (object !== null) {
                var index = Object.values(editor.materials).indexOf(object.material);
                listbox.selectIndex(index);
            }
        });
        signals.materialAdded.add(refreshMaterialBrowserUI);
        signals.materialChanged.add(refreshMaterialBrowserUI);
        signals.materialRemoved.add(refreshMaterialBrowserUI);
        function refreshMaterialBrowserUI() {
            listbox.setItems(Object.values(editor.materials));
        }
        return container;
    };
    return SidebarProject;
});