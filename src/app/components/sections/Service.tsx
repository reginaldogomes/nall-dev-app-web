type Service = {
  title: string
  description: string
  icon: JSX.Element // Elemento JSX para o ícone
  link: string
}

type ServiceProps = {
  service: Service
}

const Service: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className='max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4'>
      <div className='px-4 py-2'>
        {service.icon}
        <h2 className='text-gray-800 font-bold text-xl'>{service.title}</h2>
        <p className='text-gray-600 text-sm mt-1'>{service.description}</p>
        <a href={service.link} className='text-blue-500 mt-2 block'>
          Saiba Mais
        </a>
      </div>
    </div>
  )
}

export default Service
