// controllers/postController.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { postModel } from '../models/post'

export default {
  createPost: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { title, content } = req.body
      const post = await postModel.createPost({ title, content })
      res.status(201).json(post)
    } catch (error) {
      console.error('Error creating post:', error)
      res.status(500).json({ error: 'Error creating post' })
    }
  },
  getAllPosts: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const posts = await postModel.getAllPosts()
      res.status(200).json(posts)
    } catch (error) {
      console.error('Error getting posts:', error)
      res.status(500).json({ error: 'Error getting posts' })
    }
  },
}
