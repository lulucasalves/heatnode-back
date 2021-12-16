import { Request, Response } from 'express'
import { ProfileUserService } from '../services/ProfileUserService'

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { userId } = req
    const service = new ProfileUserService()

    const result = await service.execute(userId)

    return res.json(result)
  }
}

export { ProfileUserController }
