// components/Menu.tsx
import React from 'react'
import MenuItem from './MenuItem'

const Menu: React.FC = () => (
  <nav className='bg-gray-800'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between h-16'>
        <div className='flex items-center'>
          <div className='flex space-x-4'>
            <MenuItem href='/' label='Home' />
            <MenuItem href='/about' label='Sobre' />
            <MenuItem href='/contact' label='Contato' />
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Menu
