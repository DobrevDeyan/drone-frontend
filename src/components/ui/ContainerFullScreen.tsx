interface ContainerProps {
  children: React.ReactNode
}

const ContainerFullScreen: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-fill bg-slate-700">{children}</div>
}

export default ContainerFullScreen
