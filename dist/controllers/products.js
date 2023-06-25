"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByShopId = exports.getAllProducts = void 0;
const schemas_1 = require("../schemas");
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield schemas_1.ProductModel.find({}, '-createdAt -updatedAt');
        res.json(products);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllProducts = getAllProducts;
const getProductsByShopId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { shopId } = req.params;
    try {
        const products = yield schemas_1.ProductModel.find({ owner: shopId }, {
            createdAt: 0,
            updatedAt: 0,
        });
        res.json(products);
    }
    catch (error) {
        next(error);
    }
});
exports.getProductsByShopId = getProductsByShopId;
//# sourceMappingURL=products.js.map