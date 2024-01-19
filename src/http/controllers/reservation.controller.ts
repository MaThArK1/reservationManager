import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    day: z.number(),
    month: z.number(),
    year: z.number(),
    user: z.number(),
    price: z.number(),
  })

  const { day, month, year, user, price } = registerBodySchema.parse(req.body)

  const date = new Date(year, month, day)

  const reservationWithSameDate = await prisma.reservation.findFirst({
    where: { date },
  })

  if (reservationWithSameDate) {
    return res.status(409).send({ message: `Data já reservada: ${date}` })
  }

  await prisma.reservation.create({
    data: {
      date,
      user,
      price,
    },
  })

  return res.status(201).send({ message: 'Reserva realizada com sucesso!' })
}
