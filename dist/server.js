"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const middlewares_1 = require("./middlewares");
exports.app = (0, express_1.default)();
const formatsLogger = exports.app.get('env') === 'development' ? 'dev' : 'short';
exports.app.use((0, morgan_1.default)(formatsLogger));
// cors
exports.app.use((0, cors_1.default)());
//підключення парсеру даних від форм
exports.app.use(express_1.default.urlencoded({ extended: false }));
// parse application/json
exports.app.use(express_1.default.json());
exports.app.use('/api/shops', routes_1.shopsRouter);
exports.app.use('/api/products', routes_1.productsRouter);
exports.app.use('/api/orders', routes_1.ordersRouter);
exports.app.use('*', middlewares_1.errorRoutesHandler);
exports.app.use(middlewares_1.errorHandler);
//# sourceMappingURL=server.js.map