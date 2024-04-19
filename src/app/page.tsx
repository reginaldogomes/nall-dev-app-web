// import PostList from './components/PostList'
import { Container } from '@/components/elements/Container'
import { ResumeHome } from '@/components/sections/ResumeHome'
// import { Service } from './components/sections/Service'

import { usePosts } from '@/context/PostsContext'

export default function Home() {
  const { posts } = usePosts()

  return (
    <Container>
      <ResumeHome />
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </Container>
  )
}
