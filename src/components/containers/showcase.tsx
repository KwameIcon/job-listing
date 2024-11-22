import Header from "../layout/header"
import {Button, SecondaryCard} from "../UIComponents/"

// images
import Google from '../../assets/company logos/google.png'
import Amazon from '../../assets/company logos/amazon.png'
import Axoni from '../../assets/company logos/image-removebg-preview.png'
import Vodafone from '../../assets/company logos/vodafone.png'



// interface JobProps{
//     id: number;
//     time: string;
//     logo: string;
//     companyName: string;
//     jobTitle: string;
//     salaryRange: string;
//     workMode: string;
//     skills: string[];
// }


// dummy job data
const JOBS = [
    {
        id: 1,
        companyName: 'Google Ghana',
        jobTitle: 'Front-end Developer',
        logo: `${Google}`,
        time: '1d ago',
        salaryRange: '$10, 000 - $20, 000',
        workMode: 'Remote',
        skills: ['.net developer', 'React js', 'mssql', 'next js'],
        color: "cyan"

    },
    {
        id: 2,
        companyName: 'Axoni',
        jobTitle: 'Project Manager',
        logo: `${Axoni}`,
        time: '1h ago',
        salaryRange: '$15, 000 - $25, 000',
        workMode: 'office',
        skills: ['Communication Skills', 'Planning and Organization', 'Risk and Problem Managemen', 'Leadership and Team Management'],
        color: "indigo"

    },
    {
        id: 3,
        companyName: 'Vodafone Ghana',
        jobTitle: 'project designer',
        logo: `${Vodafone}`,
        time: '12d ago',
        salaryRange: '$9, 000 - $23, 000',
        workMode: 'office',
        skills: ['Creative and Conceptual Skills', 'Technical and Software Skills', 'Project Management and Organization', 'Communication and Presentation'],
        color: "yellow"

    },
    {
        id: 4,
        companyName: 'Amazon',
        jobTitle: 'Backend Engineer',
        logo: `${Amazon}`,
        time: '15 ago',
        salaryRange: '$10, 000 - $20, 000',
        workMode: 'Remote',
        skills: ['Python', 'MangoDB', 'Docker'],
        color: "purple"

    }
]



const Showcase: React.FC = () => {

    // states management
    // const [jobs, setJobs] = useState<JobProps[]>([{} as JobProps]);




  return (

    <div className="w-full min-h-full md:min-h-max lg:h-max bg-transparent relative overflow-hidden">

        {/* background design */}
        <div className="absolute -top-40 -right-[200px] w-custom-width rounded-tl-gentle-rounded rounded-bl-gentle-rounded rounded-br-sharp-rounded h-custom-height bg-white rotate-custom-rotate" />

        <div className="relative z-10" >
            {/* header component */}
            <Header/>

            {/* showcase content */}
            <div className="grid sm:grid md:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:flex  lg:flex-wrap lg:items-start lg:justify-between mt-0 sm:mt-0 md:mt-0 lg:mt-5 mx-5 sm:mx-5 md:mx-8 lg:mx-16" >

                {/* text info */}
                <div className="w-full sm:w-full md:w-11/12 lg:w-2/4 mt-8 sm:mt-8 md:mt-8 lg:mt-32 flex flex-col items-start justify-center space-y-5 sm:space-y-5 md:space-y-5 lg:space-y-8" >
                    <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-black" >Are you looking for your dream <span className="text-indigo-300" >job</span>?</h1>
                    <p className="text-2xl opacity-70 font-normal" >We can help you with that!</p>
                    <Button>Search a job</Button>
                </div>

                {/* jobs */}
                <div className="w-full sm:w-full md:w-full lg:w-2/4 flex items-center justify-center mt-10 lg:mt-0" >
                    <div className="grid grid-cols-2 gap-5">
                        {JOBS.map((job, index) => (
                            <SecondaryCard 
                                key={job.id} 
                                color={job.color} 
                                jobTitle= {job.jobTitle} 
                                logo= {job.logo} 
                                companyName= {job.companyName} 
                                time= {job.time} 
                                salaryRange= {job.salaryRange} 
                                workMode= {job.workMode} 
                                skills={job.skills}
                                className= {index < 2 ? "lg:ml-40" : ""}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase