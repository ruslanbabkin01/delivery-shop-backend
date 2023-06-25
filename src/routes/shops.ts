import express from 'express'
import { ctrlWrapper } from '../middlewares'
import { getAllShops } from '../controllers'

export const shopsRouter = express.Router()

shopsRouter.get('/', ctrlWrapper(getAllShops))
