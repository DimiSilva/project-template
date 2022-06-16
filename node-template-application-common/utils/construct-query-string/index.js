"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constructQueryString = function (params) {
    return Object.entries(params).reduce(function (qs, _a, index) {
        var key = _a[0], value = _a[1];
        return "".concat(qs).concat(index === 0 ? "?" : "&").concat(key, "=").concat(value);
    }, "");
};
exports.default = constructQueryString;
