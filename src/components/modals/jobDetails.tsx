import { Button, JobProviderTag } from "../UIComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faClose, faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Job } from "../UIComponents/cards/primaryJobCard";
import useJobDetails from "../../utils/handleGetJobDetails";
import { useEffect, useRef } from "react";
import { FiltersProps } from "../../hooks/useFilterData";

// default logo if company logo not provided
const placeholderLogo = "https://via.placeholder.com/150?text=No+Logo";


// component types
interface JobDetailsProps {
    selectedJob:Job | undefined;
    filters: FiltersProps;
    relatedJobs: Job[] | undefined
    setIsProductDetails: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedJob: React.Dispatch<React.SetStateAction<Job | undefined>>
    setRelatedJobs: React.Dispatch<React.SetStateAction<Job[] | undefined>>
    // job:JobProps;
}



// job details component
const JobDetails: React.FC<JobDetailsProps> = ({filters, selectedJob, relatedJobs, setIsProductDetails, setSelectedJob, setRelatedJobs}) => {


    // close modal ref
    const cardRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null);

    // 
    const closeModalOnClick = (e: Event) => {
        const card = cardRef.current
        const container = containerRef.current;
        if((container && card) && (e.target !== card && e.target === container)){
            setIsProductDetails(false);
        }
    }


    // close modal
    useEffect(() => {
        window.addEventListener('click', closeModalOnClick)

        return(() => {
            window.removeEventListener('click', closeModalOnClick);
        })
    })


    // Fn to return only digits from salary string
    function extractSalary(salary: string) {
        const match = salary.match(/(\d{1,3}(?:,\d{3})*)/);
        return match ? match[0] : null; 
    }


// Use the custom hook to get the job details
  const handleGetJobDetails = useJobDetails();


    // get job details
    const handleFetchDetail = (jobId: string, jobTitle: string) => {
        setIsProductDetails(false);
        handleGetJobDetails(jobId, jobTitle, filters, setSelectedJob, setRelatedJobs, setIsProductDetails)
    }
    

    return(
        <div className="fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-85 overflow-hidden flex items-center justify-center p-2 py-4" ref={containerRef}>


            {/* card container */}
            <div className="w-full h-full md:w-11/12 md:h-full bg-white rounded-3xl relative p-5 overflow-scroll lg:overflow-hidden scrollbar-none lg:flex lg:flex-wrap lg:items-start lg:justify-center" ref={cardRef}>


            {/* close button */}
                <div className="absolute top-2 right-2 w-8 h-8  rounded-full cursor-pointer" onClick={() => setIsProductDetails(false)}>
                    <FontAwesomeIcon icon={faClose} className="w-full h-full text-black text"/>
                </div>


                {/* content */}

                {/* selected job details */}
                <div className="w-full lg:w-3/5 shrink-0 h-auto lg:h-full lg:overflow-hidden lg:overflow-y-scroll lg:scrollbar-none mt-9 lg:px-3">

                    <div className="w-full flex justify-between items-center gap-5 my-4">
                        <h1 className="w-7/12 text-2xl font-semibold break-words">
                        {selectedJob?.title}
                        </h1>
                        <Button className="w-5/12 text-sm font-bold">Apply Now</Button>
                    </div>

                    <div className="w-full flex items-center justify-start gap-2">

                        <div className="w-14 lg:w-32 h-14 shrink-0 flex items-center justify-center lg:h-28 overflow-hidden bg-gray-200 rounded-full">
                            <img src= {selectedJob?.image || placeholderLogo} alt={selectedJob?.company + 'Logo'} className="w-full h-full rounded object-contain" />
                        </div>

                        <div className="flex flex-wrap items-start justify-start space-x-2 my-2">

                            <div className="flex items-start justify-center gap-0">
                                <img src= {selectedJob?.image || placeholderLogo} alt="" className="w-7 h-7 rounded object-contain" />
                                <span className=" text-black font-bold">
                                    {selectedJob?.company}
                                </span>
                            </div>

                            <div className="flex items-center justify-start gap-2">
                                <FontAwesomeIcon icon={faLocationDot} className="w-4 text-indigo-300"/>
                                <span className=" text-black text-opacity-50">{selectedJob?.location}</span>
                            </div>

                            <div className="flex items-center justify-start gap-2">
                                <FontAwesomeIcon icon={faBriefcase} className="w-4 text-indigo-300"/>
                                <span className=" text-black text-opacity-50">{selectedJob?.employmentType}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="my-1 mt-4 text-xl text-black text-opacity-50">Job Description</h2>
                        <p className="leading-8 tracking-wide text-black text-opacity-55">
                            {selectedJob?.description}
                        </p>
                    </div>
                    <div className="my-3 grid grid-cols-1 gap-3 border-b">
                        <h2 className="mt-4 text-xl text-black text-opacity-50">Job Providers</h2>
                        <div className="w-full flex flex-wrap items-center justify-start gap-2 pb-5">
                            {selectedJob?.jobProviders.map((provider, i) => (
                                <JobProviderTag key={i} url= {provider.url} className=" bg-gray-100 text-indigo-500">{provider.jobProvider}</JobProviderTag>
                            ))}
                        </div>
                    </div>
                </div>


                {/* related jobs */}
                <div className="w-full lg:w-2/5 h-auto shrink-0 lg:overflow-hidden lg:overflow-y-scroll lg:scrollbar-none mt-16">
                    <p className="text-3xl text-black text-opacity-60 mb-3">Similar Jobs</p>
                    {/* cards */}
                    <div className="grid grid-cols-1 gap-3">
                        {/* card */}
                        {relatedJobs?.map((job) => (

                            <div className="h-48 border rounded-xl flex flex-col items-start justify-center p-5 overflow-hidden">
                                <div className="w-full flex flex-col items-center justify-between gap-y-2">
                                    <h2 className="w-full text-black text-opacity-55 text-sm flex items-center justify-start gap-2 mb-1">
                                        <span className="text-xl">
                                            {job.title.length > 30 ? job.title.slice(0, 30) + '...' : job.title}
                                        </span>
                                    </h2>
                                    <div className="w-full flex items-center justify-between gap-2 mb-1">
                                        <div className="w-14 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            <img src= {job.image || placeholderLogo} alt= {`${job.company} Logo`} className="w-full" />
                                        </div>
                                        <div className="flex flex-wrap items-center justify-start gap-2 md:gap-5 gap-y-1 text-sm">
                                            <div className="flex items-center justify-start gap-1">
                                                <span className=" text-black text-opacity-50">
                                                    {job.company.length > 15 ? job.company.slice(0, 15) + '...' : job.company}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-start gap-2">
                                                <FontAwesomeIcon icon={faLocationDot} className="w-4 text-indigo-300"/>
                                                <span className=" text-black text-opacity-50">
                                                    {job.location.length > 15 ? job.location.slice(0, 15) + '...' : job.location}
                                                </span>
                                            </div>
                                        </div>
                                        <Button className="text-sm font-bold !w-24 px-2 text-center" onClick={() => handleFetchDetail(job.id, job.title)}>View</Button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center gap-3 gap-y-1 mt-2">

                                    <div className="flex items-center justify-start gap-2">
                                        <FontAwesomeIcon icon={faBriefcase} className="w-4 text-indigo-300"/>
                                        <span className=" text-black text-opacity-50 text-sm">{job.employmentType.length > 10 ? job.employmentType.slice(0, 10) + '...' : job.employmentType}</span>
                                    </div>

                                    <div className="flex items-center justify-start gap-2">
                                        <FontAwesomeIcon icon={faDollarSign} className="w-4 text-indigo-300"/>
                                        <span className=" text-black text-opacity-50 text-sm">{job.salaryRange ? extractSalary(job.salaryRange) : 'N/A'}</span>
                                    </div>

                                </div>
                                <div className="mt-2 ml-2 tracking-widest text-black text-opacity-35 text-sm">
                                    {job.datePosted}
                                </div>
                            </div>))
                        }
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default JobDetails;