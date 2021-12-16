import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body
    const { userId } = req

    const service = new CreateMessageService()

    const result = await service.execute(message, userId)

    return res.json(result)
  }
}

export { CreateMessageController }
