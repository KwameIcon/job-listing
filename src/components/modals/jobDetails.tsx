import { Button, JobSkillTag } from "../UIComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faClose, faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Job } from "../UIComponents/cards/primaryJobCard";
import { JobProps } from "../../pages/homeScreen";
import { handleGetJobDetails } from "../../utils/handleGetJobDetails";


// component types
interface JobDetailsProps {
    selectedJob:Job | undefined;
    relatedJobs: Job[] | undefined
    setIsProductDetails: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedJob: React.Dispatch<React.SetStateAction<Job | undefined>>
    setRelatedJobs: React.Dispatch<React.SetStateAction<Job[] | undefined>>
    job:JobProps;
}



// job details component
const JobDetails: React.FC<JobDetailsProps> = ({selectedJob, relatedJobs, setIsProductDetails, job, setSelectedJob, setRelatedJobs}) => {





    // get job details
    const handleFetchDetail = (jobId: String, jobTitle: string) => {
        handleGetJobDetails(jobId, jobTitle, setSelectedJob, setRelatedJobs, setIsProductDetails)
    }
    

    return(
        <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-40 z-20 flex items-center justify-center">

            {/* close modal button */}
            <div className="absolute top-6 right-12 w-7 h-7 bg-black cursor-pointer" onClick={() => setIsProductDetails(false)}>
                <FontAwesomeIcon icon={faClose} className="w-full h-full text-red-600"/>
            </div>

            {/* container */}
            <div className="w-10/12 h-5/6 mx-auto my-0 bg-white shadow-2xl p-5 sm:p-5 mdp-5 lg:p-10 grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:flex lg:items-start lg:justify-center rounded overflow-y-scroll sm:overflow-y-scroll scrollbar-none lg:overflow-hidden">

            {/* product details */}
                <div className="w-full sm:w-full md:w-full lg:w-3/5 shrink-0 h-auto sm:h-auto md:h-auto lg:h-full lg:overflow-hidden lg:overflow-y-scroll lg:scrollbar-none pr-1">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="w-56 text-2xl lg:text-3xl font-bold">{selectedJob?.title}</h1>
                        <Button className="w-3/12">Apply Now</Button>
                    </div>
                    <div className="flex items-center justify-start w-full">
                        <div className="w-28 lg:w-32 h-16 lg:h-28 overflow-hidden">
                            <img src= {selectedJob?.image} alt={selectedJob?.company.slice(0, 6) + "..."} className="w-full h-full rounded" />
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex items-center justify-start gap-1">
                                <img src= {selectedJob?.image} alt="" className="w-5" />
                                <span className=" text-black text-opacity-50">{selectedJob?.company}</span>
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
                        <h2 className="my-3 text-xl text-black text-opacity-50">Job Description</h2>
                        <p className="leading-8 tracking-wide text-black text-opacity-55">{selectedJob?.description}</p>
                    </div>
                    <div className="my-3 flex items-center justify-start gap-3">
                        {
                            selectedJob?.jobProviders.map((provider, i) => (
                                <JobSkillTag key={i} className="bg-indigo-100 text-indigo-500 rounded-md">{provider.jobProvider}</JobSkillTag>
                            ))
                        }
                    </div>
                </div>


                {/* related jobs */}
                <div className="w-full lg:w-2/5 h-full shrink-0 pl-5 lg:overflow-hidden lg:overflow-y-scroll lg:scrollbar-none mt-5 lg:mt-0">
                    <p className="text-xl text-black text-opacity-60">Similar Jobs</p>
                    {/* cards */}
                    <div className="grid grid-cols-1 gap-3">
                        {/* card */}
                        {relatedJobs?.map((job) => (
                            <div className="h-full border rounded-xl flex flex-col items-start justify-center p-5">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center justify-start gap-2 mb-1">
                                        <img src= {job.image} alt={job.company.slice(0, 6) + "..."} className="w-16" />
                                        <div className="grid grid-cols-1">
                                            <h2 className="w-full text-black text-opacity-55 text-sm flex items-center justify-start gap-2 mb-1">
                                                <span className="text-xl">{job.title.slice(0, 20)+"..."}</span>
                                            </h2>
                                            <div className="flex items-center justify-start gap-2 text-sm">
                                                <div className="flex items-center justify-start gap-1">
                                                    <img src= {job.image} alt={job.company.slice(0, 6) + "..."} className="w-8 -ml-3" />
                                                    <span className=" text-black text-opacity-50">{job.company.slice(0, 10)+"..."}</span>
                                                </div>
                                                <div className="flex items-center justify-start gap-2">
                                                    <FontAwesomeIcon icon={faLocationDot} className="w-4 text-indigo-300"/>
                                                    <span className=" text-black text-opacity-50">{job.location.slice(0, 10)+"..."}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="text-sm w-9 h-7" onClick={() => handleFetchDetail(job.id, job.title)}>View</Button>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="flex items-center justify-start gap-2">
                                        <FontAwesomeIcon icon={faBriefcase} className="w-4 text-indigo-300"/>
                                        <span className=" text-black text-opacity-50 text-sm">{job.employmentType}</span>
                                    </div>
                                    <div className="flex items-center justify-start gap-2">
                                        <FontAwesomeIcon icon={faDollarSign} className="w-4 text-indigo-300"/>
                                        <span className=" text-black text-opacity-50 text-sm">{job.salaryRange}</span>
                                    </div>
                                </div>
                                <div className="mt-1 -mb-3 tracking-[0.4rem] text-black text-opacity-45 text-[10px]">
                                    {job.datePosted}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JobDetails;