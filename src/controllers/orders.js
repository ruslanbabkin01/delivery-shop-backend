const { checkOrderProductsShopId } = require('../helpers')
const { OrderModel } = require('../models')
const { Conflict } = require('http-errors')

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await OrderModel.find({}, '-createdAt -updatedAt')
    res.json(orders)
  } catch (error) {
    next(error)
  }
}

const addOrder = async (req, res) => {
  const IdsEqual = checkOrderProductsShopId(req.body)

  if (!IdsEqual) {
    throw new Conflict('One order can only be processed from one shop')
  }

  const newOrder = await OrderModel.create({ ...req.body })

  return res.status(201).json(newOrder)
}

const getUserOrder = async (req, res) => {
  const order = await OrderModel.find({ ...req.body }, '-createdAt -updatedAt')
    .populate('products.product', '-createdAt -updatedAt')
    .populate('shop', '-createdAt -updatedAt')

  return res.json(order)
}

module.exports = { addOrder, getAllOrders, getUserOrder }
