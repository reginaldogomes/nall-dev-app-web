'use client'

interface TitleProps {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className='relative text-ascent-500 text-4xl after:bg-blue-500 after:w-16 after:h-16'>
      {text}
    </h1>
  )
}

export default Title
