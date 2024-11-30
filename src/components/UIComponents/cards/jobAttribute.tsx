import { ReactNode } from "react";

interface JobAttributeProps{
    children: ReactNode;
    attribute: string;
    className?: string;
}




const JobAttribute: React.FC<JobAttributeProps> = ({children, attribute, className}) => {


    return(
        <div className={`w-auto flex items-center justify-center mr-0 md:mr-5`}>
            <div className="text-indigo-300 flex items-center justify-center">
                {children}
            </div>
            <div className={`opacity-80 text-sm md:text-xl font-bold ${className}`}>
                {attribute}
            </div>
        </div>
    )
}

export default JobAttribute;