import { ReactNode } from "react";


interface CardProps{
    className?: string;
    children: ReactNode;
}



const Card: React.FC<CardProps> = ({className, children}) => {

    return (
        <div className={`h-14 rounded-3xl shadow-xl bg-white flex items-center justify-center px-3 ${className}`}>
            {children}
        </div>
    )
}

export default Card;