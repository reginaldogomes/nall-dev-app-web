import Image from 'next/image'
import LinkUrl from '../elements/LinkUrl'
import Title from '../elements/Title'

const avatar = '/nall-resume.svg'

export const ResumeHome = () => {
  return (
    <section className='grid grid-cols-1 gap-y-4 items-center mx-auto py-4 px-4 rounded'>
      <div className='mx-auto'>
        <Image
          src={avatar}
          width={100}
          height={100}
          alt='Picture of the author'
        />
      </div>
      <p className='text-center'>
        Com mais de 15 anos de experiência no desenvolvimento de produtos
        digitais, especialmente para plataformas web e mobile, minha jornada
        profissional é um reflexo contínuo de aprendizados e da paixão em tornar
        ideias em realidade digital.
      </p>
      <div className='mx-auto'>
        <LinkUrl href='/about'>Conheça mais</LinkUrl>
      </div>
    </section>
  )
}
