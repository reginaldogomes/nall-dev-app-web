import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

import Title from '../elements/Title'

const skillslist = [
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
export const Skills = () => {
  return (
    <>
      <section>
        <Title text='Skills' />
        <ul className='flex justify-center gap-4'>
          {skillslist.map((item) => (
            <li key={item.id}>
              <a href={item.url} className='text-xl'>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
