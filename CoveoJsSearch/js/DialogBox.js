var Coveo;
(function (Coveo) {
    /// <reference path="ModalBox.ts"/>
    (function (DialogBox) {
        function setData(content, data) {
            for (var name in data) {
                var value = data[name];
                var dataInput = content.find('[name="' + name + '"]');
                if (dataInput.is('[type="checkbox"]')) {
                    dataInput.attr('checked', value == 'true' ? 1 : undefined);
                } else if (dataInput.is('select') && dataInput.children('[value="' + value + '"]').length == 0) {
                    dataInput.append('<option value="' + value + '">' + value + '</option>');
                    dataInput.val(value);
                } else {
                    dataInput.val(value);
                }
            }
        }

        function getData(content) {
            var data = {};
            var dataInputs = content.find('.coveo-data');
            for (var i = 0; i < dataInputs.length; i++) {
                var dataInput = $(dataInputs[i]);
                var name = dataInput.attr('name');
                if (name != '') {
                    if (dataInput.is('[type="checkbox"]')) {
                        data[dataInput.attr('name')] = dataInput.is(':checked') ? 'true' : 'false';
                    } else {
                        data[dataInput.attr('name')] = dataInput.val();
                    }
                }
            }
            return data;
        }

        function getMissingInputs(content, textInputNames) {
            var missingInputs = [];
            for (var i = 0; i < textInputNames.length; i++) {
                var input = content.find('[name=' + textInputNames[i] + ']');
                if (input.length > 0) {
                    if (/^\s*$/.test(input.val())) {
                        var inputName = input.attr('name');
                        try  {
                            inputName = content.find('[for=' + input.attr('id') + ']').find('span').first().text();
                        } finally {
                            missingInputs.push(inputName);
                        }
                    }
                }
            }
            return missingInputs;
        }

        function buildMessage(message) {
            return $('<div />').addClass('coveo-message').text(message);
        }
        DialogBox.buildMessage = buildMessage;

        function buildErrorMessage(message) {
            return buildMessage(message).addClass('coveo-error');
        }
        DialogBox.buildErrorMessage = buildErrorMessage;

        function buildInfoMessage(message) {
            return buildMessage(message).addClass('coveo-info');
        }
        DialogBox.buildInfoMessage = buildInfoMessage;

        function buildWarningMessage(message) {
            return buildMessage(message).addClass('coveo-warning');
        }
        DialogBox.buildWarningMessage = buildWarningMessage;

        function removeMessage(content) {
            content.find('.coveo-message').detach();
        }

        function alert(title, text) {
            return Coveo.ModalBox.open($('<div />').append($('<div />').text(text)), {
                buttons: 1 /* OK */,
                validation: function (button) {
                    return true;
                },
                title: title
            });
        }
        DialogBox.alert = alert;

        function confirm(title, text, callback) {
            return Coveo.ModalBox.open($('<div />').append($('<div />').text(text)), {
                buttons: 4 /* YES */ | 8 /* NO */,
                validation: function (button) {
                    callback(button == 4 /* YES */);
                    return true;
                },
                title: title
            });
        }
        DialogBox.confirm = confirm;

        function prompt(title, text, callback, defaultValue) {
            if (typeof defaultValue === "undefined") { defaultValue = ''; }
            var body = $('<div />');
            var langInput = buildInputText('value', text).appendTo(body);

            return open($('<div />').append($('<div />').text(text)), {
                buttons: 1 /* OK */ | 16 /* CANCEL */,
                validation: function (button, data) {
                    if (button == 1 /* OK */) {
                        return callback(data.value);
                    } else {
                        return callback(null);
                    }
                },
                title: title
            });
        }
        DialogBox.prompt = prompt;

        function open(content, options) {
            if (options.data != null) {
                setData(content, options.data);
            }
            var subOptions = $.extend({}, options, {
                validation: function (button) {
                    if (options.requiredData != null && options.requiredData.length > 0 && button != 16 /* CANCEL */) {
                        removeMessage(content);
                        var missingInputs = getMissingInputs(content, options.requiredData);
                        if (missingInputs.length != 0) {
                            buildErrorMessage('Missing required input(s) : ' + missingInputs.join(', ')).appendTo(content);
                            return false;
                        }
                    }
                    return options.validation(button, getData(content));
                }
            });

            var modalBox = Coveo.ModalBox.open(content, subOptions);
            return modalBox;
        }
        DialogBox.open = open;

        function nameToId(name) {
            return 'coveo-dialogBox-' + name;
        }

        function buildLabel(name, label, helpMessage) {
            var labelDom = $('<label />');
            labelDom.attr('for', nameToId(name));
            labelDom.append($('<span />').text(label));
            if (helpMessage != null) {
                labelDom.append(buildHelper(helpMessage));
            }
            return labelDom;
        }

        function buildHelper(helpMessage) {
            return $('<div class="coveo-help" />').attr('title', helpMessage);
        }

        function buildHiddenInput(name) {
            return $('<input />').attr({
                name: name,
                'class': 'coveo-data',
                type: 'hidden'
            });
        }
        DialogBox.buildHiddenInput = buildHiddenInput;

        function buildInputText(name, label, helpMessage) {
            var dom = $('<div />');
            if (label != null) {
                dom.append(buildLabel(name, label, helpMessage));
            }
            dom.append($('<input />').attr({
                id: nameToId(name),
                name: name,
                'class': 'coveo-data',
                type: 'text'
            }));
            return dom;
        }
        DialogBox.buildInputText = buildInputText;

        function buildTextarea(name, label, helpMessage) {
            var dom = $('<div />');
            if (label != null) {
                dom.append(buildLabel(name, label, helpMessage));
            }
            dom.append($('<textarea />').attr({
                id: nameToId(name),
                name: name,
                'class': 'coveo-data'
            }));
            return dom;
        }
        DialogBox.buildTextarea = buildTextarea;
        function buildSelect(name, label, options, helpMessage, sort, tooltipValue) {
            if (typeof helpMessage === "undefined") { helpMessage = null; }
            if (typeof sort === "undefined") { sort = false; }
            if (typeof tooltipValue === "undefined") { tooltipValue = false; }
            var dom = $('<div />');
            if (label != null) {
                dom.append(buildLabel(name, label, helpMessage));
            }
            var select = $('<select/>').attr({
                id: nameToId(name),
                name: name,
                'class': 'coveo-data'
            }).appendTo(dom);
            var optionDoms = [];
            for (var value in options) {
                var option = $('<option />').attr('value', value).text(options[value]);
                if (tooltipValue) {
                    option.attr('title', value);
                }
                optionDoms.push(option);
            }
            if (sort) {
                optionDoms.sort(function (a, b) {
                    if (a.attr('value') == '')
                        return -1;
                    if (b.attr('value') == '')
                        return 1;
                    var vA = a.text();
                    var vB = b.text();
                    return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
                });
            }
            select.append(optionDoms);
            return dom;
        }
        DialogBox.buildSelect = buildSelect;
        function buildCheckbox(name, label, helpMessage, float) {
            if (typeof float === "undefined") { float = false; }
            var dom = $('<div class="checkbox" />');
            var labelDom = buildLabel(name, label, helpMessage).appendTo(dom);
            labelDom.prepend($('<input />').attr({
                id: nameToId(name),
                name: name,
                'class': 'coveo-data',
                'type': "checkbox"
            }));
            if (float) {
                dom.addClass('coveo-float');
            }
            return dom;
        }
        DialogBox.buildCheckbox = buildCheckbox;
    })(Coveo.DialogBox || (Coveo.DialogBox = {}));
    var DialogBox = Coveo.DialogBox;
})(Coveo || (Coveo = {}));
