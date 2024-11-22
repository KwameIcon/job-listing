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

    return (
        <ul className="flex items-center justify-center space-x-3">
            {menuBtns.map((btn, i) => (
                <li
                    key={i}
                    onClick={() => handleNavigation(i)}
                    className={`cursor-pointer border-b-2 ${
                        btn.current ? 'border-indigo-300' : 'border-transparent'
                    } hover:text-indigo-300`}
                >
                    {btn.title}
                </li>
            ))}
        </ul>
    );
};

export default MenuButtons;
