import { Conflict } from 'http-errors'
import { OrderModel } from '../schemas'
import { checkOrderProductsShopId } from '../helpers'
import { Request, Response } from 'express'

export const getAllOrders = async (req: Request, res: Response, next) => {
  try {
    const orders = await OrderModel.find({}, '-createdAt -updatedAt')
    res.json(orders)
  } catch (error) {
    next(error)
  }
}

export const addOrder = async (req: Request, res: Response) => {
  const IdsEqual = checkOrderProductsShopId(req.body)

  if (!IdsEqual) {
    throw new Conflict('One order can only be processed from one shop')
  }

  const newOrder = await OrderModel.create({ ...req.body })

  return res.status(201).json(newOrder)
}

export const getUserOrder = async (req: Request, res: Response) => {
  const order = await OrderModel.find({ ...req.body }, '-createdAt -updatedAt')
    .populate('products.product', '-createdAt -updatedAt')
    .populate('shop', '-createdAt -updatedAt')

  return res.json(order)
}
