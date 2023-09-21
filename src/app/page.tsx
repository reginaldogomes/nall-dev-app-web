// import Image from "next/image";

import { Container } from './components/elements/Container'
import { Skills } from './components/sections/Skills'

export default function Home() {
  return (
    <Container>
      <h1>front-end developer</h1>
      <p>
        Profissional com experiência em desenvolvimento Front-end e com
        experiência nas linguagens JavaScript e TypeScript e é especializado na
        biblioteca ReatcJS e no framework NextJS. 22
      </p>
      <Skills />
    </Container>
  )
}
