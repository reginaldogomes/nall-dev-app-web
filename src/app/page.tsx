// import PostList from './components/PostList'
import { Container } from './components/elements/Container'
import { ResumeHome } from './components/sections/ResumeHome'
// import { Service } from './components/sections/Service'

export default function Home() {
  return (
    <Container>
      <ResumeHome />
      {/* <Service services={services} /> */}
      {/* <PostList /> */}
    </Container>
  )
}
