// import Image from "next/image";

import { Container } from './components/elements/Container'
import { ResumeHome } from './components/sections/ResumeHome'
import { Skills } from './components/sections/Skills'

export default function Home() {
  return (
    <Container>
      <ResumeHome />
      <Skills />
    </Container>
  )
}
