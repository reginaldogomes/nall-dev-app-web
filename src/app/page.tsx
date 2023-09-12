// import Image from "next/image";

import { Section } from './components/elements/Section'
import { Skills } from './components/sections/Skills'

export default function Home() {
  return (
    <Section>
      <h1>front-end developer</h1>
      <p>
        Profissional com experiência em desenvolvimento Front-end e com vasta
        experiência nas linguagens JavaScript e TypeScript e é especializado na
        biblioteca ReatcJS e no framework NextJS.
      </p>
      <Skills />
    </Section>
  )
}
