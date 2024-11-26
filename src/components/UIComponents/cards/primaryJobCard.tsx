import Button from "../buttons/button";
import JobAttribute from "./jobAttribute";
import JobSkillTag from "./jobSkillTag";

// images
import Axoni from '../../../assets/company logos/image-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { JobProps } from "../../pages/homeScreen";



// job card types
interface PrimaryJobCardProps {
    job:JobProps;
}



const PrimaryJobCard: React.FC<PrimaryJobCardProps> = ({job}) => {



    // Fn to return only digits from salary string
    function extractSalary(salary: string) {
        const match = salary.match(/(\d{1,3}(?:,\d{3})*)/);
        return match ? match[0] : null; 
    }



    return(
        <div className="w-full my-5 rounded-3xl shadow-xl bg-white p-3 md:p-5 lg:p-5 flex flex-col items-start justify-center space-y-1">
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
                        <JobSkillTag color="gray" className="text-indigo-300">{provider.name}</JobSkillTag>
                    ))}
                </div>
                <Button className=" max-w-32 md:max-w-48 lg:max-w-48 font-extrabold">View</Button>
            </div>
        </div>
    )
}

export default PrimaryJobCard;