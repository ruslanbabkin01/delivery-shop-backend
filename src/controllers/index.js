const getAllShops = require('./shops')
const { getAllProducts, getProductsByShopId } = require('./products')
const { addOrder, getAllOrders, getUserOrder } = require('./orders')

module.exports = {
  getAllShops,
  getAllProducts,
  getProductsByShopId,
  addOrder,
  getAllOrders,
  getUserOrder,
}
