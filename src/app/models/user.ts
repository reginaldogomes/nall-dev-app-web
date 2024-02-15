// models/user.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface User {
  id: number
  name: string
  email: string
}

export const userModel = {
  getUserById: async (id: number): Promise<User | null> => {
    return prisma.user.findUnique({ where: { id } })
  },
}
