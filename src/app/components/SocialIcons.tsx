import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const icons = {
  id: 1,
  icon: <FaInstagram />,
}

export const SocialIcons = () => {
  return (
    <ul className='flex justify-center gap-4'>
      <li>
        <a href='#'>
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href='#'>
          <FaLinkedin />
        </a>
      </li>
    </ul>
  )
}
