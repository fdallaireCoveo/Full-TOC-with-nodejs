var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Coveo;
(function (Coveo) {
    (function (Utils) {
        var _window = window;

        $(window).on('mousemove', function (e) {
            return Draggable.mousemove(e);
        });
        $(window).on('mouseup', function (e) {
            return Draggable.mouseup(e);
        });
        $(window.document).data('offset', { top: 0, left: 0 });

        var Delay = (function () {
            function Delay() {
            }
            Delay.call = function (callback, delay) {
                Delay.time = new Date().getTime() + delay;
                Delay.callback = callback;
                Delay.timeout = setTimeout(Delay.run, delay);
            };
            Delay.run = function () {
                if (Delay.callback != null && Delay.time != null && Delay.time <= new Date().getTime()) {
                    clearTimeout(this.timeout);
                    Delay.callback();
                    Delay.callback = null;
                    Delay.time = null;
                    return true;
                } else {
                    return false;
                }
            };
            Delay.cancel = function () {
                clearTimeout(this.timeout);
                Delay.callback = null;
                Delay.time != null;
            };
            return Delay;
        })();

        var Draggable = (function () {
            function Draggable(element) {
                var _this = this;
                this.element = element;
                this.element.addClass('coveo-draggable').mousedown(function (e) {
                    Delay.call(function () {
                        return _this.mousedown(e);
                    }, 300);
                });

                this.placeholder = $('<div class="coveo-placeholder"/>');
            }
            Draggable.mousemove = function (position) {
                if (!Delay.run() && Draggable.current != null) {
                    Draggable.current.mousemove(position);
                }
            };

            Draggable.mouseup = function (position) {
                Delay.cancel();
                if (Draggable.current != null) {
                    Draggable.current.mouseup(position);
                }
            };

            Draggable.prototype.createDragElement = function () {
                this.element;
                var width = this.element.outerWidth();
                var height = this.element.outerHeight();
                this.element.outerWidth(width).outerHeight(height).addClass('coveo-drag');
                return this.element;
            };

            Draggable.prototype.removeDragElement = function () {
                this.element.css({ width: '', height: '', top: '', position: '', left: '', 'zIndex': '' }).removeClass('coveo-drag');
            };

            Draggable.prototype.dropElement = function () {
                return this.element;
            };

            Draggable.prototype.mousedown = function (position) {
                Draggable.current = this;
                $('body').addClass('coveo-dragging');
                $(_window.document).find('iframe').each(function (i, e) {
                    $(e.contentDocument.body).addClass('coveo-dragging');
                });

                Draggable.mouseOffset = this.element.offset();
                Draggable.mouseOffset.left -= (position.clientX + this.element.get(0).ownerDocument.body.scrollLeft);
                Draggable.mouseOffset.top -= (position.clientY + this.element.get(0).ownerDocument.body.scrollTop);

                this.dragElement = this.createDragElement();
            };

            Draggable.prototype.mousemove = function (position) {
                if (Dropable.current != null) {
                    Dropable.current.element.removeClass('coveo-drop');
                }

                var dragPosition = Draggable.centerOfDrag(position);

                this.dragElement.css('display', 'none');
                var dropable = Dropable.current = Dropable.find(this.element, dragPosition);
                this.dragElement.css('display', '');
                if (dropable != null) {
                    var element = dropable.elementAfter(dragPosition);
                    if (element != null) {
                        this.placeholder.insertBefore(element);
                    } else {
                        this.placeholder.appendTo(dropable.element);
                    }
                    dropable.element.addClass('coveo-drop');
                    this.placeholder.css({ width: '', height: '' });
                    this.placeholder.outerHeight(this.dragElement.outerHeight());
                    if (!dropable.vertical) {
                        this.placeholder.outerWidth(this.dragElement.outerWidth());
                    }
                } else {
                    this.placeholder.detach();
                }
                this.setDragElementPosition(position);
            };

            Draggable.prototype.mouseup = function (position) {
                if (Dropable.current != null) {
                    Dropable.current.element.removeClass('coveo-drop');
                }

                var dragPosition = Draggable.centerOfDrag(position);

                $('body').removeClass('coveo-dragging');
                $(_window.document).find('iframe').each(function (i, e) {
                    $(e.contentDocument.body).removeClass('coveo-dragging');
                });

                this.dragElement.removeClass('coveo-drag');
                this.dragElement.css('display', 'none');
                var dropable = Dropable.find(this.element, dragPosition);
                this.dragElement.css('display', '');
                if (dropable != null) {
                    var element = dropable.elementAfter(dragPosition);
                    var dropElement = this.dropElement();
                    if (element != null) {
                        dropElement.insertBefore(element);
                    } else {
                        dropElement.appendTo(dropable.element);
                    }
                    dropable.element.trigger('childChange', this);
                }
                this.placeholder.detach();
                this.removeDragElement();
                Draggable.current = null;
            };

            Draggable.prototype.setDragElementPosition = function (position) {
                if (this.dragElement.parent().length == 0) {
                    this.dragElement.insertAfter(this.element);
                }
                var cursorDocumentOffset = $(this.dragElement.get(0).ownerDocument).data('offset');
                var relativePosition = relativePosition = {
                    clientX: position.clientX - cursorDocumentOffset.left,
                    clientY: position.clientY - cursorDocumentOffset.top
                };
                this.dragElement.css({
                    position: 'fixed',
                    top: relativePosition.clientY + Draggable.mouseOffset.top,
                    left: relativePosition.clientX + Draggable.mouseOffset.left,
                    zIndex: 100000
                });
            };

            Draggable.centerOfDrag = function (position) {
                return {
                    clientX: position.clientX + Draggable.mouseOffset.left + Draggable.current.dragElement.outerWidth() / 2,
                    clientY: position.clientY + Draggable.mouseOffset.top + Draggable.current.dragElement.outerHeight() / 2
                };
            };
            return Draggable;
        })();
        Utils.Draggable = Draggable;

        var Clonable = (function (_super) {
            __extends(Clonable, _super);
            function Clonable() {
                _super.apply(this, arguments);
            }
            Clonable.prototype.createDragElement = function () {
                this.clone = this.element.clone().addClass('coveo-drag');
                Draggable.mouseOffset = {
                    left: this.element.outerWidth() / -2,
                    top: this.element.outerHeight() / -2
                };
                return this.clone;
            };

            Clonable.prototype.removeDragElement = function () {
                this.clone.detach();
                this.clone = null;
            };

            Clonable.prototype.dropElement = function () {
                return this.element.clone();
            };
            return Clonable;
        })(Draggable);
        Utils.Clonable = Clonable;

        var Dropable = (function () {
            function Dropable(element, accept, vertical) {
                if (typeof accept === "undefined") { accept = function (element) {
                    return true;
                }; }
                if (typeof vertical === "undefined") { vertical = true; }
                this.element = element;
                this.accept = accept;
                this.vertical = vertical;
                this.element.addClass('coveo-dropable').data('CoveoDropable', this);
            }
            Dropable.prototype.elementAfter = function (position) {
                var cursorDocumentOffset = $(this.element.get(0).ownerDocument).data('offset');
                var relativePosition = relativePosition = {
                    clientX: position.clientX - cursorDocumentOffset.left,
                    clientY: position.clientY - cursorDocumentOffset.top
                };
                var positionBefore;
                if (this.vertical) {
                    var y = relativePosition.clientY + this.element.get(0).ownerDocument.body.scrollTop;
                    var children = $(this.element).children();
                    for (var i = 0; i < children.length; i++) {
                        if (children[i] != Draggable.current.element.get(0)) {
                            var child = $(children[i]);
                            if (child.is(':visible')) {
                                var offset = child.offset();
                                if (offset.top + child.height() / 2 > y) {
                                    positionBefore = child;
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    var x = relativePosition.clientX + this.element.get(0).ownerDocument.body.scrollLeft;
                    var children = $(this.element).children();
                    for (var i = 0; i < children.length; i++) {
                        if (children[i] != Draggable.current.element.get(0)) {
                            var child = $(children[i]);
                            if (child.is(':visible')) {
                                var offset = child.offset();
                                if (offset.left + child.width() / 2 > x) {
                                    positionBefore = child;
                                    break;
                                }
                            }
                        }
                    }
                }
                return positionBefore;
            };

            Dropable.elementFromPoint = function (position, _document) {
                if (typeof _document === "undefined") { _document = _window.document; }
                var element = _document.elementFromPoint(position.clientX, position.clientY);
                if (element != null) {
                    if (element.tagName == 'IFRAME') {
                        var offset = $(element).offset();
                        return Dropable.elementFromPoint({ clientX: position.clientX - offset.left, clientY: position.clientY - offset.top }, element.contentDocument);
                    }
                }
                return element;
            };

            Dropable.find = function (element, position, _document) {
                if (typeof _document === "undefined") { _document = _window.document; }
                var elementFromPoint = Dropable.elementFromPoint(position);
                if (elementFromPoint != null) {
                    var over = $(elementFromPoint);
                    while (!over.is('html')) {
                        var dropable = over.data('CoveoDropable');
                        if (dropable != null && dropable.accept(element)) {
                            return dropable;
                            break;
                        }
                        over = over.parent();
                    }
                }
                return null;
            };
            return Dropable;
        })();
        Utils.Dropable = Dropable;
    })(Coveo.Utils || (Coveo.Utils = {}));
    var Utils = Coveo.Utils;
})(Coveo || (Coveo = {}));
