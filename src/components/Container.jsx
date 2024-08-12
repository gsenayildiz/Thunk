const Container = ({ children,desings }) => {
  return  <div className={`${desings} max-w-[1200px] mx-auto p-5 `}>{children}</div>
  
}

export default Container;
