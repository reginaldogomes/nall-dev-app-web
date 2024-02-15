// pages/api/posts/index.ts
import { NextApiRequest, NextApiResponse } from 'next'
import postController from '../../../controllers/postController'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    await postController.createPost(req, res)
  } else if (req.method === 'GET') {
    await postController.getAllPosts(req, res)
  } else {
    res.setHeader('Allow', ['POST', 'GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
