"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var example_1 = __importDefault(require("./example"));
var setupModels = function ($mongoose) {
    if ($mongoose === void 0) { $mongoose = mongoose_1.default; }
    return ({
        Example: (0, example_1.default)($mongoose)
    });
};
exports.default = setupModels;
