import { Logo } from '../Logo'
import { NavBar } from './Navbar'

export const Header = () => {
  return (
    <header className='flex justify-between bg-primary-600 p-4 w-full md:max-w-5xl mx-auto rounded'>
      <Logo />
      <NavBar />
    </header>
  )
}
