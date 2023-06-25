"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidId = void 0;
const mongoose_1 = require("mongoose");
const helpers_1 = require("../helpers");
const isValidId = (req, res, next) => {
    const { shopId } = req.params;
    const IsCorrectId = (0, mongoose_1.isValidObjectId)(shopId);
    if (!IsCorrectId) {
        const error = (0, helpers_1.requestError)(400, `${shopId} is not correct id format`);
        next(error);
    }
    next();
};
exports.isValidId = isValidId;
{
}
//# sourceMappingURL=isValidId.js.map