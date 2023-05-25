const { OrderModel } = require('../models')

const addOrder = async (req, res) => {
  const newOrder = await OrderModel.create({ ...req.body })

  return res.status(201).json(newOrder)
}

module.exports = addOrder
