'use client'

// import { useState } from 'react'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export const NavBar = () => {
  // const [bookmarksChecked, setBookmarksChecked] = useState(true)
  return (
    <>
      <nav className='flex items-center'>
        <button
          className='z-50 rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-secondary-200 text-slate-50 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black'
          aria-label='Customise options'
        >
          <HamburgerMenuIcon />
        </button>
      </nav>
    </>
  )
}
