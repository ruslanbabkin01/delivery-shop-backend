import { Request, Response } from 'express'

export const ctrlWrapper = ctrl => {
  return async (req: Request, res: Response, next) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
