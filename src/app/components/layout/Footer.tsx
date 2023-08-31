import { SocialIcons } from '../sections/SocialIcons'

export const Footer = () => {
  return (
    <footer className='flex-col gap-y-2 bg-primary-600 p-2 w-full md:max-w-5xl mx-auto rounded items-center'>
      <SocialIcons />
      <p className='text-xs text-center'>Footer22</p>
    </footer>
  )
}
