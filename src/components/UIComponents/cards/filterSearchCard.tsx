import { ReactNode } from "react";


interface FilterSearchCardProps {
    title: string;
    placeholder?: string;
    children: ReactNode;
    className?: string;
    childCardWidth?:number;
}




const FilterSearchCard: React.FC<FilterSearchCardProps> = ({title, placeholder, children, className, childCardWidth}) => {

    return(
        <div className={`w-max flex flex-col space-y-3`}>
            <div className="flex items-center justify-start space-x-4">
                <h2 className="uppercase font-extrabold">{title}</h2>
                <span className="font-light opacity-35 tracking-wider">{placeholder}</span>
            </div>
            <div className={`w-${childCardWidth} h-14 rounded-3xl shadow-xl bg-white flex items-center justify-center px-3 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default FilterSearchCard