import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body

    const service = new CreateMessageService()

    try {
      
      return res.json(message)
    } catch (err) {
      return res.json(err.message)
    }
  }
}

export { CreateMessageController }
