import { ReactNode } from "react";


interface CardProps{
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}



const Card: React.FC<CardProps> = ({className, children, onClick}) => {

    return (
        <div className={`h-14 rounded-3xl shadow-xl bg-white flex items-center justify-center px-3 ${className}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card;