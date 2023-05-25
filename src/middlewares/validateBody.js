const validateBody = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      console.log(error)
      res.status(400)
      next(error)
    }
    next()
  }
}

module.exports = validateBody
