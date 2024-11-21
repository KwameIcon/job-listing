import { ReactNode } from "react";

interface MainLayoutProps{
  children: ReactNode;
}



const MainLayout: React.FC<MainLayoutProps> = ({children}) => {

  return (
    <div className=' max-w-[1440px] m-auto h-auto bg-custom-light overflow-x-hidden scrollbar-none relative' >
      {children}
    </div>
  )
}

export default MainLayout