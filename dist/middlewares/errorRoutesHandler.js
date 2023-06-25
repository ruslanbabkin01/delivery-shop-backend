"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorRoutesHandler = void 0;
const errorRoutesHandler = (req, res, next) => {
    res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Use api on routes: /api/...',
        data: 'Not found',
    });
};
exports.errorRoutesHandler = errorRoutesHandler;
//# sourceMappingURL=errorRoutesHandler.js.map