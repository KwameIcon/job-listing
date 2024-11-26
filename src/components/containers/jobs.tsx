import { Card, PrimaryJobCard } from "../UIComponents";
import { ThreeDot } from "react-loading-indicators";
import { FiltersProps, useFetchFilterData } from "../../hooks/useFilterData";

interface JobsProp {
    filters: FiltersProps;
    setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

const Jobs: React.FC<JobsProp> = ({ filters, setFilters }) => {
    const { data, isLoading } = useFetchFilterData(filters);

    const jobs = data?.jobs || []; // Default to an empty array if jobs is undefined
    const jobCount = jobs.length;
    const nextPage = data?.nextPage || null;

    const handleNextPageFetch = () => {
        if (nextPage) {
            setFilters((prev) => ({ ...prev, nextPage }));
        }
    };

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
                        {jobs.map((job: any) => (
                            <option key={job.id} value={job.datePosted}>
                                {job.datePosted}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Job listing */}
            <div>
                {isLoading ? (
                    <ThreeDot color="#32cd32" size="small" text="" textColor="" />
                ) : (
                    jobs.map((job: any) => (
                        <PrimaryJobCard key={job.id} job={job} />
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
