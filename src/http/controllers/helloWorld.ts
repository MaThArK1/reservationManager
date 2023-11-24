import { FastifyRequest, FastifyReply } from 'fastify'

export async function helloWorld(req: FastifyRequest, res: FastifyReply) {
  res.status(200).send('Bem vindo')
}
