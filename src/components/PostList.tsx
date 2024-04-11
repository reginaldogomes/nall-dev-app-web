// components/PostsList.tsx
'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: string
  content: string
}

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/todos')
      const data = await response.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div>
      <h1>Lista de Posts</h1>
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

export default PostsList
