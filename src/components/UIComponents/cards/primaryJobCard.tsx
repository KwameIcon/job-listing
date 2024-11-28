import Button from "../buttons/button";
import JobAttribute from "./jobAttribute";
import JobSkillTag from "./jobSkillTag";

// images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { JobProps } from "../../../pages/homeScreen";
import { useState } from "react";
import { JobDetails } from "../../modals";
import { handleGetJobDetails } from "../../../utils/handleGetJobDetails";
import LoadCardElement from "../../loaders/loadCardElement";

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
    job:JobProps;
    isFetching:boolean;
}



const PrimaryJobCard: React.FC<PrimaryJobCardProps> = ({job, isFetching}) => {

    // states management
    // const [jobs, setJobs] = useState([]);
  // state management
    const [isProductDetails, setIsProductDetails] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job>();
    const [relatedJobs, setRelatedJobs] = useState<Job[]>();



    // Fn to return only digits from salary string
    function extractSalary(salary: string) {
        const match = salary.match(/(\d{1,3}(?:,\d{3})*)/);
        return match ? match[0] : null; 
    }

    
    // fetch job details
    const handleFetchDetail = (jobId: string, jobTitle: string) => {
        handleGetJobDetails(jobId,jobTitle, setSelectedJob, setRelatedJobs, setIsProductDetails)
    };


    return(
        <div className="w-full my-5 rounded-3xl shadow-xl bg-white p-3 md:p-5 lg:p-5 flex flex-col items-start justify-center space-y-1">
            {isFetching ? (<LoadCardElement/>) : (<>
                <div className="w-full flex items-center justify-between font-bold text-sm md:text-2xl">
                    <h1>{job.title}</h1>
                    <span>{job.salaryRange ? "Salary $"+extractSalary(job.salaryRange) : "Salary: N/A"}</span>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        <JobAttribute attribute={job.companyName}>
                            {job.image ? <img src= {job.image} alt="Oliv" /> : <FontAwesomeIcon icon={faUser}/>}
                        </JobAttribute>

                        <JobAttribute attribute={job.location}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                        </JobAttribute>

                        <JobAttribute attribute={job.employmentType}>
                            <FontAwesomeIcon icon={faFile}/>
                        </JobAttribute>
                    </div>
                    <span className="text-indigo-300 font-medium">/Yearly</span>
                </div>
                <div className="w-full flex items-center justify-between pt-2">
                    <div className="flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-4">
                        {job.jobProviders.map((provider, i) => (
                            <JobSkillTag color="gray" key={i} className="text-indigo-300">{provider.jobProvider.trim().slice(0, 12) + "..."}</JobSkillTag>
                        ))}
                    </div>
                    <Button className=" max-w-32 md:max-w-48 lg:max-w-48 font-extrabold" onClick={() => handleFetchDetail(job.id, job.title)}>View</Button>
                   </div>
            </>)}


            {/* job details modal */}
            {isProductDetails && <JobDetails setIsProductDetails={setIsProductDetails} selectedJob={selectedJob} relatedJobs={relatedJobs} job={job} setRelatedJobs={setRelatedJobs} setSelectedJob={setSelectedJob}/>}
        </div>
    )
}

export default PrimaryJobCard;