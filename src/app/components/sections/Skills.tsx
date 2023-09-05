import { IconType } from 'react-icons'
import { FaReact, FaJs, FaHtml5 } from 'react-icons/fa'

import Title from '../elements/Title'

interface Skill {
  title: string
  icon: IconType
}

const skillslist: Skill[] = [
  { title: 'Card 1', icon: FaReact },
  { title: 'Card 2', icon: FaJs },
  { title: 'Card 3', icon: FaHtml5 },
]

// const skillslist = [
//   {
//     id: 1,
//     icon: <FaLinkedin />,
//     url: '#',
//   },
//   {
//     id: 2,
//     icon: <FaInstagram />,
//     url: '#',
//   },
//   {
//     id: 3,
//     icon: <FaGithub />,
//     url: '#',
//   },
// ]
export const Skills = () => {
  return (
    <>
      <section>
        <Title text='Skills' />
        {skillslist.map((card, index) => (
          <div
            key={index}
            className='bg-white rounded-lg p-4 shadow-md flex flex-col items-center'
          >
            <card.icon className='text-3xl text-blue-500 mb-2' />
            <h3 className='text-xl font-semibold'>{card.title}</h3>
          </div>
        ))}
      </section>
    </>
  )
}
