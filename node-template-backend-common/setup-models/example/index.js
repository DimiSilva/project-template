"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var node_template_application_common_1 = require("node-template-application-common");
exports.default = (function ($mongoose) {
    if ($mongoose === void 0) { $mongoose = mongoose_1.default; }
    var subSchema = new $mongoose.Schema({
        prop: { type: Number, integer: true, default: 0 },
    }, { _id: false, versionKey: false });
    var schema = new $mongoose.Schema({
        prop: { type: String, index: true, max: 100, required: true },
        uniqueProp: { type: String, index: true, required: true, unique: true },
        subSchema: { type: subSchema, default: {} },
    }, { timestamps: { currentTime: function () { return new Date(); } } });
    var Model = $mongoose.model(node_template_application_common_1.enums.dbModels.COLLECTION1, schema);
    return Model;
});
