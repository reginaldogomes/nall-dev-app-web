// controllers/postController.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { postModel } from '../models/post'

// Certifique-se de que o postModel está corretamente importado e implementa os métodos esperados.

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, content } = req.body
    // Validação básica para título e conteúdo
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' })
    }

    const post = await postModel.createPost({ title, content })
    res.status(201).json(post)
  } catch (error) {
    console.error('Error creating post:', error)
    res.status(500).json({ error: 'Error creating post' })
  }
}

const getAllPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await postModel.getAllPosts()
    res.status(200).json(posts)
  } catch (error) {
    console.error('Error getting posts:', error)
    res.status(500).json({ error: 'Error getting posts' })
  }
}

// Exportando individualmente para facilitar testes e importações.
export { createPost, getAllPosts }
