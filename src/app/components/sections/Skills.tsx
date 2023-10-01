import { IconType } from 'react-icons'
import { FaReact, FaJs, FaHtml5, FaDocker, FaCss3Alt } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsGit } from 'react-icons/bs'
import { IoLogoJavascript } from 'react-icons/io'

import Title from '../elements/Title'

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
  { title: 'CSS', icon: FaCss3Alt },
  { title: 'JAVASCRIPT', icon: IoLogoJavascript },
  { title: 'REACT', icon: FaReact },
  { title: 'NEXTJS', icon: TbBrandNextjs },
  { title: 'TYPESCRIPT', icon: FaHtml5 },
  { title: 'NODEJS', icon: FaReact },
  { title: 'EXPRESS', icon: FaJs },
  { title: 'FASTIFY', icon: FaHtml5 },
  { title: 'NESTJS', icon: FaReact },
  { title: 'MONGODB', icon: FaJs },
  { title: 'POSTGRESQL ', icon: FaHtml5 },
  { title: 'Docker ', icon: FaDocker },
  { title: 'Git ', icon: BsGit },
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
