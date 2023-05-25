const express = require('express')
const { addOrder } = require('../controllers')
const { validateBody, ctrlWrapper } = require('../middlewares')
const { addOrderJoiSchema } = require('../models')

const router = express.Router()

router.post('/', validateBody(addOrderJoiSchema), ctrlWrapper(addOrder))

module.exports = router
