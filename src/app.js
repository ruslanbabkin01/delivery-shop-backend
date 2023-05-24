const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const shopsRouter = require('./routes/shops')
const productsRouter = require('./routes/products')
// const usersRouter = require('./routes/users')
// const ordersRouter = require('./routes/orders')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/shops', shopsRouter)
app.use('/api/products', productsRouter)
// app.use('/api/users', usersRouter)
// app.use('/api/orders', ordersRouter)

const errorRoutesHandler = require('./middlewares/errorRoutesHandler')
const errorHandler = require('./middlewares/errorHandler')

app.use('*', errorRoutesHandler)

app.use(errorHandler)

module.exports = app
