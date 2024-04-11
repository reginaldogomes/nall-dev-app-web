// components/MenuItem.tsx
interface MenuItemProps {
  href: string
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => (
  <a
    href={href}
    className='text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium'
  >
    {label}
  </a>
)

export default MenuItem
