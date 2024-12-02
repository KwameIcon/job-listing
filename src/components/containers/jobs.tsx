import { Card, PrimaryJobCard } from "../UIComponents";
import { FiltersProps, useFetchFilterData } from "../../hooks/useFilterData";
import { JobDetails } from "../modals";
import { useState } from "react";
import { Job } from "../UIComponents/cards/primaryJobCard";
import { renderJobs } from "../../utils/renderJobs";

// jobs component types
interface JobsProp {
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

// component
const Jobs: React.FC<JobsProp> = ({ filters, setFilters }) => {

    // get data from fetchFilterData hook
    const { data, isLoading, isFetching, isError, error } = useFetchFilterData(filters);

    // type casting for error
    const typedError = error as { message: string } | null;

    // states 
    const [isProductDetails, setIsProductDetails] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | undefined>();
    const [relatedJobs, setRelatedJobs] = useState<Job[] | undefined>();


    // get jobs
    const jobs = data?.jobs || [];
    const jobCount = jobs.length;
    const nextPage = data?.nextPage || null;


    
    // handle pagination
    const handleNextPageFetch = () => {
        if (nextPage) {
            setFilters((prev) => ({ ...prev, nextPage }));
        }
    };



    return (
        <div className="w-full m-auto -mt-5 md:mt-5 py-4 px-2 md:p-4 lg:py-5 relative z-20">
            {/* Header text */}
            <div className="w-10/12 m-auto flex flex-col mb-3 md:flex-row md:items-center md:justify-between space-y-3 md:px-10 lg:px-0">
                <p className=" w-full md:w-6/12 text-left opacity-60">
                    We found {jobCount} jobs available for you:
                </p>
                <div className="w-full md:w-6/12 text-right md:text-right">
                    <span className="opacity-60">Sort by: </span>
                    <select
                        name="date_of_publication"
                        className="font-bold bg-transparent outline-none cursor-pointer"
                        value={filters.datePosted ?? ""}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                datePosted: e.target.value,
                            }))
                        }
                    >
                        <option>Date of Publication</option>
                        <option value="1 hour ago">1h ago</option>
                        <option value="1 day ago">1 day ago</option>
                        <option value="2 days ago">2 days ago</option>
                        <option value="3 days ago">3 days ago</option>
                        <option value="4 days ago">4 days ago</option>
                    </select>
                </div>
            </div>

            {/* Job listing */}
            {renderJobs({
                isLoading,
                isError,
                error: typedError,
                jobs,
                children: (
                    <div className="lg:w-9/12 m-auto">
                        {jobs.map((job: Job) => (
                            <PrimaryJobCard
                                key={job.id}
                                filters={filters}
                                setSelectedJob={setSelectedJob}
                                setIsProductDetails={setIsProductDetails}
                                setRelatedJobs={setRelatedJobs}
                                isLoading={isLoading}
                                isFetching={isFetching}
                                job={job}
                            />
                        ))}
                    </div>
                ),
            })}

            {/* Pagination */}
            <div className="w-full lg:w-9/12 flex items-center justify-end pt-5 m-auto">
                <Card
                    className="w-24 h-9 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold cursor-pointer"
                    onClick={handleNextPageFetch}
                >
                    Next
                </Card>
            </div>

            {isProductDetails && (
                <JobDetails
                filters={filters}
                    setIsProductDetails={setIsProductDetails}
                    selectedJob={selectedJob}
                    relatedJobs={relatedJobs}
                    setRelatedJobs={setRelatedJobs}
                    setSelectedJob={setSelectedJob}
                />
            )}
        </div>
    );
};

export default Jobs;
