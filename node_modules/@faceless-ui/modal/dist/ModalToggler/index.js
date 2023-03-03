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
exports.togglerBaseClass = void 0;
var react_1 = __importDefault(require("react"));
var useModal_1 = __importDefault(require("../useModal"));
exports.togglerBaseClass = 'modal-toggler';
var ModalToggler = function (props) {
    var slug = props.slug, _a = props.htmlElement, Tag = _a === void 0 ? 'button' : _a, children = props.children, onClick = props.onClick, className = props.className, rest = __rest(props, ["slug", "htmlElement", "children", "onClick", "className"]);
    var _b = (0, useModal_1.default)(), modalState = _b.modalState, toggleModal = _b.toggleModal, classPrefix = _b.classPrefix;
    var baseClass = classPrefix ? "".concat(classPrefix, "__").concat(exports.togglerBaseClass) : exports.togglerBaseClass;
    var isOpen = modalState[slug] && modalState[slug].isOpen;
    return (react_1.default.createElement(Tag, __assign({}, __assign(__assign({ className: [
            baseClass,
            "".concat(baseClass, "--slug-").concat(slug),
            isOpen && "".concat(baseClass, "--slug-").concat(slug, "--is-open"),
            className,
        ].filter(Boolean).join(' '), role: 'button', 'aria-expanded': isOpen ? 'true' : 'false', 'aria-controls': slug, 'aria-label': "".concat(!isOpen ? 'Open' : 'Close', " modal ").concat(slug) }, rest), { onClick: function (e) {
            toggleModal(slug);
            if (typeof onClick === 'function')
                onClick(e);
        } })), children && children));
};
exports.default = ModalToggler;
//# sourceMappingURL=index.js.map