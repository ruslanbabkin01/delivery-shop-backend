import { isValidObjectId } from 'mongoose'
import { requestError } from '../helpers'
import { Request, Response } from 'express'

export const isValidId = (req: Request, res: Response, next) => {
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
