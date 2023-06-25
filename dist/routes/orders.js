"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouter = void 0;
const express_1 = __importDefault(require("express"));
const schemas_1 = require("../schemas");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
exports.ordersRouter = express_1.default.Router();
exports.ordersRouter.get('/', (0, middlewares_1.ctrlWrapper)(controllers_1.getAllOrders));
exports.ordersRouter.get('/', (0, middlewares_1.ctrlWrapper)(controllers_1.getUserOrder));
exports.ordersRouter.post('/', (0, middlewares_1.validateBody)(schemas_1.addOrderJoiSchema), (0, middlewares_1.ctrlWrapper)(controllers_1.addOrder));
//# sourceMappingURL=orders.js.map