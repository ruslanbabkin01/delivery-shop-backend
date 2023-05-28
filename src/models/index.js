const ShopModel = require('./shop')
const { ProductModel } = require('./product')
const { OrderModel, addOrderJoiSchema } = require('./order')

module.exports = {
  ShopModel,
  ProductModel,
  OrderModel,
  addOrderJoiSchema,
}
