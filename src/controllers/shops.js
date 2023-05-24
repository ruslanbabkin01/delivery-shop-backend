const { ShopModel } = require('../models')

const getAllShops = async (req, res, next) => {
  try {
    const shops = await ShopModel.find({}, '-createdAt -updatedAt')
    res.json(shops)
  } catch (error) {
    next(error)
  }
}

module.exports = getAllShops
