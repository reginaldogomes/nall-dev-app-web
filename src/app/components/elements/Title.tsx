'use client'

interface TitleProps {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className='text-primary-400 text-4xl'>{text}</h1>
}

export default Title
