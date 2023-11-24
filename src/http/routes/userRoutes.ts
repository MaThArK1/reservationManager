import { FastifyInstance } from 'fastify'
import { insertUser, getUserById } from '../controllers/user.controller'

export async function userRoutes(app: FastifyInstance) {
  app.post('/user', insertUser)
  app.get('/user:id', getUserById)
}
