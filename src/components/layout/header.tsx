import { Logo, MenuButtons } from "../UIComponents";


const Header: React.FC = () =>{

    return(
        <div className="w-full p-10 px-16 flex justify-between items-center bg-transparent" >
            <Logo/>
            <MenuButtons/>
        </div>
    )
}

export default Header;