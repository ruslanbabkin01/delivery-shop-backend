"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestError = void 0;
const requestError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
};
exports.requestError = requestError;
//# sourceMappingURL=RequestError.js.map