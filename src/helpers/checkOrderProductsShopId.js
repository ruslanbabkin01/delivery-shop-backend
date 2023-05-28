const checkOrderProductsShopId = ({ shop: id, products }) => {
  return products.every(product => product.owner === id)
}

module.exports = checkOrderProductsShopId
