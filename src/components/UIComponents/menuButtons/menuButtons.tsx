import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

// nav buttons array
const navButtons = ['For employers', 'Our clients', 'Blog'];

interface MenuType {
    title: string;
    current: boolean;
}

const MenuButtons: React.FC = () => {
    // State management
    const [menuBtns, setMenuBtns] = useState<MenuType[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Initialize menu buttons
    const initializeMenuBtns = () => {
        const menuButtons = navButtons.map((btn) => ({
            title: btn,
            current: false,
        }));
        setMenuBtns(menuButtons);
    };

    // Initialize buttons on component mount
    useEffect(() => {
        initializeMenuBtns();
    }, []); 

    // Handle page navigation
    const handleNavigation = (index: number) => {
        setMenuBtns((prevBtns) =>
            prevBtns.map((btn, i) => ({
                ...btn,
                current: i === index, 
            }))
        );
    };



    // toggle menu display on mobile 
    const toggleMenuDisplay = () => {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <div className={`relative z-50`}>
            <div className="absolute z-50 right-8 -top-8 lg:-pt-20 w-10 md:w-12  overflow-hidden cursor-pointer md:hidden">
                {!isMenuOpen ? <FontAwesomeIcon icon={faBars} className={`w-full h-full text-black`} onClick={toggleMenuDisplay}/> : 
                <FontAwesomeIcon icon={faTimes} className={`w-full h-full text-gray-100`} onClick={toggleMenuDisplay}/>}
            </div>
            <ul className={`fixed md:static md:flex md:items-center md:justify-start z-40 top-0 right-0 ${isMenuOpen ? 'bg-indigo-800 left-0 w-screen h-screen' : 'hidden'}`}>
                <div className = {`flex flex-col justify-start w-11/12 h-full mt-40 pl-5 space-y-4 text-xl text-gray-100 md:flex-row md:w-fit md:items-center md:justify-center md:space-x-5 md:pr-14 md:space-y-0 md:text-black md:mt-10 md:text-2xl`}>
                    {menuBtns.map((btn, i) => (
                        <li
                        key={i}
                        onClick={() => handleNavigation(i)}
                        className={`border-b border-white cursor-pointer ${
                            btn.current ? 'border-indigo-300' : 'border-transparent'
                        } hover:text-indigo-300`}
                    >
                        {btn.title}
                    </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}


export default MenuButtons;
