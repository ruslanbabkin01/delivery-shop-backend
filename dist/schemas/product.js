"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'shop',
        required: true,
    },
    photoUrl: {
        type: String,
        default: '',
    },
}, { versionKey: false, timestamps: true });
exports.ProductModel = (0, mongoose_1.model)('product', schema);
const productJoiSchema = joi_1.default.object({
    _id: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    owner: joi_1.default.string().required(),
    photoUrl: joi_1.default.string().uri(),
});
//# sourceMappingURL=product.js.map