import { ThreeDot } from "react-loading-indicators";
import Header from "../layout/header"
import {Button, SecondaryCard} from "../UIComponents/"
import { FiltersProps, useFetchFilterData } from "../../hooks/useFilterData";
import { useEffect, useState } from "react";
import { JobProps } from "../../pages/homeScreen";

// component types
interface ShowcaseProps{
    filters: FiltersProps
}


// component
const Showcase: React.FC<ShowcaseProps> = ({filters}) => {

  // states
  const [jobs, setJobs] = useState<JobProps[]>([]);

    // fetch jobs
  const {data, isLoading, isFetching} = useFetchFilterData(filters);

  // const myJobs = localStorage.getItem('jobs');


 useEffect(() => {
  if (data?.jobs) {
    const getJobs: JobProps[] = data.jobs.map((job: any) => ({
      id: job.id,
      title: job.title,
      companyName: job.company,
      image: job.image,
      location: job.location,
      employmentType: job.employmentType,
      datePosted: job.datePosted,
      salaryRange: job.salaryRange,
      jobProviders: Array.isArray(job.jobProviders) ? job.jobProviders.map((provider: any) => ({
        jobProvider: provider.jobProvider ?? "N/A",
        url: provider.url ?? "#",
      }))
      : [],
    }));
    setJobs(getJobs);
  }
}, [data]);


    // display only 4 items 
    const limitedJobs = jobs.slice(0, 4);




  return (

    <div className="w-full h-fit bg-transparent relative py-5">

        {/* background design */}
        <div className="absolute md:-top-56 lg:-top-40 md:-right-[200px] md:w-[750px] lg:w-custom-width md:h-[850px] lg:h-custom-height md:rounded-tl-gentle-rounded md:rounded-bl-gentle-rounded md:rounded-br-sharp-rounded md:bg-white md:rotate-custom-rotate" />

        <div className="relative z-10" >
            {/* header component */}
            <Header/>

            {/* showcase content container */}
            <div className="grid grid-cols-1 lg:flex lg:items-start lg:justify-between mt-0 md:mt-5 mx-5 md:mx-8 lg:mx-16" >

                {/* text info */}
                <div className="w-full md:w-11/12 lg:w-2/4 mt-8 lg:mt-24 flex flex-col items-start justify-center space-y-5 lg:space-y-8" >
                    <h1 className="text-4xl md:text-6xl custom:text-5xl font-black" >Are you looking for your dream <span className="text-indigo-300" >job</span>?</h1>
                    <p className="text-xl md:text-2xl: opacity-70 font-normal" >We can help you with that!</p>
                    <Button>Search a job</Button>
                </div>

                {/* jobs */}
                <div className="w-full lg:w-2/4 flex items-center justify-center mt-10 lg:mt-0" >
                    <div className="w-full md:w-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                              {limitedJobs.map((job, index) => {
                                const bgColor =
                                  index === 0
                                    ? "bg-cyan-200"
                                    : index === 1
                                    ? "bg-indigo-200"
                                    : index === 2
                                    ? "bg-yellow-200"
                                    : "bg-purple-200";

                                const color =
                                  index === 0
                                    ? "text-cyan-600"
                                    : index === 1
                                    ? "text-indigo-600"
                                    : index === 2
                                    ? "text-yellow-600"
                                    : "text-purple-600";

                                return (
                                  <SecondaryCard
                                    key={job.id}
                                    bgColor={bgColor}
                                    color={color}
                                    job={job}
                                    className={index < 2 ? "lg:ml-16" : ""}
                                    isFetching={isFetching}
                                    isLoading={isLoading}
                                  />
                                );
                              })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase