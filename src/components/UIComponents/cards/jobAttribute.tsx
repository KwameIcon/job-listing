import { ReactNode } from "react";

interface JobAttributeProps{
    children: ReactNode;
    attribute: string;
}




const JobAttribute: React.FC<JobAttributeProps> = ({children, attribute}) => {


    return(
        <div className="w-auto flex items-center justify-center space-x-3 mr-8">
            <div className="w-3 rounded-full text-light-blue overflow-hidden box-border text-sm">
                {children}
            </div>
            <div className="opacity-80 text-sm font-bold">
                {attribute}
            </div>
        </div>
    )
}

export default JobAttribute;