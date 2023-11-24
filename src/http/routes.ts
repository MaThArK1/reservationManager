import { FastifyInstance } from 'fastify'
import { helloWorld } from './controllers/helloWorld'

export async function appRoutes(app: FastifyInstance) {
  app.get('/helloWorld', helloWorld)
}
