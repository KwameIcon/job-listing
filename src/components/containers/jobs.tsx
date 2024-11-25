import { useEffect, useState } from "react";
import { useFetchPaginatedData } from "../../hooks/useFetchPaginatedData";
import { Card, PrimaryJobCard } from "../UIComponents";
import Pagination from "./pagination";
import { JobProps } from "../pages/homeScreen";
import { ThreeDot } from "react-loading-indicators";




// // jobs types
// interface JobsProps {
//     jobs: JobProps[];
// }





const Jobs: React.FC = () => {

    // state management
    const [jobs, setJobs] = useState<JobProps[]>([]);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const nextPageArr: string[] = [];



    // get jobs from useFetchPaginatedData hook
    const {data, refetch, isLoading} = useFetchPaginatedData(nextPage)

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
      jobProvider: Array.isArray(job.jobProviders) ? job.jobProviders.map((provider: any) => ({
        name: provider.jobProvider ?? "N/A",
        url: provider.url ?? "#",
      }))
      : [],
    }));
    setJobs(getJobs);
    setNextPage(data.nextPage);
    nextPageArr.push(data.nextPage);
  }
}, [data, nextPage]);



    // 
    const handleNextPageFetch = (navigation: string) => {
        if(navigation === 'prev'){
            const prevPage = nextPageArr.pop() ?? null;
            setNextPage(prevPage);
        }else {
            setNextPage(nextPage)
        }

        refetch()
    }




    return(
        <div className="w-full lg:w-9/12 m-auto p-4 md:p-4 lg:py-5 relative z-10">

            {/* header text */}
            <div className="flex items-center justify-between">
                <p className="w-4/12 md:w-auto opacity-60">We found 25 jobs available for you: </p>
                <div>
                    <span className="opacity-60">Sort by: </span>
                    <select name="date_of_publication" className="font-bold bg-transparent outline-none cursor-pointer">
                        <option value="1d">Date of Publication</option>
                        <option value="1d">1d ago</option>
                        <option value="1d">This week</option>
                        <option value="1d">2 weeks</option>
                        <option value="1d">A month</option>
                    </select>
                </div>
            </div>


            {/* job listing */}
            <div>
                {isLoading ? 
                    <ThreeDot color="#32cd32" size="small" text="" textColor="" />
                :
                    jobs.map((job) => (
                        <PrimaryJobCard job={job} isLoading= {isLoading}/>
                    ))
                }
            </div>

            {/* pagination */}
            <div className="w-full flex items-center justify-end space-x-1 text-xs pt-5">
                <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold cursor-pointer" onClick={() => handleNextPageFetch('prev')}>
                    Previous
                </Card>
                <Card className=" w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold cursor-pointer" onClick={() => handleNextPageFetch('next')}>
                    Next
                </Card>
            </div>
        </div>
    )
}

export default Jobs;