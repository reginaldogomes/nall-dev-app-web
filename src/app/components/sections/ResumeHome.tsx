import Image from 'next/image'
import LinkUrl from '../elements/LinkUrl'

const avatar = '/nall-resume.svg'

export const ResumeHome = () => {
  return (
    <section className='mx-auto flex-col items-center gap-x-9 py-4 px-8 rounded text-center'>
      <div className='mx-auto text-center'>
        <Image
          src={avatar}
          width={100}
          height={100}
          alt='Picture of the author'
        />
      </div>
      <p>
        Com mais de 10 anos de experiência no desenvolvimento de produtos
        digitais, especialmente para plataformas web e mobile, minha jornada
        profissional é um reflexo contínuo de aprendizados e da paixão em tornar
        ideias em realidade digital.
      </p>
      <LinkUrl href='/about'>Saiba Mais</LinkUrl>
    </section>
  )
}
