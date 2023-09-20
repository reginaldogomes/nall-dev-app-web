import { IconType } from 'react-icons'
import { FaReact, FaJs, FaHtml5 } from 'react-icons/fa'

import Title from '../elements/Title'
import { Section } from '../elements/Section'

interface Skill {
  title: string
  icon: IconType
}

const skillslist: Skill[] = [
  { title: 'HTML', icon: FaReact },
  { title: 'CSS', icon: FaJs },
  { title: 'JAVASCRIPT', icon: FaHtml5 },
  { title: 'Card 1', icon: FaReact },
  { title: 'Card 2', icon: FaJs },
  { title: 'Card 3', icon: FaHtml5 },
  { title: 'Card 1', icon: FaReact },
  { title: 'Card 2', icon: FaJs },
  { title: 'Card 3', icon: FaHtml5 },
  { title: 'Card 1', icon: FaReact },
  { title: 'Card 2', icon: FaJs },
  { title: 'Card 3', icon: FaHtml5 },
]

export const Skills = () => {
  return (
    <Section>
      <Title text='Skills' />
      <div className='grid grid-cols-3 gap-2'>
        {skillslist.map((card, index) => (
          <div
            key={index}
            className='bg-secondary-100 rounded-lg p-4 shadow-md flex flex-col items-center'
          >
            <card.icon className='text-3xl text-secondary-300 mb-2' />
            <h3 className='text-xl font-semibold'>{card.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  )
}
