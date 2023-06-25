import { Request, Response, NextFunction } from 'express'

export const errorRoutesHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Use api on routes: /api/...',
    data: 'Not found',
  })
}
