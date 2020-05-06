define([
    'skylark-threejs',
    'skylark-mrdoobui',
    '../ThreeUI',
    '../commands/SetUuidCommand',
    '../commands/SetValueCommand',
    '../commands/SetPositionCommand',
    '../commands/SetRotationCommand',
    '../commands/SetScaleCommand',
    '../commands/SetColorCommand'
], function (
    THREE, 
    mrdoobui, 
    ThreeUI, 
    SetUuidCommand, 
    SetValueCommand, 
    SetPositionCommand, 
    SetRotationCommand, 
    SetScaleCommand, 
    SetColorCommand
) {
    'use strict';
    var SidebarObject = function (editor) {
        var strings = editor.strings;
        var signals = editor.signals;
        var container = new mrdoobui.UIPanel();
        container.setBorderTop('0');
        container.setPaddingTop('20px');
        container.setDisplay('none');
        var objectTypeRow = new mrdoobui.UIRow();
        var objectType = new mrdoobui.UIText();
        objectTypeRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/type')).setWidth('90px'));
        objectTypeRow.add(objectType);
        container.add(objectTypeRow);
        var objectUUIDRow = new mrdoobui.UIRow();
        var objectUUID = new mrdoobui.UIInput().setWidth('102px').setFontSize('12px').setDisabled(true);
        var objectUUIDRenew = new mrdoobui.UIButton(strings.getKey('sidebar/object/new')).setMarginLeft('7px').onClick(function () {
            objectUUID.setValue(THREE.MathUtils.generateUUID());
            editor.execute(new SetUuidCommand(editor, editor.selected, objectUUID.getValue()));
        });
        objectUUIDRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/uuid')).setWidth('90px'));
        objectUUIDRow.add(objectUUID);
        objectUUIDRow.add(objectUUIDRenew);
        container.add(objectUUIDRow);
        var objectNameRow = new mrdoobui.UIRow();
        var objectName = new mrdoobui.UIInput().setWidth('150px').setFontSize('12px').onChange(function () {
            editor.execute(new SetValueCommand(editor, editor.selected, 'name', objectName.getValue()));
        });
        objectNameRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/name')).setWidth('90px'));
        objectNameRow.add(objectName);
        container.add(objectNameRow);
        var objectPositionRow = new mrdoobui.UIRow();
        var objectPositionX = new mrdoobui.UINumber().setPrecision(3).setWidth('50px').onChange(update);
        var objectPositionY = new mrdoobui.UINumber().setPrecision(3).setWidth('50px').onChange(update);
        var objectPositionZ = new mrdoobui.UINumber().setPrecision(3).setWidth('50px').onChange(update);
        objectPositionRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/position')).setWidth('90px'));
        objectPositionRow.add(objectPositionX, objectPositionY, objectPositionZ);
        container.add(objectPositionRow);
        var objectRotationRow = new mrdoobui.UIRow();
        var objectRotationX = new mrdoobui.UINumber().setStep(10).setNudge(0.1).setUnit('\xB0').setWidth('50px').onChange(update);
        var objectRotationY = new mrdoobui.UINumber().setStep(10).setNudge(0.1).setUnit('\xB0').setWidth('50px').onChange(update);
        var objectRotationZ = new mrdoobui.UINumber().setStep(10).setNudge(0.1).setUnit('\xB0').setWidth('50px').onChange(update);
        objectRotationRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/rotation')).setWidth('90px'));
        objectRotationRow.add(objectRotationX, objectRotationY, objectRotationZ);
        container.add(objectRotationRow);
        var objectScaleRow = new mrdoobui.UIRow();
        var objectScaleLock = new mrdoobui.UICheckbox(true).setPosition('absolute').setLeft('75px');
        var objectScaleX = new mrdoobui.UINumber(1).setPrecision(3).setRange(0.001, Infinity).setWidth('50px').onChange(updateScaleX);
        var objectScaleY = new mrdoobui.UINumber(1).setPrecision(3).setRange(0.001, Infinity).setWidth('50px').onChange(updateScaleY);
        var objectScaleZ = new mrdoobui.UINumber(1).setPrecision(3).setRange(0.001, Infinity).setWidth('50px').onChange(updateScaleZ);
        objectScaleRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/scale')).setWidth('90px'));
        objectScaleRow.add(objectScaleLock);
        objectScaleRow.add(objectScaleX, objectScaleY, objectScaleZ);
        container.add(objectScaleRow);
        var objectFovRow = new mrdoobui.UIRow();
        var objectFov = new mrdoobui.UINumber().onChange(update);
        objectFovRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/fov')).setWidth('90px'));
        objectFovRow.add(objectFov);
        container.add(objectFovRow);
        var objectLeftRow = new mrdoobui.UIRow();
        var objectLeft = new mrdoobui.UINumber().onChange(update);
        objectLeftRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/left')).setWidth('90px'));
        objectLeftRow.add(objectLeft);
        container.add(objectLeftRow);
        var objectRightRow = new mrdoobui.UIRow();
        var objectRight = new mrdoobui.UINumber().onChange(update);
        objectRightRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/right')).setWidth('90px'));
        objectRightRow.add(objectRight);
        container.add(objectRightRow);
        var objectTopRow = new mrdoobui.UIRow();
        var objectTop = new mrdoobui.UINumber().onChange(update);
        objectTopRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/top')).setWidth('90px'));
        objectTopRow.add(objectTop);
        container.add(objectTopRow);
        var objectBottomRow = new mrdoobui.UIRow();
        var objectBottom = new mrdoobui.UINumber().onChange(update);
        objectBottomRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/bottom')).setWidth('90px'));
        objectBottomRow.add(objectBottom);
        container.add(objectBottomRow);
        var objectNearRow = new mrdoobui.UIRow();
        var objectNear = new mrdoobui.UINumber().onChange(update);
        objectNearRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/near')).setWidth('90px'));
        objectNearRow.add(objectNear);
        container.add(objectNearRow);
        var objectFarRow = new mrdoobui.UIRow();
        var objectFar = new mrdoobui.UINumber().onChange(update);
        objectFarRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/far')).setWidth('90px'));
        objectFarRow.add(objectFar);
        container.add(objectFarRow);
        var objectIntensityRow = new mrdoobui.UIRow();
        var objectIntensity = new mrdoobui.UINumber().setRange(0, Infinity).onChange(update);
        objectIntensityRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/intensity')).setWidth('90px'));
        objectIntensityRow.add(objectIntensity);
        container.add(objectIntensityRow);
        var objectColorRow = new mrdoobui.UIRow();
        var objectColor = new mrdoobui.UIColor().onChange(update);
        objectColorRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/color')).setWidth('90px'));
        objectColorRow.add(objectColor);
        container.add(objectColorRow);
        var objectGroundColorRow = new mrdoobui.UIRow();
        var objectGroundColor = new mrdoobui.UIColor().onChange(update);
        objectGroundColorRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/groundcolor')).setWidth('90px'));
        objectGroundColorRow.add(objectGroundColor);
        container.add(objectGroundColorRow);
        var objectDistanceRow = new mrdoobui.UIRow();
        var objectDistance = new mrdoobui.UINumber().setRange(0, Infinity).onChange(update);
        objectDistanceRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/distance')).setWidth('90px'));
        objectDistanceRow.add(objectDistance);
        container.add(objectDistanceRow);
        var objectAngleRow = new mrdoobui.UIRow();
        var objectAngle = new mrdoobui.UINumber().setPrecision(3).setRange(0, Math.PI / 2).onChange(update);
        objectAngleRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/angle')).setWidth('90px'));
        objectAngleRow.add(objectAngle);
        container.add(objectAngleRow);
        var objectPenumbraRow = new mrdoobui.UIRow();
        var objectPenumbra = new mrdoobui.UINumber().setRange(0, 1).onChange(update);
        objectPenumbraRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/penumbra')).setWidth('90px'));
        objectPenumbraRow.add(objectPenumbra);
        container.add(objectPenumbraRow);
        var objectDecayRow = new mrdoobui.UIRow();
        var objectDecay = new mrdoobui.UINumber().setRange(0, Infinity).onChange(update);
        objectDecayRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/decay')).setWidth('90px'));
        objectDecayRow.add(objectDecay);
        container.add(objectDecayRow);
        var objectShadowRow = new mrdoobui.UIRow();
        objectShadowRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/shadow')).setWidth('90px'));
        var objectCastShadow = new ThreeUI.UIBoolean(false, strings.getKey('sidebar/object/cast')).onChange(update);
        objectShadowRow.add(objectCastShadow);
        var objectReceiveShadow = new ThreeUI.UIBoolean(false, strings.getKey('sidebar/object/receive')).onChange(update);
        objectShadowRow.add(objectReceiveShadow);
        var objectShadowRadius = new mrdoobui.UINumber(1).onChange(update);
        objectShadowRow.add(objectShadowRadius);
        container.add(objectShadowRow);
        var objectVisibleRow = new mrdoobui.UIRow();
        var objectVisible = new mrdoobui.UICheckbox().onChange(update);
        objectVisibleRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/visible')).setWidth('90px'));
        objectVisibleRow.add(objectVisible);
        container.add(objectVisibleRow);
        var objectFrustumCulledRow = new mrdoobui.UIRow();
        var objectFrustumCulled = new mrdoobui.UICheckbox().onChange(update);
        objectFrustumCulledRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/frustumcull')).setWidth('90px'));
        objectFrustumCulledRow.add(objectFrustumCulled);
        container.add(objectFrustumCulledRow);
        var objectRenderOrderRow = new mrdoobui.UIRow();
        var objectRenderOrder = new mrdoobui.UIInteger().setWidth('50px').onChange(update);
        objectRenderOrderRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/renderorder')).setWidth('90px'));
        objectRenderOrderRow.add(objectRenderOrder);
        container.add(objectRenderOrderRow);
        var objectUserDataRow = new mrdoobui.UIRow();
        var objectUserData = new mrdoobui.UITextArea().setWidth('150px').setHeight('40px').setFontSize('12px').onChange(update);
        objectUserData.onKeyUp(function () {
            try {
                JSON.parse(objectUserData.getValue());
                objectUserData.dom.classList.add('success');
                objectUserData.dom.classList.remove('fail');
            } catch (error) {
                objectUserData.dom.classList.remove('success');
                objectUserData.dom.classList.add('fail');
            }
        });
        objectUserDataRow.add(new mrdoobui.UIText(strings.getKey('sidebar/object/userdata')).setWidth('90px'));
        objectUserDataRow.add(objectUserData);
        container.add(objectUserDataRow);
        function updateScaleX() {
            var object = editor.selected;
            if (objectScaleLock.getValue() === true) {
                var scale = objectScaleX.getValue() / object.scale.x;
                objectScaleY.setValue(objectScaleY.getValue() * scale);
                objectScaleZ.setValue(objectScaleZ.getValue() * scale);
            }
            update();
        }
        function updateScaleY() {
            var object = editor.selected;
            if (objectScaleLock.getValue() === true) {
                var scale = objectScaleY.getValue() / object.scale.y;
                objectScaleX.setValue(objectScaleX.getValue() * scale);
                objectScaleZ.setValue(objectScaleZ.getValue() * scale);
            }
            update();
        }
        function updateScaleZ() {
            var object = editor.selected;
            if (objectScaleLock.getValue() === true) {
                var scale = objectScaleZ.getValue() / object.scale.z;
                objectScaleX.setValue(objectScaleX.getValue() * scale);
                objectScaleY.setValue(objectScaleY.getValue() * scale);
            }
            update();
        }
        function update() {
            var object = editor.selected;
            if (object !== null) {
                var newPosition = new THREE.Vector3(objectPositionX.getValue(), objectPositionY.getValue(), objectPositionZ.getValue());
                if (object.position.distanceTo(newPosition) >= 0.01) {
                    editor.execute(new SetPositionCommand(editor, object, newPosition));
                }
                var newRotation = new THREE.Euler(objectRotationX.getValue() * THREE.MathUtils.DEG2RAD, objectRotationY.getValue() * THREE.MathUtils.DEG2RAD, objectRotationZ.getValue() * THREE.MathUtils.DEG2RAD);
                if (object.rotation.toVector3().distanceTo(newRotation.toVector3()) >= 0.01) {
                    editor.execute(new SetRotationCommand(editor, object, newRotation));
                }
                var newScale = new THREE.Vector3(objectScaleX.getValue(), objectScaleY.getValue(), objectScaleZ.getValue());
                if (object.scale.distanceTo(newScale) >= 0.01) {
                    editor.execute(new SetScaleCommand(editor, object, newScale));
                }
                if (object.fov !== undefined && Math.abs(object.fov - objectFov.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'fov', objectFov.getValue()));
                    object.updateProjectionMatrix();
                }
                if (object.left !== undefined && Math.abs(object.left - objectLeft.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'left', objectLeft.getValue()));
                    object.updateProjectionMatrix();
                }
                if (object.right !== undefined && Math.abs(object.right - objectRight.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'right', objectRight.getValue()));
                    object.updateProjectionMatrix();
                }
                if (object.top !== undefined && Math.abs(object.top - objectTop.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'top', objectTop.getValue()));
                    object.updateProjectionMatrix();
                }
                if (object.bottom !== undefined && Math.abs(object.bottom - objectBottom.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'bottom', objectBottom.getValue()));
                    object.updateProjectionMatrix();
                }
                if (object.near !== undefined && Math.abs(object.near - objectNear.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'near', objectNear.getValue()));
                    if (object.isOrthographicCamera) {
                        object.updateProjectionMatrix();
                    }
                }
                if (object.far !== undefined && Math.abs(object.far - objectFar.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'far', objectFar.getValue()));
                    if (object.isOrthographicCamera) {
                        object.updateProjectionMatrix();
                    }
                }
                if (object.intensity !== undefined && Math.abs(object.intensity - objectIntensity.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'intensity', objectIntensity.getValue()));
                }
                if (object.color !== undefined && object.color.getHex() !== objectColor.getHexValue()) {
                    editor.execute(new SetColorCommand(editor, object, 'color', objectColor.getHexValue()));
                }
                if (object.groundColor !== undefined && object.groundColor.getHex() !== objectGroundColor.getHexValue()) {
                    editor.execute(new SetColorCommand(editor, object, 'groundColor', objectGroundColor.getHexValue()));
                }
                if (object.distance !== undefined && Math.abs(object.distance - objectDistance.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'distance', objectDistance.getValue()));
                }
                if (object.angle !== undefined && Math.abs(object.angle - objectAngle.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'angle', objectAngle.getValue()));
                }
                if (object.penumbra !== undefined && Math.abs(object.penumbra - objectPenumbra.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'penumbra', objectPenumbra.getValue()));
                }
                if (object.decay !== undefined && Math.abs(object.decay - objectDecay.getValue()) >= 0.01) {
                    editor.execute(new SetValueCommand(editor, object, 'decay', objectDecay.getValue()));
                }
                if (object.visible !== objectVisible.getValue()) {
                    editor.execute(new SetValueCommand(editor, object, 'visible', objectVisible.getValue()));
                }
                if (object.frustumCulled !== objectFrustumCulled.getValue()) {
                    editor.execute(new SetValueCommand(editor, object, 'frustumCulled', objectFrustumCulled.getValue()));
                }
                if (object.renderOrder !== objectRenderOrder.getValue()) {
                    editor.execute(new SetValueCommand(editor, object, 'renderOrder', objectRenderOrder.getValue()));
                }
                if (object.castShadow !== undefined && object.castShadow !== objectCastShadow.getValue()) {
                    editor.execute(new SetValueCommand(editor, object, 'castShadow', objectCastShadow.getValue()));
                }
                if (object.receiveShadow !== undefined && object.receiveShadow !== objectReceiveShadow.getValue()) {
                    if (object.material !== undefined)
                        object.material.needsUpdate = true;
                    editor.execute(new SetValueCommand(editor, object, 'receiveShadow', objectReceiveShadow.getValue()));
                }
                if (object.shadow !== undefined) {
                    if (object.shadow.radius !== objectShadowRadius.getValue()) {
                        editor.execute(new SetValueCommand(editor, object.shadow, 'radius', objectShadowRadius.getValue()));
                    }
                }
                try {
                    var userData = JSON.parse(objectUserData.getValue());
                    if (JSON.stringify(object.userData) != JSON.stringify(userData)) {
                        editor.execute(new SetValueCommand(editor, object, 'userData', userData));
                    }
                } catch (exception) {
                    console.warn(exception);
                }
            }
        }
        function updateRows(object) {
            var properties = {
                'fov': objectFovRow,
                'left': objectLeftRow,
                'right': objectRightRow,
                'top': objectTopRow,
                'bottom': objectBottomRow,
                'near': objectNearRow,
                'far': objectFarRow,
                'intensity': objectIntensityRow,
                'color': objectColorRow,
                'groundColor': objectGroundColorRow,
                'distance': objectDistanceRow,
                'angle': objectAngleRow,
                'penumbra': objectPenumbraRow,
                'decay': objectDecayRow,
                'castShadow': objectShadowRow,
                'receiveShadow': objectReceiveShadow,
                'shadow': objectShadowRadius
            };
            for (var property in properties) {
                properties[property].setDisplay(object[property] !== undefined ? '' : 'none');
            }
        }
        function updateTransformRows(object) {
            if (object.isLight || object.isObject3D && object.userData.targetInverse) {
                objectRotationRow.setDisplay('none');
                objectScaleRow.setDisplay('none');
            } else {
                objectRotationRow.setDisplay('');
                objectScaleRow.setDisplay('');
            }
        }
        signals.objectSelected.add(function (object) {
            if (object !== null) {
                container.setDisplay('block');
                updateRows(object);
                updateUI(object);
            } else {
                container.setDisplay('none');
            }
        });
        signals.objectChanged.add(function (object) {
            if (object !== editor.selected)
                return;
            updateUI(object);
        });
        signals.refreshSidebarObject3D.add(function (object) {
            if (object !== editor.selected)
                return;
            updateUI(object);
        });
        function updateUI(object) {
            objectType.setValue(object.type);
            objectUUID.setValue(object.uuid);
            objectName.setValue(object.name);
            objectPositionX.setValue(object.position.x);
            objectPositionY.setValue(object.position.y);
            objectPositionZ.setValue(object.position.z);
            objectRotationX.setValue(object.rotation.x * THREE.MathUtils.RAD2DEG);
            objectRotationY.setValue(object.rotation.y * THREE.MathUtils.RAD2DEG);
            objectRotationZ.setValue(object.rotation.z * THREE.MathUtils.RAD2DEG);
            objectScaleX.setValue(object.scale.x);
            objectScaleY.setValue(object.scale.y);
            objectScaleZ.setValue(object.scale.z);
            if (object.fov !== undefined) {
                objectFov.setValue(object.fov);
            }
            if (object.left !== undefined) {
                objectLeft.setValue(object.left);
            }
            if (object.right !== undefined) {
                objectRight.setValue(object.right);
            }
            if (object.top !== undefined) {
                objectTop.setValue(object.top);
            }
            if (object.bottom !== undefined) {
                objectBottom.setValue(object.bottom);
            }
            if (object.near !== undefined) {
                objectNear.setValue(object.near);
            }
            if (object.far !== undefined) {
                objectFar.setValue(object.far);
            }
            if (object.intensity !== undefined) {
                objectIntensity.setValue(object.intensity);
            }
            if (object.color !== undefined) {
                objectColor.setHexValue(object.color.getHexString());
            }
            if (object.groundColor !== undefined) {
                objectGroundColor.setHexValue(object.groundColor.getHexString());
            }
            if (object.distance !== undefined) {
                objectDistance.setValue(object.distance);
            }
            if (object.angle !== undefined) {
                objectAngle.setValue(object.angle);
            }
            if (object.penumbra !== undefined) {
                objectPenumbra.setValue(object.penumbra);
            }
            if (object.decay !== undefined) {
                objectDecay.setValue(object.decay);
            }
            if (object.castShadow !== undefined) {
                objectCastShadow.setValue(object.castShadow);
            }
            if (object.receiveShadow !== undefined) {
                objectReceiveShadow.setValue(object.receiveShadow);
            }
            if (object.shadow !== undefined) {
                objectShadowRadius.setValue(object.shadow.radius);
            }
            objectVisible.setValue(object.visible);
            objectFrustumCulled.setValue(object.frustumCulled);
            objectRenderOrder.setValue(object.renderOrder);
            try {
                objectUserData.setValue(JSON.stringify(object.userData, null, '  '));
            } catch (error) {
                console.log(error);
            }
            objectUserData.setBorderColor('transparent');
            objectUserData.setBackgroundColor('');
            updateTransformRows(object);
        }
        return container;
    };
    return SidebarObject;
});