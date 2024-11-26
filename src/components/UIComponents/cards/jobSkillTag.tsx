
interface JobSkillTagProps {
    children: string;
    color: string;
    className?: string;
}



const JobSkillTag: React.FC<JobSkillTagProps> = ({children, color, className}) => {

    return (
        <div className={`p-1 bg-${color}-100 rounded-2xl text-xs text-${color}-600 flex items-center justify-center text-center ${className}`}>
            {children}
        </div>
    )
}

export default JobSkillTag;