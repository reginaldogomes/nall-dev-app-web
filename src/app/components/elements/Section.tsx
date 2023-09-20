type SectionProps = {
  children: React.ReactNode
  color?: string
}

export const Section = (props: SectionProps) => {
  const { color, children } = props // Destructuring para obter a cor

  return (
    <section className={`${color} py-4 bg-primary-900 rounded`}>
      {children}
    </section>
  )
}
