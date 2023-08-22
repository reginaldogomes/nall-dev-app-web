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
      <div className='opacity-0 invisible dropdown-content group-hover:opacity-100 group-hover:visible absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 py-2 w-36 transition'>
        <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
          Item 1
        </a>
        <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
          Item 2
        </a>
        <a href='#' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
          Item 3
        </a>
      </div>
    </nav>
  )
}
