import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import JobSkillTag from './jobSkillTag';


interface SecondaryCardProps{
    className?:string;
    color:string;
    time: string;
    logo: string;
    companyName: string;
    jobTitle: string;
    salaryRange: string;
    workMode: string;
    skills: string[];
}



const SecondaryCard: React.FC<SecondaryCardProps> = ({className, color, time, logo, companyName, jobTitle, salaryRange, workMode, skills}) => {

    return(
        <div className={`w-48 sm:w-48 md:w-72 lg:w-72 h-56 sm:h-56 md:h-72 lg:h-72 bg-${color}-200 overflow-hidden relative rounded-xl shadow-xl ${className}`} >
            <div className="absolute -top-[90px] lg:-top-[105px] z-0 w-[500px] h-72 bg-transparent shadow-deep-shadow origin-top-left transform rotate-[50deg] lg:rotate-45 rounded-tr-full rounded-tl-full " />
            <div className="absolute -top-24 lg:-top-28 -left-16 z-10 w-[500px] h-72 bg-transparent shadow-deep-shadow origin-top-left transform rotate-[50deg] lg:rotate-45 rounded-tr-full rounded-tl-full" />
            <div className="w-full h-full py-2 px-4 md:p-4 lg:p-4 flex flex-col justify-between">
                <div>
                    <div className={`w-full text-right font-mono text-${color}-600`}>{time}</div>
                    <div className="w-full flex items-center justify-start space-x-2">
                        <span className="w-5 md:w-8 lg:w-8 h-5 md:h-8 lg:h-8 rounded-full bg-white flex items-center justify-center"> <img src= {logo} alt="Google" className="w-11"/> 
                        </span>
                        <span className={`text-sm font-light font-serif text-${color}-600 opacity-80`}>{companyName}</span>
                    </div>
                    <div className={`w-full text-sm md:text-xl lg:text-xl font-bold opacity-80 text-${color}-600 my-1 md:my-0 lg:my-0`}>{jobTitle}</div>
                    <div className={`text-normal md:tracking-widest lg:tracking-widest text-${color}-600 opacity-80 font-light`}>{salaryRange}</div>
                    <div className="flex items-center justify-start space-x-4 mt-2">
                        <FontAwesomeIcon icon={faLocationDot} className='text-sm'/>
                        <span className={`text-${color}-600 text-xs`}>{workMode}</span>
                    </div>
                </div>
                <div className='mt-7 w-full grid grid-cols-2 gap-2'>
                    {skills.map((skill, i) => (
                        <JobSkillTag color= {color} key={i}>{skill}</JobSkillTag>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecondaryCard;