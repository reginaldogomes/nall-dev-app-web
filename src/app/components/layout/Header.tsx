import { NavBar } from './Navbar'

const data = {
  name: 'Reginaldo Gomes',
}

export const Header = () => {
  return (
    <header className='flex justify-between bg-primary-600 p-4 max-w-5xl mx-auto rounded'>
      <p>{data.name}</p>
      <NavBar />
    </header>
  )
}
