import { ThreeDot } from "react-loading-indicators";
import Header from "../layout/header"
import { JobProps } from "../pages/homeScreen";
import {Button, SecondaryCard} from "../UIComponents/"




interface ShowcaseProps {
    jobs: JobProps[];
    isLoading: boolean;
}



const Showcase: React.FC<ShowcaseProps> = ({jobs, isLoading}) => {




    // display only 4 items 
    const limitedJobs = jobs.slice(0, 4);




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
                        {isLoading ? 
                            <ThreeDot color="#32cd32" size="small" text="" textColor="" />
                        :
                            limitedJobs.map((job, index) => (
                                <SecondaryCard 
                                    key={job.id} 
                                    color={index === 0 ? 'cyan' : index === 1 ? 'indigo' : index === 2 ? 'yellow' : 'purple'} 
                                    job={job}
                                    className= {index < 2 ? "lg:ml-16" : ""}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase