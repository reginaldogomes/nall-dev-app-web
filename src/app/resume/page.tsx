import { Section } from '../../components/elements/Section'
import Title from '../../components/elements/Title'

const desenvolvedor = {
  experiencia: [
    {
      cargo: 'Desenvolvedor Front-end Web',
      empresa: 'BH Solutions',
      periodo: 'Janeiro de 2018 - Presente',
      descricao:
        'Trabalhei como desenvolvedor full stack, participando no desenvolvimento de aplicações web utilizando tecnologias como HTML, CSS, JavaScript, Node.js e React. tecnologias como HTML, CSS, JavaScript, Node.js e React.',
    },
    {
      cargo: 'Desenvolvedor Front-end Web',
      empresa: 'Locaweb',
      periodo: 'Abril de 2015 - Dezembro de 2017',
      descricao:
        'Fui responsável pelo desenvolvimento e manutenção das interfaces de usuário utilizando HTML, CSS e JavaScript no site de comércio eletrônico da Locaweb. Também atuei com o deploy da aplicação em ambiente Azure.',
    },
    {
      cargo: 'Estagiário de Desenvolvimento',
      empresa: 'SoftTech Inc.',
      periodo: 'Março de 2014 - Junho de 2015',
      descricao:
        'Participei de projetos de desenvolvimento web, auxiliando na implementação de funcionalidades e na resolução de bugs. Adquiri experiência em HTML, CSS, e JavaScript durante esse período.',
    },
  ],
}

export default function Page() {
  return (
    <Section>
      <Title text='Experiência Profissional' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {desenvolvedor.experiencia.map((exp, index) => (
          <div key={index} className='grid gap-y-px bg-primary-500 p-4 rounded'>
            <h2>{exp.cargo}</h2>
            <p>{exp.empresa}</p>
            <p>{exp.periodo}</p>
            <p>{exp.descricao}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
