import { Request, Response, NextFunction } from 'express'
import { ShopModel } from '../schemas'

export const getAllShops = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const shops = await ShopModel.find({}, '-createdAt -updatedAt')
    res.json(shops)
  } catch (error) {
    next(error)
  }
}
