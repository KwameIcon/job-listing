import { ReactNode } from "react";
import { Link } from "react-router-dom";

// component types
interface JobSkillTagProps {
    children: ReactNode;
    color?: string;
    className?: string;
    url: string;
}


// component
const JobProviderTag: React.FC<JobSkillTagProps> = ({children, color, className, url}) => {


    return (
        <Link to={url} target="_blank" rel="noopener noreferre" className={`p-1 bg-cyan-100 bg-opacity-70 rounded text-xs md:text-sm ${color} font-bold flex items-center justify-center text-center ${className} cursor-pointer`}>
            {children}
        </Link>
    )
}

export default JobProviderTag;