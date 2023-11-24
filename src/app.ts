import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { userRoutes } from './http/routes/userRoutes'

export const app = fastify()
app.register(appRoutes, userRoutes)
