import Link from 'next/link'

type LinkProps = {
  href: string
  children: React.ReactNode
}

const LinkUrl = ({ href, children }: LinkProps) => {
  return (
    <Link
      href={href}
      className='bg-ascent-600 rounded p-2 w-max text-ascent-100'
    >
      {children}
    </Link>
  )
}

export default LinkUrl
