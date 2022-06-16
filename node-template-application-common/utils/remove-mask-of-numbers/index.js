"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeMaskOfNumbers = function (numbersWithMask) {
    if (!numbersWithMask)
        return "";
    return numbersWithMask.match(/\d+/g)
        ? (numbersWithMask.match(/\d+/g) || []).join("")
        : "";
};
exports.default = removeMaskOfNumbers;
