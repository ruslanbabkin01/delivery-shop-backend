import { Request, Response, NextFunction } from 'express'
import { ProductModel } from '../schemas'

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await ProductModel.find({}, '-createdAt -updatedAt')
    res.json(products)
  } catch (error) {
    next(error)
  }
}

export const getProductsByShopId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { shopId } = req.params
  try {
    const products = await ProductModel.find(
      { owner: shopId },
      {
        createdAt: 0,
        updatedAt: 0,
      }
    )

    res.json(products)
  } catch (error) {
    next(error)
  }
}
