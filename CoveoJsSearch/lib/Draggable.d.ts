declare module Coveo.Utils {
    interface MousePosition {
        clientX: number;
        clientY: number;
    }
    class Draggable {
        public element: JQuery;
        static current: Draggable;
        static mouseOffset: {
            left: number;
            top: number;
        };
        private static delay;
        static mousemove(position: MousePosition): void;
        static mouseup(position: MousePosition): void;
        private placeholder;
        private dragElement;
        constructor(element: JQuery);
        public createDragElement(): JQuery;
        public removeDragElement(): void;
        public dropElement(): JQuery;
        private mousedown(position);
        private mousemove(position);
        private mouseup(position);
        private setDragElementPosition(position);
        static centerOfDrag(position: MousePosition): MousePosition;
    }
    class Clonable extends Draggable {
        private clone;
        public createDragElement(): JQuery;
        public removeDragElement(): void;
        public dropElement(): JQuery;
    }
    class Dropable {
        public element: JQuery;
        public accept: (element: JQuery) => boolean;
        public vertical: boolean;
        static current: Dropable;
        constructor(element: JQuery, accept?: (element: JQuery) => boolean, vertical?: boolean);
        public elementAfter(position: MousePosition): any;
        static elementFromPoint(position: MousePosition, _document?: Document): Element;
        static find(element: JQuery, position: MousePosition, _document?: Document): Dropable;
    }
}
