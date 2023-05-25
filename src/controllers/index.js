const getAllShops = require('./shops')
const { getAllProducts, getProductsByShopId } = require('./products')
const addOrder = require('./orders')

module.exports = {
  getAllShops,
  getAllProducts,
  getProductsByShopId,
  addOrder,
}
