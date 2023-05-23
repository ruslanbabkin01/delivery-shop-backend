const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const shopsRouter = require('./src/routes/shops')
const productsRouter = require('./src/routes/products')
const usersRouter = require('./src/routes/users')
const ordersRouter = require('./src/routes/orders')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/shops', shopsRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)
app.use('/api/orders', ordersRouter)

const errorRoutesHandler = require('./src/middlewares/errorRoutesHandler')
const errorHandler = require('./src/middlewares/errorHandler')

app.use('*', errorRoutesHandler)

app.use(errorHandler)

module.exports = app
