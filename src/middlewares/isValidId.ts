import { Request, Response, NextFunction } from 'express'
import { isValidObjectId } from 'mongoose'
import { requestError } from '../helpers'

export const isValidId = (req: Request, res: Response, next: NextFunction) => {
  const { shopId } = req.params
  const IsCorrectId = isValidObjectId(shopId)
  if (!IsCorrectId) {
    const error = requestError(400, `${shopId} is not correct id format`)
    next(error)
  }
  next()
}
{
}
