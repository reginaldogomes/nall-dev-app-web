import { IconType } from 'react-icons'
import { FaReact, FaJs, FaHtml5 } from 'react-icons/fa'

import Title from '../elements/Title'
import { Section } from '../elements/Section'

interface Skill {
  title: string
  icon: IconType
}

// const habilidadesProfissionais = {
//   frontEnd: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'],
//   backEnd: ['Node.js', 'Express', 'Python', 'Ruby', 'Java'],
//   bancoDeDados: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
//   cloud: ['AWS', 'Google Cloud Platform', 'Azure', 'Firebase'],
// }

const skillslist: Skill[] = [
  { title: 'HTML', icon: FaHtml5 },
  { title: 'CSS', icon: FaJs },
  { title: 'JAVASCRIPT', icon: FaHtml5 },
  { title: 'REACT', icon: FaReact },
  { title: 'NEXTJS', icon: FaJs },
  { title: 'TYPESCRIPT', icon: FaHtml5 },
  { title: 'NODEJS', icon: FaReact },
  { title: 'EXPRESS', icon: FaJs },
  { title: 'FASTIFY', icon: FaHtml5 },
  { title: 'NESTJS', icon: FaReact },
  { title: 'MONGODB', icon: FaJs },
  { title: 'POSTGRESQL ', icon: FaHtml5 },
]

export const Skills = () => {
  return (
    <section>
      <Title text='Skills' />
      <div className='grid grid-cols-4 gap-2'>
        {skillslist.map((card, index) => (
          <div
            key={index}
            className='rounded-lg p-4 shadow-md flex flex-col items-center'
          >
            <card.icon className='text-3xl text-primary-300 mb-2' />
            <h3 className='text-xl font-semibold'>{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
