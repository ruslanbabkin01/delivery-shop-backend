"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
exports.productsRouter = express_1.default.Router();
exports.productsRouter.get('/', (0, middlewares_1.ctrlWrapper)(controllers_1.getAllProducts));
exports.productsRouter.get('/:shopId', middlewares_1.isValidId, (0, middlewares_1.ctrlWrapper)(controllers_1.getProductsByShopId));
//# sourceMappingURL=products.js.map