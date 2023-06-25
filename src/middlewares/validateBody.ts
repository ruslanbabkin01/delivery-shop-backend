import { Request, Response, NextFunction } from 'express'

interface IValidationSchema {
  validate: (body: any) => { error?: any }
}

export const validateBody = (schema: IValidationSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body)
    if (error) {
      console.log(error)
      res.status(400)
      next(error)
    }
    next()
  }
}
