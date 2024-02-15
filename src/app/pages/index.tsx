import useSWR from 'swr'
import Link from 'next/link'
import React from 'react'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Posts() {
  const { data: posts, error } = useSWR('/api/posts', fetcher)

  if (error) return <div>Failed to load</div>
  if (!posts) return <div>Loading...</div>

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}
