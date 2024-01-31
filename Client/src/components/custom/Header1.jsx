

const Header1 = ({children, className}) => {
  return (
    <h1 className={`${className} dark:text-white text-3xl font-bold`}>{children}</h1>
  )
}

export default Header1