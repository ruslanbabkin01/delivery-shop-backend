const checkOrderProductsShopId = ({ shop: id, products }) => {
  return products.every(product => product.shop === id)
}

module.exports = checkOrderProductsShopId
