'use client'
import { Menu } from './Menu'

const links = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/about' },
  { text: 'Resume', url: '/resume' },
  { text: 'Articles', url: '/articles' },
  { text: 'Contact', url: '/contact' },
]

export const NavBar = () => {
  return (
    <>
      <nav className='flex items-center'>
        <Menu links={links} />
      </nav>
    </>
  )
}
