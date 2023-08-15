export const NavBar = () => {
  return (
    <nav className='flex'>
      <button className='text-gray-400 hover:text-white'>
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </button>
      <div className='mobile-menu hidden md:hidden'>
        <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
          Home
        </a>
        <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
          About
        </a>
        <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
          Services
        </a>
        <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
          Portfolio
        </a>
        <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
          Contact
        </a>
      </div>
    </nav>
  )
}
