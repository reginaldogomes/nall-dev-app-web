import { GoToTopButton } from '../elements/GoToTop'
import { SocialIcons } from '../sections/SocialIcons'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='grid gap-4 bg-secondary/20 p-4 w-full md:max-w-5xl mx-auto rounded items-center'>
      <SocialIcons />
      <p className='text-xs text-center'>
        Copyright {currentYear} – Todos os direitos reservados
      </p>
      <GoToTopButton />
    </footer>
  )
}
