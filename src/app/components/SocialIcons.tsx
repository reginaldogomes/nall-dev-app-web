import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const icons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url: '#',
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: '#',
  },
  {
    id: 3,
    icon: <FaGithub />,
    url: '#',
  },
]

export const SocialIcons = () => {
  return (
    <ul className='flex justify-center gap-4'>
      {icons.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.icon}</a>
        </li>
      ))}
    </ul>
  )
}
