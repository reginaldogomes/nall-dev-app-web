// pages/api/users/[userId].ts

import { NextApiRequest, NextApiResponse } from 'next'
import userController from '../../controllers/userController'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    await userController.getUserById(req, res)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
