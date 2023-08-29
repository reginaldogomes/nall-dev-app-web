import { NavBar } from './Navbar'

const data = {
  name: 'Reginaldo Gomes',
  position: 'Web developer',
}

export const Header = () => {
  return (
    <header className='flex justify-between bg-primary-600 p-4 w-full mx-auto rounded'>
      <h1 className='flex-col leading-3 items-center'>
        {data.name}
        <small className='block text-secondary-100'>{data.position}</small>
      </h1>
      <NavBar />
    </header>
  )
}
