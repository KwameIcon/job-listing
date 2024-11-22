import { ReactNode } from "react";

interface JobAttributeProps{
    children: ReactNode;
    attribute: string;
}




const JobAttribute: React.FC<JobAttributeProps> = ({children, attribute}) => {


    return(
        <div className="w-auto flex items-center justify-center space-x-1 md:space-x-3 lg:space-x-3 mr-2 md:mr-8 lg:mr-8">
            <div className="w-3 rounded-full text-indigo-300 overflow-hidden box-border text-sm">
                {children}
            </div>
            <div className="opacity-80 text-sm font-bold">
                {attribute}
            </div>
        </div>
    )
}

export default JobAttribute;