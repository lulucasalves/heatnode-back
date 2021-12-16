import prismaClient from '../prisma'

class Create3MessageService {
  async execute() {
    const message = await prismaClient.message.findMany({
      take: 3,
      orderBy: { created_at: 'desc' },
      include: { user: true }
    })

    return message
  }
}

export { Create3MessageService }
