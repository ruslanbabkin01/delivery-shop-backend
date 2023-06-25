import express from 'express'
import { ctrlWrapper, isValidId } from '../middlewares'
import { getAllProducts, getProductsByShopId } from '../controllers'

export const productsRouter = express.Router()

productsRouter.get('/', ctrlWrapper(getAllProducts))

productsRouter.get('/:shopId', isValidId, ctrlWrapper(getProductsByShopId))
