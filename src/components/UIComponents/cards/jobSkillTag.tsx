import { ReactNode } from "react";

interface JobSkillTagProps {
    children: ReactNode;
    color: string;
}



const JobSkillTag: React.FC<JobSkillTagProps> = ({children, color}) => {

    return (
        <div className={`p-1 bg-${color}-100 rounded-2xl text-xs text-${color}-600 flex items-center justify-center text-center`}>
            {children}
        </div>
    )
}

export default JobSkillTag;