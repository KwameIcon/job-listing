import { ReactNode } from "react";

interface MainLayoutProps{
  children: ReactNode;
}



const MainLayout: React.FC<MainLayoutProps> = ({children}) => {

  return (
    <div className=' max-w-8xl m-auto h-auto bg-custom-light overflow-x-hidden scrollbar-none' >
      {children}
    </div>
  )
}

export default MainLayout