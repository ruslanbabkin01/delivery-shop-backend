"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            console.log(error);
            res.status(400);
            next(error);
        }
        next();
    };
};
exports.validateBody = validateBody;
//# sourceMappingURL=validateBody.js.map