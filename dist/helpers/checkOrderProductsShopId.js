"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOrderProductsShopId = void 0;
const checkOrderProductsShopId = ({ shop: id, products, }) => {
    return products.every((product) => product.owner === id);
};
exports.checkOrderProductsShopId = checkOrderProductsShopId;
//# sourceMappingURL=checkOrderProductsShopId.js.map