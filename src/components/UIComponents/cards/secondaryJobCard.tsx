import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import JobSkillTag from './jobSkillTag';
import { JobProps } from "../../pages/homeScreen";



interface SecondaryCardProps{
    job: JobProps;
    className: string;
    color: string
}



const SecondaryCard: React.FC<SecondaryCardProps> = ({className, color, job}) => {



    return(
        <div className={`w-48 sm:w-48 md:w-72 lg:w-72 h-50 sm:h-50 md:h-60 lg:h-60 bg-indigo-200 overflow-hidden relative rounded-xl shadow-xl ${className}`} >
            <div className="absolute -top-[90px] lg:-top-[105px] z-0 w-[500px] h-72 bg-transparent shadow-deep-shadow origin-top-left transform rotate-[50deg] lg:rotate-45 rounded-tr-full rounded-tl-full " />
            <div className="absolute -top-24 lg:-top-28 -left-16 z-10 w-[500px] h-72 bg-transparent shadow-deep-shadow origin-top-left transform rotate-[50deg] lg:rotate-45 rounded-tr-full rounded-tl-full" />
            <div className="w-full h-full py-2 px-4 md:p-4 lg:p-4 flex flex-col justify-between">
                <div>
                    <div className={`w-full text-right font-mono text-${color}-600`}>{job.datePosted}</div>
                    <div className="w-full flex items-center justify-start space-x-2">
                        <span className="w-5 md:w-8 lg:w-8 h-5 md:h-8 lg:h-8 rounded-full bg-white flex items-center justify-center"> {job.image ? <img src= {job.image} alt="Google" className="w-11"/> : <FontAwesomeIcon icon={faUser} className='text-sm'/>} 
                        </span>
                        <span className={`text-sm font-light font-serif text-${color}-600 opacity-80`}>{job.companyName.slice(0, 30) + "..."}</span>
                    </div>
                    <div className={`w-full text-sm md:text-xl lg:text-xl font-bold opacity-80 text-${color}-600 my-1 md:my-0 lg:my-0`}>{job.title.slice(0, 22) + "..."}</div>
                    <div className={`text-normal md:tracking-widest lg:tracking-widest text-${color}-600 opacity-80 font-light`}>{job.salaryRange ? "Salary $"+job.salaryRange : "Salary N/A"}</div>
                    <div className="flex items-center justify-start space-x-4 mt-2">
                        <FontAwesomeIcon icon={faLocationDot} className='text-sm'/>
                        <span className={`text-${color}-600 text-xs`}>{job.employmentType}</span>
                    </div>
                </div>
                <div className='mt-7 w-full grid grid-cols-2 gap-2'>
                    {job.jobProvider.slice(0, 4).map((provider, i) => (
                        <JobSkillTag color= {color} key={i}>{provider.name}</JobSkillTag>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecondaryCard;
