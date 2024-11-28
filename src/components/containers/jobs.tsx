import { Card, PrimaryJobCard } from "../UIComponents";
import { ThreeDot } from "react-loading-indicators";
import { FiltersProps, useFetchFilterData } from "../../hooks/useFilterData";

interface JobsProp {
    filters: FiltersProps;
    setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

const Jobs: React.FC<JobsProp> = ({ filters, setFilters }) => {


    // get data from fetch hook
    const { data, isLoading, isFetching } = useFetchFilterData(filters);

    // get jobs
    const jobs = data?.jobs || [];
    const jobCount = jobs.length;
    const nextPage = data?.nextPage || null;

    const handleNextPageFetch = () => {
        if (nextPage) {
            setFilters((prev) => ({ ...prev, nextPage }));
        }
    };


    // set data to local storage
    localStorage.setItem('jobs', JSON.stringify(jobs));

    return (
        <div className="w-full lg:w-9/12 m-auto p-4 md:p-4 lg:py-5 relative z-10">
            {/* Header text */}
            <div className="flex items-center justify-between">
                <p className="w-4/12 md:w-auto opacity-60">
                    We found {jobCount} jobs available for you:
                </p>
                <div>
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
                        <option value="1 hour ago">Ih ago</option>
                        <option value="1 day ago">1 day ago</option>
                        <option value="2 days ago">2 day ago</option>
                        <option value="3 days ago">3 day ago</option>
                        <option value="4 days ago">4 day ago</option>
                    </select>
                </div>
            </div>

            {/* Job listing */}
            <div>
                {isLoading ? (
                    <ThreeDot color="#32cd32" size="small" text="" textColor="" />
                ) : (
                    jobs.map((job: any) => (
                        <PrimaryJobCard key={job.id} job={job} isFetching = {isFetching}/>
                    ))
                )}
            </div>

            {/* Pagination */}
            <div className="w-full flex items-center justify-end space-x-1 text-xs pt-5">
                <Card
                    className="w-fit h-8 rounded-sm shadow-deep-shadow shadow-slate-300 font-bold cursor-pointer"
                    onClick={handleNextPageFetch}
                >
                    Next
                </Card>
            </div>
        </div>
    );
};

export default Jobs;
