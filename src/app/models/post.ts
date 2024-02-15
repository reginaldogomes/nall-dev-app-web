// models/post.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Post {
  id: number
  title: string
  content: string
}

export const postModel = {
  createPost: async (data: Partial<Post>): Promise<Post> => {
    return prisma.post.create({ data })
  },
  getAllPosts: async (): Promise<Post[]> => {
    return prisma.post.findMany()
  },
}
