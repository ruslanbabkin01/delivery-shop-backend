const express = require('express')
const { getAllProducts, getProductsByShopId } = require('../controllers')
const { validateBody, ctrlWrapper, isValidId } = require('../middlewares')
// const { schemas } = require('../../models')

const router = express.Router()

router.get('/', ctrlWrapper(getAllProducts))

router.get('/:shopId', isValidId, ctrlWrapper(getProductsByShopId))

module.exports = router
