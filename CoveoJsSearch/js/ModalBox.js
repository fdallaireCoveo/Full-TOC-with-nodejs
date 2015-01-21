var Coveo;
(function (Coveo) {
    /// <reference path="../lib/jquery.d.ts"/>
    (function (ModalBox) {
        (function (BUTTON) {
            BUTTON[BUTTON["OK"] = 1] = "OK";
            BUTTON[BUTTON["APPLY"] = 2] = "APPLY";
            BUTTON[BUTTON["YES"] = 4] = "YES";
            BUTTON[BUTTON["NO"] = 8] = "NO";
            BUTTON[BUTTON["CANCEL"] = 16] = "CANCEL";
        })(ModalBox.BUTTON || (ModalBox.BUTTON = {}));
        var BUTTON = ModalBox.BUTTON;

        var closeFunctions = [];

        function open(content, options) {
            if (typeof options === "undefined") { options = {}; }
            var modalBox = $('<div class="coveo-modalBox" />').appendTo(document.body);
            if (options.fullscreen === true) {
                modalBox.addClass('coveo-fullscreen');
            }
            var overlay = $('<div class="coveo-overlay" />').appendTo(modalBox);
            var wrapper = $('<div class="coveo-wrapper" />').appendTo(modalBox);
            if (options.title != null) {
                var title = $('<div class="coveo-title" />').html(options.title).appendTo(wrapper);
                if (options.titleClose === true) {
                    title.click(function () {
                        return close();
                    });
                }
            }

            if (content.length > 1) {
                content = $('<div />').append(content);
            }

            wrapper.append(content.addClass('coveo-body'));

            var close = function (button, forceClose) {
                if (typeof button === "undefined") { button = 0; }
                if (typeof forceClose === "undefined") { forceClose = false; }
                var valid = options.validation == null || options.validation(button);
                if (valid !== false || forceClose) {
                    modalBox.detach();
                    var index = $.inArray(close, closeFunctions);
                    if (index >= 0) {
                        closeFunctions.splice(index, 1);
                    }
                    return true;
                }
                return false;
            };

            var buttonsContainer;
            if (options.buttons != null) {
                var buttonClick = function (button) {
                    return function () {
                        return close(button);
                    };
                };
                buttonsContainer = $('<div class="coveo-buttons" />').appendTo(wrapper);

                if (options.buttons & 1 /* OK */) {
                    $('<div class="coveo-button">Ok</div>').click(buttonClick(1 /* OK */)).appendTo(buttonsContainer);
                }
                if (options.buttons & 2 /* APPLY */) {
                    $('<div class="coveo-button">Apply</div>').click(buttonClick(2 /* APPLY */)).appendTo(buttonsContainer);
                }
                if (options.buttons & 4 /* YES */) {
                    $('<div class="coveo-button">Yes</div>').click(buttonClick(4 /* YES */)).appendTo(buttonsContainer);
                }
                if (options.buttons & 8 /* NO */) {
                    $('<div class="coveo-button">No</div>').click(buttonClick(8 /* NO */)).appendTo(buttonsContainer);
                }
                if (options.buttons & 16 /* CANCEL */) {
                    $('<div class="coveo-button">Cancel</div>').click(buttonClick(16 /* CANCEL */)).appendTo(buttonsContainer);
                }
            }
            closeFunctions.push(close);

            if (options.overlayClose === true) {
                overlay.click(function () {
                    return close();
                });
            }
            if (options.className != null) {
                modalBox.addClass(options.className);
            }

            return {
                modalBox: modalBox,
                overlay: overlay,
                wrapper: wrapper,
                buttons: buttonsContainer,
                content: content,
                close: close
            };
        }
        ModalBox.open = open;

        function close(forceClose) {
            if (typeof forceClose === "undefined") { forceClose = false; }
            var i = 0;
            while (closeFunctions.length > i) {
                var closed = closeFunctions[i](0, forceClose);
                if (!closed) {
                    i++;
                }
            }
        }
        ModalBox.close = close;
    })(Coveo.ModalBox || (Coveo.ModalBox = {}));
    var ModalBox = Coveo.ModalBox;
})(Coveo || (Coveo = {}));
