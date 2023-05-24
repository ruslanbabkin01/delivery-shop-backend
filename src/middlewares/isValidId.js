const { isValidObjectId } = require('mongoose')
const { requestError } = require('../helpers')

const isValidId = (req, res, next) => {
  const { shopId } = req.params
  const IsCorrectId = isValidObjectId(shopId)
  if (!IsCorrectId) {
    const error = requestError(400, `${shopId} is not correct id format`)
    next(error)
  }
  next()
}

module.exports = isValidId
