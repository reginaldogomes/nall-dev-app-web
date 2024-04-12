import Link from 'next/link'

// components/MenuItem.tsx
interface MenuItemProps {
  href: string
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => (
  <Link
    href={href}
    className='text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium'
  >
    {label}
  </Link>
)

export default MenuItem
