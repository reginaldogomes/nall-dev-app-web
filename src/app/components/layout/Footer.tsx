import { SocialIcons } from '../SocialIcons'

export const Footer = () => {
  return (
    <footer className='flex-col bg-primary-600 p-2 max-w-5xl mx-auto rounded items-center'>
      <SocialIcons />
      <p className='text-xs'>Footer</p>
    </footer>
  )
}
