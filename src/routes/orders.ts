import express from 'express'
import { addOrderJoiSchema } from '../schemas'
import { ctrlWrapper, validateBody } from '../middlewares'
import { addOrder, getAllOrders, getUserOrder } from '../controllers'

export const ordersRouter = express.Router()

ordersRouter.get('/', ctrlWrapper(getAllOrders))

ordersRouter.get('/', ctrlWrapper(getUserOrder))

ordersRouter.post('/', validateBody(addOrderJoiSchema), ctrlWrapper(addOrder))
