import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
// const [bookmarksChecked, setBookmarksChecked] = useState(true)

interface MenuProps {
  links: { text: string; url: string }[]
}

export const Menu: React.FC<MenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative'>
      <button
        className='z-50 rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-secondary-200 text-slate-50 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black'
        onClick={toggleMenu}
      >
        <FaBars />
      </button>
      {isOpen && (
        <div className='min-w-full absolute top-12 right-0 bg-primary-500 p-4 shadow-lg rounded-lg'>
          <ul className='space-y-2'>
            {links.map((link, index) => (
              <li key={index} className='p-1'>
                <Link href={link.url} className='text-blue-500 hover:underline'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
