type SectionProps = {
  children: React.ReactNode
  bgColor?: string
}

export const Section = (props: SectionProps) => {
  const { bgColor, children } = props // Destructuring para obter a cor

  return (
    <section
      className={`${bgColor} flex-col content-center py-4 rounded text-center`}
    >
      {children}
    </section>
  )
}
