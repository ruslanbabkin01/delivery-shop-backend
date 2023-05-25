const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500

  return res.status(statusCode).json({
    code: statusCode,
    error: err.stack,
  })
}

module.exports = errorHandler
