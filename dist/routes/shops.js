"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopsRouter = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
exports.shopsRouter = express_1.default.Router();
exports.shopsRouter.get('/', (0, middlewares_1.ctrlWrapper)(controllers_1.getAllShops));
//# sourceMappingURL=shops.js.map