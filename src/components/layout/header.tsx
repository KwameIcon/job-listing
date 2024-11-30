import { Logo, MenuButtons } from "../UIComponents";


const Header: React.FC = () =>{

    return(
        <div className="w-full px-3 md:px-5 lg:px-16 flex justify-between items-center bg-transparent" >
            <Logo className="md:mt-10"/>
            <MenuButtons/>
        </div>
    )
}

export default Header;