const express = require('express')
const { getAllShops } = require('../controllers')
const { validateBody, ctrlWrapper } = require('../middlewares')
// const { schemas } = require('../../models')

const router = express.Router()

router.get('/', ctrlWrapper(getAllShops))

// router.get('/:shopId', isValidId, ctrlWrapper(ctrl.getById))

module.exports = router
