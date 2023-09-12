type SectionProps = {
  children: React.ReactNode
}

export const Section = (props: SectionProps) => {
  return <section className='py-4'>{props.children}</section>
}
