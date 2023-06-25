"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    products: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'product', default: [] }],
}, {
    versionKey: false,
    timestamps: true,
});
exports.ShopModel = (0, mongoose_1.model)('shop', schema);
//# sourceMappingURL=shop.js.map