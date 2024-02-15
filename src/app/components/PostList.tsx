// components/PostList.tsx

import { useEffect, useState } from 'react'
import axios from 'axios'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts')
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map(
          (
            post: any, // Adicionando any aqui para evitar erros de tipo
          ) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

export default PostList
