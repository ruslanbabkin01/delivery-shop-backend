import { Request, Response } from 'express'

export const validateBody = schema => {
  return (req: Request, res: Response, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      console.log(error)
      res.status(400)
      next(error)
    }
    next()
  }
}
