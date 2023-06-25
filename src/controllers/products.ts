import { ProductModel } from '../schemas'
import { Request, Response } from 'express'

export const getAllProducts = async (req: Request, res: Response, next) => {
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
  next
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
