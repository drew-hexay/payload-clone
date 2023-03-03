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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.itemBaseClass = void 0;
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_transition_group_1 = require("react-transition-group");
var useModal_1 = __importDefault(require("../useModal"));
var generateTransitionClasses_1 = __importDefault(require("../ModalProvider/generateTransitionClasses"));
var focusTrap = __importStar(require("focus-trap")); // ESM
exports.itemBaseClass = 'modal-item';
var asModal = function (ModalComponent, slugFromArg) {
    var ModalWrap = function (props) {
        var modal = (0, useModal_1.default)();
        var modalRef = (0, react_1.useRef)(null);
        var _a = (0, react_1.useState)(false), layTrap = _a[0], setLayTrap = _a[1];
        var trapHasBeenLayed = (0, react_1.useRef)(false);
        var _b = (0, react_1.useState)(null), trap = _b[0], setTrap = _b[1];
        var modalState = modal.modalState, classPrefixFromContext = modal.classPrefix, containerRef = modal.containerRef, transTime = modal.transTime, setCloseOnBlur = modal.setCloseOnBlur, setBodyScrollLock = modal.setBodyScrollLock, openModal = modal.openModal;
        var className = props.className, _c = props.htmlElement, Tag = _c === void 0 ? 'dialog' : _c, _d = props.slug, slugFromProp = _d === void 0 ? '' : _d, _e = props.closeOnBlur, closeOnBlur = _e === void 0 ? true : _e, _f = props.lockBodyScroll, lockBodyScroll = _f === void 0 ? true : _f, 
        // autoFocus: true,
        // trapFocus: true,
        // returnFocus: true,
        classPrefixFromProps = props.classPrefix, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered, onExit = props.onExit, onExiting = props.onExiting, onExited = props.onExited, openOnInit = props.openOnInit, _g = props.trapFocus, trapFocus = _g === void 0 ? true : _g, _h = props.focusTrapOptions, focusTrapOptions = _h === void 0 ? {} : _h, rest = __rest(props, ["className", "htmlElement", "slug", "closeOnBlur", "lockBodyScroll", "classPrefix", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "openOnInit", "trapFocus", "focusTrapOptions"]);
        var classPrefixToUse = classPrefixFromProps || classPrefixFromContext;
        var slug = slugFromArg || slugFromProp;
        var isOpen = modalState[slug] && modalState[slug].isOpen;
        (0, react_1.useEffect)(function () {
            if (trapFocus) {
                var currentModal = modalRef.current;
                if (trapHasBeenLayed.current === false && currentModal) {
                    var newTrap = focusTrap.createFocusTrap(currentModal, __assign(__assign({}, focusTrapOptions), { fallbackFocus: (focusTrapOptions === null || focusTrapOptions === void 0 ? void 0 : focusTrapOptions.fallbackFocus) || currentModal, allowOutsideClick: typeof focusTrapOptions.allowOutsideClick !== 'undefined' ? focusTrapOptions.allowOutsideClick : true }));
                    setTrap(newTrap);
                    trapHasBeenLayed.current = true;
                }
            }
        }, [
            trapFocus,
            layTrap,
            focusTrapOptions
        ]);
        (0, react_1.useEffect)(function () {
            setLayTrap(true);
        }, []);
        (0, react_1.useEffect)(function () {
            if (trap) {
                if (isOpen)
                    trap.activate();
                else
                    trap.deactivate();
            }
            return function () {
                if (trap)
                    trap.deactivate();
            };
        }, [
            isOpen,
            trap
        ]);
        (0, react_1.useEffect)(function () {
            if (isOpen)
                setCloseOnBlur(closeOnBlur);
        }, [
            isOpen,
            closeOnBlur,
            setCloseOnBlur,
        ]);
        (0, react_1.useEffect)(function () {
            var currentModal = modalRef.current;
            if (currentModal) {
                if (isOpen && lockBodyScroll) {
                    setBodyScrollLock(true, currentModal);
                }
                else {
                    setBodyScrollLock(false, currentModal);
                }
            }
            return function () {
                if (currentModal) {
                    setBodyScrollLock(false, currentModal);
                }
            };
        }, [
            isOpen,
            lockBodyScroll,
            setBodyScrollLock,
        ]);
        var _j = (0, react_1.useState)(isOpen), timedOpen = _j[0], setTimedOpen = _j[1];
        (0, react_1.useEffect)(function () {
            if (!isOpen)
                setTimeout(function () { return setTimedOpen(false); }, transTime);
            else
                setTimedOpen(isOpen);
        }, [
            isOpen,
            transTime,
        ]);
        (0, react_1.useEffect)(function () {
            if (openOnInit) {
                openModal(slug);
            }
        }, [
            slug,
            openOnInit,
            openModal
        ]);
        if (containerRef.current) {
            var baseClass = classPrefixToUse ? "".concat(classPrefixToUse, "__").concat(exports.itemBaseClass) : exports.itemBaseClass;
            var mergedClasses = [
                baseClass,
                "".concat(baseClass, "--slug-").concat(slug),
                className,
            ].filter(Boolean).join(' ');
            var mergedAttributes = __assign({ role: Tag !== 'dialog' ? 'dialog' : undefined, open: Tag === 'dialog' ? timedOpen || isOpen : undefined, 'aria-modal': true, 'aria-label': !rest['aria-labelledby'] ? slug : undefined }, rest);
            return react_dom_1.default.createPortal(react_1.default.createElement(react_transition_group_1.CSSTransition, __assign({}, {
                nodeRef: modalRef,
                timeout: transTime,
                in: isOpen,
                classNames: (0, generateTransitionClasses_1.default)(baseClass),
                appear: true,
                onEnter: onEnter,
                onEntering: onEntering,
                onEntered: onEntered,
                onExit: onExit,
                onExiting: onExiting,
                onExited: onExited,
            }),
                react_1.default.createElement(Tag, __assign({}, __assign({ ref: modalRef, id: (rest === null || rest === void 0 ? void 0 : rest.id) || slug, className: mergedClasses }, mergedAttributes)),
                    react_1.default.createElement(ModalComponent, __assign({}, __assign(__assign({}, props), { isOpen: isOpen, modal: modal }))))), containerRef.current);
        }
        return null;
    };
    return ModalWrap;
};
exports.default = asModal;
//# sourceMappingURL=index.js.map