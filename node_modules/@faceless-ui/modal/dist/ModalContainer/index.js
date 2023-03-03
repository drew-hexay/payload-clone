"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerBaseClass = void 0;
var react_1 = __importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var useModal_1 = __importDefault(require("../useModal"));
var generateTransitionClasses_1 = __importDefault(require("../ModalProvider/generateTransitionClasses"));
exports.containerBaseClass = 'modal-container';
var ModalContainer = function (props) {
    var _a = (0, useModal_1.default)(), oneModalIsOpen = _a.oneModalIsOpen, classPrefix = _a.classPrefix, transTime = _a.transTime, setContainerRef = _a.setContainerRef, containerRef = _a.containerRef, closeAllModals = _a.closeAllModals, closeOnBlur = _a.closeOnBlur;
    var className = props.className, _b = props.htmlElement, Tag = _b === void 0 ? 'div' : _b, children = props.children, onClick = props.onClick, rest = __rest(props, ["className", "htmlElement", "children", "onClick"]);
    var baseClass = classPrefix ? "".concat(classPrefix, "__").concat(exports.containerBaseClass) : exports.containerBaseClass;
    var mergedClasses = [
        baseClass,
        className,
    ].filter(Boolean).join(' ');
    var mergedAttributes = __assign(__assign({}, rest), { onClick: function (e) {
            if (closeOnBlur)
                closeAllModals();
            if (typeof onClick === 'function')
                onClick(e);
        } });
    return (react_1.default.createElement(react_transition_group_1.CSSTransition, { nodeRef: containerRef, in: oneModalIsOpen, timeout: transTime, classNames: (0, generateTransitionClasses_1.default)(baseClass), appear: true },
        react_1.default.createElement(Tag, __assign({}, __assign({ className: mergedClasses, ref: setContainerRef }, mergedAttributes)), children && children)));
};
exports.default = ModalContainer;
//# sourceMappingURL=index.js.map