"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.addOrderJoiSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlenght: 3,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: emailRegex,
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        match: phoneRegex,
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total Price is required'],
    },
    shop: { type: mongoose_1.Schema.Types.ObjectId, ref: 'shop', required: true },
    products: [
        {
            productId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'product',
                required: true,
            },
            quantity: { type: Number, required: true },
            owner: { type: mongoose_1.Schema.Types.ObjectId, ref: 'shop', required: true },
        },
    ],
}, { versionKey: false, timestamps: true });
exports.addOrderJoiSchema = joi_1.default.object({
    name: joi_1.default.string().alphanum().required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().regex(phoneRegex).required(),
    address: joi_1.default.string().required(),
    totalPrice: joi_1.default.number().required(),
    shop: joi_1.default.string().required(),
    products: joi_1.default.array()
        .items(joi_1.default.object({
        productId: joi_1.default.string().required(),
        quantity: joi_1.default.number().required(),
        owner: joi_1.default.string().required(),
    }))
        .required(),
});
exports.OrderModel = (0, mongoose_1.model)('order', schema);
//# sourceMappingURL=order.js.map