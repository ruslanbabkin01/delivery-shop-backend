import { Request, Response } from 'express'

export const errorRoutesHandler = (req, res, next) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Use api on routes: /api/...',
    data: 'Not found',
  })
}
