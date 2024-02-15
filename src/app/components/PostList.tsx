// components/PostList.tsx
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

// Define an interface for post objects for improved type safety
interface Post {
  id: number
  title: string
  content: string
}

// Custom hook for fetching posts
const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('/api/posts')
        setPosts(response.data)
      } catch (error) {
        setError('Error fetching posts')
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

const PostList = () => {
  const { posts, loading, error } = usePosts()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
