const express = require('express')
const { getAllProducts, getProductsByShopId } = require('../controllers')
const { ctrlWrapper, isValidId } = require('../middlewares')

const router = express.Router()

router.get('/', ctrlWrapper(getAllProducts))

router.get('/:shopId', isValidId, ctrlWrapper(getProductsByShopId))

module.exports = router
