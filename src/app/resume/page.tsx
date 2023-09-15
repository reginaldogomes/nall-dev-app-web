import { Section } from '../components/elements/Section'
import Title from '../components/elements/Title'

const desenvolvedor = {
  experiencia: [
    {
      cargo: 'Desenvolvedor Full Stack',
      empresa: 'Tech Solutions Ltda',
      periodo: 'Janeiro de 2018 - Presente',
      descricao:
        'Trabalhei como desenvolvedor full stack, participando no desenvolvimento de aplicações web utilizando tecnologias como HTML, CSS, JavaScript, Node.js e React.',
    },
    {
      cargo: 'Desenvolvedor Front-end',
      empresa: 'CodeMaster Studio',
      periodo: 'Julho de 2015 - Dezembro de 2017',
      descricao:
        'Fui responsável pelo desenvolvimento e manutenção de interfaces de usuário utilizando HTML, CSS e JavaScript. Colaborei com a equipe de design para criar experiências de usuário intuitivas e atraentes.',
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
      <Title text='Resume Page' />
      {desenvolvedor.experiencia.map((exp, index) => (
        <div key={index}>
          <h2>{exp.cargo}</h2>
          <p>{exp.empresa}</p>
          <p>{exp.periodo}</p>
          <p>{exp.descricao}</p>
        </div>
      ))}
    </Section>
  )
}
