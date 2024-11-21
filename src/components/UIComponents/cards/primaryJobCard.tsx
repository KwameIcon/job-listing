import Button from "../buttons/button";
import JobAttribute from "./jobAttribute";
import JobSkillTag from "./jobSkillTag";

// images
import Axoni from '../../../assets/company logos/image-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faLocationDot } from "@fortawesome/free-solid-svg-icons";



const PrimaryJobCard: React.FC = () => {

    return(
        <div className="w-full my-5 rounded-3xl shadow-xl bg-white p-5 flex flex-col items-start justify-center space-y-1">
            <div className="w-full flex items-center justify-between font-bold text-2xl">
                <h1>Front-End Developer</h1>
                <span>5 000 - 10 000$</span>
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <JobAttribute attribute="Oliv">
                        <img src= {Axoni} alt="Oliv" />
                    </JobAttribute>

                    <JobAttribute attribute="Remote">
                        <FontAwesomeIcon icon={faLocationDot}/>
                    </JobAttribute>

                    <JobAttribute attribute="Full time">
                        <FontAwesomeIcon icon={faFile}/>
                    </JobAttribute>
                </div>
                <span className="text-light-blue font-medium">/Monthly</span>
            </div>
            <div className="w-full flex items-center justify-between pt-2">
                <div className="flex items-center justify-center space-x-4">
                    <JobSkillTag color="gray" className="text-light-blue">Ethereum</JobSkillTag>
                    <JobSkillTag color="gray" className="text-light-blue">Web Design</JobSkillTag>
                    <JobSkillTag color="gray" className="text-light-blue">JavaScript</JobSkillTag>
                    <JobSkillTag color="gray" className="text-light-blue">Solidity</JobSkillTag>
                </div>
                <Button className="font-extrabold">View</Button>
            </div>
        </div>
    )
}

export default PrimaryJobCard;