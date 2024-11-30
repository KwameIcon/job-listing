import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { JobProps } from "../../../pages/homeScreen";

import JobProviderTag from "./jobProviderTag";
const placeholderLogo = "https://via.placeholder.com/150?text=No+Logo";


interface SecondaryCardProps{
    job: JobProps;
    className: string;
    color?: string
    bgColor?: string;
    isLoading: boolean;
    isFetching:boolean;
}



const SecondaryCard: React.FC<SecondaryCardProps> = ({className, color, bgColor, job, isFetching, isLoading}) => {



    // Fn to return only digits from salary string
    function extractSalary(salary: string) {
        const match = salary.match(/(\d{1,3}(?:,\d{3})*)/);
        return match ? match[0] : null; 
    }



    return(
        <div className={`w-11/12 m-auto md:w-72 custom:w-52 xl:w-72 h-50 md:h-60 custom:h-64 xl:h-60 ${bgColor} overflow-hidden relative rounded-xl shadow-xl ${className}`} >

            <div className="absolute -top-[90px] lg:-top-[105px] z-0 w-[500px] h-72 bg-transparent shadow-deep-shadow origin-top-left transform rotate-[50deg] lg:rotate-45 rounded-tr-full rounded-tl-full " />
            <div className="absolute -top-24 lg:-top-28 -left-16 z-10 w-[500px] h-72 bg-transparent shadow-deep-shadow origin-top-left transform rotate-[50deg] lg:rotate-45 rounded-tr-full rounded-tl-full" />

            <div className="w-full h-full py-2 px-4 md:p-4 lg:p-4 flex flex-col justify-between relative z-20">
                <div>
                    <div className={`w-full text-right font-mono ${color}`}>{job.datePosted || 'Now'}</div>
                    <div className="w-full flex items-center justify-start space-x-2">
                        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center"> 
                            <img src= {job.image || placeholderLogo} alt={`${job.companyName} Logo`} className="w-full rounded-full"/>
                        </span>
                        <span className={`font-serif ${color} opacity-80`}>{job.companyName.length > 25 ? job.companyName.slice(0, 25) + "..." : job.companyName}</span>
                    </div>
                    <div className={`w-full text-sm md:text-xl lg:text-xl font-bold opacity-80 ${color} my-1 md:my-0 lg:my-0`}>{job.title.length > 20 ? job.title.slice(0, 20) + "..." : job.title}</div>
                    <div className={` w-full text-normal ${color} opacity-80 font-light flex flex-wrap items-center justify-between`}>
                        <span>{job.salaryRange ? '$' + extractSalary(job.salaryRange) : 'N/A'}</span>
                        <div className="flex items-center justify-start space-x-4 mt-2">
                            <FontAwesomeIcon icon={faLocationDot} className='text-sm'/>
                            <span className={`${color} text-xs`}>{job.employmentType}</span>
                        </div>
                    </div>
                </div>
                <div className='mt-7 w-full grid grid-cols-2 gap-2'>
                    {job.jobProviders.slice(0, 4).map((provider, i) => (
                        <JobProviderTag key={i} className={`md:text-xs`} color= {color} url= {provider.url} >{provider.jobProvider.length > 10 ? provider.jobProvider.slice(0, 10) + "..." : provider.jobProvider}</JobProviderTag>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecondaryCard;
