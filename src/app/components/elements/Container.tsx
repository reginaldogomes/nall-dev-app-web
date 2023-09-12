type ContainerProps = {
  children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
  return <div className='container mx-auto py-4'>{props.children}</div>
}
