"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    console.log(err.stack);
    return res.status(statusCode).json({
        status: 'fail',
        code: statusCode,
        error: err.stack,
        message: err.message,
        data: 'Internal Server Error',
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map