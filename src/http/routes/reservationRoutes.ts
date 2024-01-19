import { FastifyInstance } from 'fastify'
import { create } from '../controllers/reservation.controller'

export async function reservationRoutes(app: FastifyInstance) {
  app.post('/reservation', create)
}
