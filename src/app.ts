import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { userRoutes } from './http/routes/userRoutes'
import { reservationRoutes } from './http/routes/reservationRoutes'

export const app = fastify()
app.register(appRoutes, userRoutes)
app.register(reservationRoutes)
