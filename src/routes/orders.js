const express = require('express')
const { addOrder, getAllOrders, getUserOrder } = require('../controllers')
const { validateBody, ctrlWrapper } = require('../middlewares')
const { addOrderJoiSchema } = require('../models')

const router = express.Router()

router.get('/', ctrlWrapper(getAllOrders))

router.get('/', ctrlWrapper(getUserOrder))

router.post('/', validateBody(addOrderJoiSchema), ctrlWrapper(addOrder))

module.exports = router
