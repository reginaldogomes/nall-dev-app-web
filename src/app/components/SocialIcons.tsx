import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export const SocialIcons = () => {
  return (
    <ul className='flex justify-center'>
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
