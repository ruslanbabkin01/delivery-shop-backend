const express = require('express')
// const { contacts: ctrl } = require('../../controllers')
// const {
//   isValidId,
//   authMiddleware,
//   validation,
//   ctrlWrapper,
// } = require('../../middlewares')
// const { schemas } = require('../../models')

const router = express.Router()

router.get('/', authMiddleware, ctrlWrapper(ctrl.getAll))

router.get('/:shopId', isValidId, ctrlWrapper(ctrl.getById))

module.exports = router
