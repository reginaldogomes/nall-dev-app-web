import { FC } from 'react'

interface ButtonProps {
  text: string
  onClick: () => void
  className?: string
}

export const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-ascent-600 hover:bg-ascent-500 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
