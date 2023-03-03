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
Object.defineProperty(exports, "__esModule", { value: true });
var reducer = function (state, action) {
    var newState = __assign({}, state);
    var type = action.type, payload = action.payload;
    switch (type) {
        case 'UPDATE_MODAL': {
            var slug = payload.slug;
            if (slug) {
                newState[slug] = __assign(__assign({}, newState[slug]), payload);
            }
            break;
        }
        case 'OPEN_MODAL': {
            var slug = payload.slug;
            if (slug) {
                var isCurrentlyOpen = slug in newState && newState[slug].isOpen;
                if (!isCurrentlyOpen) {
                    newState[slug] = __assign(__assign({}, newState[slug]), { slug: slug, openedOn: Date.now(), isOpen: true });
                }
            }
            break;
        }
        case 'TOGGLE_MODAL': {
            var slug = payload.slug;
            if (slug) {
                var isCurrentlyOpen = slug in newState && newState[slug].isOpen;
                newState[slug] = __assign(__assign({}, newState[slug]), { slug: slug, openedOn: !isCurrentlyOpen ? Date.now() : undefined, isOpen: !isCurrentlyOpen });
            }
            break;
        }
        case 'CLOSE_MODAL': {
            var slug = payload.slug;
            if (slug) {
                newState[slug] = __assign(__assign({}, newState[slug]), { slug: slug, openedOn: undefined, isOpen: false });
            }
            break;
        }
        case 'REMOVE_MODAL': {
            var slug = payload.slug;
            if (slug && slug in newState) {
                delete newState[slug];
            }
            break;
        }
        case 'CLOSE_LATEST_MODAL': {
            var latestModal = Object.keys(newState)
                .reduce(function (acc, slug) {
                var modal = newState[slug];
                if (modal.isOpen && typeof modal.openedOn === 'number' && (!acc || (typeof acc.openedOn === 'number' && modal.openedOn > acc.openedOn))) {
                    return modal;
                }
                return acc;
            }, undefined);
            if (latestModal) {
                newState[latestModal.slug] = __assign(__assign({}, newState[latestModal.slug]), { isOpen: false, openedOn: undefined });
            }
            break;
        }
        case 'CLOSE_ALL_MODALS': {
            newState = Object.entries((newState)).reduce(function (acc, _a) {
                var key = _a[0], value = _a[1];
                acc[key] = __assign(__assign({}, value), { isOpen: false, openedOn: undefined });
                return acc;
            }, {});
            break;
        }
        default: {
            break;
        }
    }
    return newState;
};
exports.default = reducer;
//# sourceMappingURL=reducer.js.map