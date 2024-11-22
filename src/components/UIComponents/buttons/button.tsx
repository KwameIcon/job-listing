import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
    className?: string;
}

const Button: React.FC<ButtonProps> = ({children, className }) => {
    return (
        <button className={`w-60 h-11 bg-indigo-400 hover:bg-indigo-500 rounded text-white ${className}`}>
            {children}
        </button>
    );
};

export default Button;
