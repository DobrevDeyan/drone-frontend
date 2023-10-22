interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto flex justify-between w-fill max-w-screen-xl">{children}</div>
}

export default Container
