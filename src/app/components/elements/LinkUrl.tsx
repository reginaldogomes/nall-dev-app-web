import Link from 'next/link' // Alterei o nome da importação para 'NextLink' para evitar conflito com o nome do seu componente

type LinkProps = {
  href: string
  children: React.ReactNode
}

const LinkUrl = ({ href, children }: LinkProps) => {
  return (
    <Link
      href={href}
      className='flex bg-ascent-600 rounded p-2 text-ascent-100 uppercase text-sm'
    >
      {children}
    </Link>
  )
}

export default LinkUrl
