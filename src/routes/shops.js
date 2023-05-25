const express = require('express')
const { getAllShops } = require('../controllers')
const {  ctrlWrapper } = require('../middlewares')

const router = express.Router()

router.get('/', ctrlWrapper(getAllShops))

module.exports = router
