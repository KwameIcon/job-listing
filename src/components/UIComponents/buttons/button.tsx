import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, className, onClick }) => {
    return (
        <button className={`w-60 h-11 bg-indigo-400 hover:bg-indigo-500 rounded text-white ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
