interface TitleProps {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className='text-ascent-500 text-4xl after:'>{text}</h1>
}

export default Title
