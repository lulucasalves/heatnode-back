import { NextFunction, Response, Request } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function authenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({ error: 'token.invalid' })
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
    req.userId = sub
    return next()
  } catch (err) {
    res.status(401).json({ error: 'token.expired' })
  }
}
