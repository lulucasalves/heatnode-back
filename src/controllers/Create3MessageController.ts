import { Request, Response } from 'express'
import { Create3MessageService } from '../services/Create3MessageService'

class Create3MessageController {
  async handle(req: Request, res: Response) {
    const service = new Create3MessageService()

    const result = await service.execute()

    return res.json(result)
  }
}

export { Create3MessageController }
