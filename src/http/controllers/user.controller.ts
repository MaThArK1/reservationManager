import { prisma } from '@/lib/prisma'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function insertUser(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    cpfCnpj: z.string().min(11),
    rg: z.undefined(),
    phoneNumber: z.string(),
    cep: z.string(),
  })

  const { name, cpfCnpj, rg, phoneNumber, cep } = registerBodySchema.parse(
    req.body,
  )

  const userWithCpfCnpj = await prisma.user.findUnique({
    where: { cpfCnpj },
  })

  if (userWithCpfCnpj) {
    return res
      .status(409)
      .send({ message: `Usuário de CNPJ/CPF: ${cpfCnpj} já cadastrado` })
  }

  await prisma.user.create({
    data: {
      name,
      cpfCnpj,
      rg,
      phoneNumber,
      cep,
    },
  })

  return res.status(201).send({ message: 'Usuário cadastrado com sucesso' })
}

export async function getUserById(req: FastifyRequest, res: FastifyReply) {
  const getUserIdSchema = z.object({
    id: z.string(),
  })

  const { id } = getUserIdSchema.parse(req.query)
  const idInt = parseInt(id)

  const user = await prisma.user.findUnique({
    where: { id: idInt },
  })

  return res.status(200).send({ user })
}
