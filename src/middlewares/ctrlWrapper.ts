import { Request, Response, NextFunction } from 'express'

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>

export const ctrlWrapper = (ctrl: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
