import { Logo, MenuButtons } from "../UIComponents";


const Header: React.FC = () =>{

    return(
        <div className="w-full p-2 sm:p-2 md:p-4 pt-3 sm:pt-3 md:pt-3 lg:p-10 px-3 sm:px-3 md:px-5 lg:px-16 flex justify-between items-center bg-transparent" >
            <Logo/>
            <MenuButtons/>
        </div>
    )
}

export default Header;