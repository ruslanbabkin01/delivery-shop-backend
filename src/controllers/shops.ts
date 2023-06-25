import { ShopModel } from '../schemas'
import { Request, Response } from 'express'

export const getAllShops = async (req: Request, res: Response, next) => {
  try {
    const shops = await ShopModel.find({}, '-createdAt -updatedAt')
    res.json(shops)
  } catch (error) {
    next(error)
  }
}
