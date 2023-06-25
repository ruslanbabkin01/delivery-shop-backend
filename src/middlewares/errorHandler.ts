import { Request, Response } from 'express'

export const errorHandler = (err, req: Request, res: Response, next) => {
  const statusCode = res.statusCode || 500

  console.log(err.stack)

  return res.status(statusCode).json({
    status: 'fail',
    code: statusCode,
    error: err.stack,
    message: err.message,
    data: 'Internal Server Error',
  })
}
