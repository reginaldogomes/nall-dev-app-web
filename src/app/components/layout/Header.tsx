import { Logo } from '../Logo'
import { NavBar } from './Navbar'

export const Header = () => {
  return (
    <header className='sticky top-0 z-1 flex justify-between bg-secondary/20 p-4 w-full md:max-w-5xl mx-auto rounded'>
      <Logo />
      <NavBar />
    </header>
  )
}
