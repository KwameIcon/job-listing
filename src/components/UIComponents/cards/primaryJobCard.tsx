import Button from "../buttons/button";
import JobAttribute from "./jobAttribute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useJobDetails from "../../../utils/handleGetJobDetails";
import { JobProviderTag } from "..";
import { FiltersProps } from "../../../hooks/useFilterData";



// default logo if company logo not provided
const placeholderLogo = "https://via.placeholder.com/150?text=No+Logo";


// job provider types
export interface JobProvider {
  jobProvider: string;
  url: string;
}


// job types
export interface Job{
    id: string;
    title: string;
    company:string;
    description:string;
    image:string;
    location:string;
    employmentType:string;
    datePosted:string;
    salaryRange:string;
    jobProviders:JobProvider[];
}

// job card types
interface PrimaryJobCardProps {
    job:Job;
    isLoading: boolean;
    isFetching:boolean;
    filters: FiltersProps;
    setIsProductDetails: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedJob: React.Dispatch<React.SetStateAction<Job | undefined>>
    setRelatedJobs: React.Dispatch<React.SetStateAction<Job[] | undefined>>
}



const PrimaryJobCard: React.FC<PrimaryJobCardProps> = ({job, filters, isLoading, isFetching, setSelectedJob, setRelatedJobs, setIsProductDetails}) => {



    // Fn to return only digits from salary string
    function extractSalary(salary: string) {
        const match = salary.match(/(\d{1,3}(?:,\d{3})*)/);
        return match ? match[0] : null; 
    }


// Use the custom hook to get the job details
  const handleGetJobDetails = useJobDetails();
    
    // fetch job details
    const handleFetchDetail = (jobId: string, jobTitle: string) => {
        handleGetJobDetails(jobId, jobTitle, filters, setSelectedJob, setRelatedJobs, setIsProductDetails)
    };



    return(
        <div className={`w-full my-5 rounded-3xl ${isLoading || isFetching ? 'animate-pulse' : ''} shadow-xl bg-white p-3 md:p-5 lg:p-5 flex flex-col items-start justify-center space-y-3 md:space-y-1`}>

                <div className="w-full flex flex-wrap items-start justify-between font-bold text-sm md:space-y-0 md:text-2xl md:-mb-4">
                    <h1 className="w-full md:w-auto text-xl font-sans ">{job.title.length > 30 ? job.title.slice(0, 30) + '...' : job.title}</h1>
                    <span className="w-full md:w-auto flex items-center text-indigo-300 justify-between md:flex-col md:items-end font-normal md:font-bold">
                        <span className = {`font-medium text-xl`}>
                            {
                                job.salaryRange ? 
                                (<span>Salary <span className="font-Pacifico">{"$" + extractSalary(job.salaryRange)}</span></span>) :
                                (<span className="italic font-normal"> Salary N/A</span>)
                            }
                        </span>
                        <span className="font-medium text-sm">/Yearly</span>
                    </span>
                </div>

                <div className="w-full flex flex-wrap items-center justify-start space-x-3 my-2 ">
                    <JobAttribute attribute= {job.company && job.company.length > 25 ? job.company.slice(0, 25) + "..." : job.company}>
                        <img src= {job.image || placeholderLogo} alt= {`${job.company} logo`} className="w-10 mr-2 rounded-full md:w-12 object-contain -ml-1"/>
                    </JobAttribute>

                    <JobAttribute attribute={job.location.length > 25 ? job.location.slice(0, 25) + "..." : job.location} className="font-light !text-sm">
                        <FontAwesomeIcon icon={faLocationDot} className="w-2 !text-sm h-2 md:w-5 md:h-5 mr-1"/>
                    </JobAttribute>

                    <JobAttribute attribute={job.employmentType} className="font-light !text-sm">
                        <FontAwesomeIcon icon={faFile} className="w-2 !text-sm h-2 md:w-5 md:h-5 mr-1"/>
                    </JobAttribute>
                </div>
                <div className="w-full flex items-center justify-between pt-2">
                    <div className="grid grid-cols-2 gap-2 md:gap-x-5 md:flex md:items-center md:justify-center md:space-x-4 ">
                        {
                            job.jobProviders.slice(0, 4).map((provider, i) => (
                                <JobProviderTag url= {provider.url} className="!bg-gray-200 !text-indigo-400">{provider.jobProvider.length > 12 ? provider.jobProvider.slice(0, 12) + '...' : provider.jobProvider}</JobProviderTag>
                            ))
                        }
                    </div>
                    <Button className=" max-w-20 md:max-w-48 lg:max-w-48 font-extrabold" onClick={() => handleFetchDetail(job.id, job.title)} >View</Button>
                </div>
            
        </div>
    )
}

export default PrimaryJobCard;