import Link from 'next/link' // Alterei o nome da importação para 'NextLink' para evitar conflito com o nome do seu componente

type LinkProps = {
  href: string
  children: React.ReactNode
}

const LinkUrl = ({ href, children }: LinkProps) => {
  return (
    <Link
      href={href}
      className='bg-ascent-600 rounded p-2 min-w-min text-ascent-100 uppercase'
    >
      {children}
    </Link>
  )
}

export default LinkUrl
