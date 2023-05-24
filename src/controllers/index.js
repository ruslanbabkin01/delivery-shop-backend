const getAllShops = require('./shops')
const { getAllProducts, getProductsByShopId } = require('./products')
const orders = require('./orders')
const users = require('./users')

module.exports = {
  getAllShops,
  getAllProducts,
  getProductsByShopId,
  orders,
  users,
}
