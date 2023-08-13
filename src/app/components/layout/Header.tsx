const data = {
  name: 'Reginaldo Gomes',
}

export const Header = () => {
  return (
    <header className='flex bg-primary-600 p-2 max-w-5xl mx-auto rounded'>
      <p>{data.name}</p>
    </header>
  )
}
