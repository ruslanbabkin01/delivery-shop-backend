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
exports.getUserOrder = exports.addOrder = exports.getAllOrders = void 0;
const http_errors_1 = require("http-errors");
const schemas_1 = require("../schemas");
const helpers_1 = require("../helpers");
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield schemas_1.OrderModel.find({}, '-createdAt -updatedAt');
        res.json(orders);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllOrders = getAllOrders;
const addOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const IdsEqual = (0, helpers_1.checkOrderProductsShopId)(req.body);
    if (!IdsEqual) {
        throw new http_errors_1.Conflict('One order can only be processed from one shop');
    }
    const newOrder = yield schemas_1.OrderModel.create(Object.assign({}, req.body));
    return res.status(201).json(newOrder);
});
exports.addOrder = addOrder;
const getUserOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield schemas_1.OrderModel.find(Object.assign({}, req.body), '-createdAt -updatedAt')
        .populate('products.product', '-createdAt -updatedAt')
        .populate('shop', '-createdAt -updatedAt');
    return res.json(order);
});
exports.getUserOrder = getUserOrder;
//# sourceMappingURL=orders.js.map