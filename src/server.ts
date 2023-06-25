import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import { ordersRouter, productsRouter, shopsRouter } from './routes'
import { errorHandler, errorRoutesHandler } from './middlewares'

export const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
// cors
app.use(cors())
//підключення парсеру даних від форм
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

app.use('/api/shops', shopsRouter)
app.use('/api/products', productsRouter)
app.use('/api/orders', ordersRouter)

app.use('*', errorRoutesHandler)

app.use(errorHandler)
