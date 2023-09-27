export const Logo = () => {
  const data = {
    name: 'Reginaldo Gomes',
    position: 'Consultor de soluções digitais',
  }
  return (
    <div className='flex-col items-center leading-4'>
      <h1 className='text-secondary-200 text-lg'>{data.name}</h1>
      <small className='text-xs text-secondary-100'>{data.position}</small>
    </div>
  )
}
