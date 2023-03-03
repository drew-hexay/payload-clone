"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateTransitionClasses = function (baseClass) {
    if (baseClass) {
        return ({
            appear: "".concat(baseClass, "--appear"),
            appearActive: "".concat(baseClass, "--appearActive"),
            appearDone: "".concat(baseClass, "--appearDone"),
            enter: "".concat(baseClass, "--enter"),
            enterActive: "".concat(baseClass, "--enterActive"),
            enterDone: "".concat(baseClass, "--enterDone"),
            exit: "".concat(baseClass, "--exit"),
            exitActive: "".concat(baseClass, "--exitActive"),
            exitDone: "".concat(baseClass, "--exitDone"),
        });
    }
    return {};
};
exports.default = generateTransitionClasses;
//# sourceMappingURL=generateTransitionClasses.js.map