import { Section } from '../elements/Section'
import Image from 'next/image'

const avatar = '/nall-resume.svg'

export const ResumeHome = () => {
  return (
    <Section bgColor='bg-primary-600'>
      <Image
        src={avatar}
        width={100}
        height={100}
        alt='Picture of the author'
      />
      <p>
        Tenho uma sólida bagagem com mais de 10 anos de experiência no
        desenvolvimento de produtos digitais, com um foco especial em soluções
        para plataformas web e mobile. Minha trajetória profissional é um
        testemunho vivo de aprendizados contínuos e de uma paixão inabalável por
        transformar ideias em realidade digital.
      </p>
    </Section>
  )
}
