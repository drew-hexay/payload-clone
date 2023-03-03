"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var context_1 = __importDefault(require("../ModalProvider/context"));
var useModal = function () { return (0, react_1.useContext)(context_1.default); };
exports.default = useModal;
//# sourceMappingURL=index.js.map