"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModalContainer_1 = require("../ModalContainer");
var asModal_1 = require("../asModal");
var CSS = function (_a) {
    var classPrefix = _a.classPrefix, zIndex = _a.zIndex;
    var prefixToUse = classPrefix ? "".concat(classPrefix, "__") : '';
    return ("\n    .".concat(prefixToUse).concat(ModalContainer_1.containerBaseClass, " {\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      position: fixed;\n      pointer-events: none;\n      visibility: hidden;\n      z-index: -1;\n    }\n\n    .").concat(prefixToUse).concat(ModalContainer_1.containerBaseClass, "--appear,\n    .").concat(prefixToUse).concat(ModalContainer_1.containerBaseClass, "--appearDone,\n    .").concat(prefixToUse).concat(ModalContainer_1.containerBaseClass, "--enter,\n    .").concat(prefixToUse).concat(ModalContainer_1.containerBaseClass, "--enterDone,\n    .").concat(prefixToUse).concat(ModalContainer_1.containerBaseClass, "--exit {\n      pointer-events: all;\n      visibility: visible;\n      z-index: ").concat(zIndex, ";\n    }\n\n    .").concat(prefixToUse).concat(asModal_1.itemBaseClass, " {\n      position: absolute;\n      visibility: hidden;\n    }\n\n    .").concat(prefixToUse).concat(asModal_1.itemBaseClass, "--appear,\n    .").concat(prefixToUse).concat(asModal_1.itemBaseClass, "--appearDone,\n    .").concat(prefixToUse).concat(asModal_1.itemBaseClass, "--enter,\n    .").concat(prefixToUse).concat(asModal_1.itemBaseClass, "--enterDone,\n    .").concat(prefixToUse).concat(asModal_1.itemBaseClass, "--exit {\n      visibility: visible;\n    }\n  "));
};
exports.default = CSS;
//# sourceMappingURL=generateCSS.js.map