// controllers/userController.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { userModel } from '../models/user'

export default {
  getUserById: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const userId = Number(req.query.userId)
      const user = await userModel.getUserById(userId)
      if (!user) {
        res.status(404).json({ error: 'User not found' })
      } else {
        res.status(200).json(user)
      }
    } catch (error) {
      console.error('Error getting user:', error)
      res.status(500).json({ error: 'Error getting user' })
    }
  },
}
