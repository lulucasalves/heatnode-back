import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { Create3MessageController } from './controllers/Create3MessageController'
import { authenticated } from './middleware/authenticated'
import { ProfileUserController } from './controllers/ProfileUserController'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post('/messages', authenticated, new CreateMessageController().handle)
router.get('/messages/last3', new Create3MessageController().handle)
router.get('/profile', authenticated, new ProfileUserController().handle)

export { router }
