import React, { useEffect, useState } from "react";
import { FilterSearchCard } from "../UIComponents";
import { FiltersProps, useFetchFilterData } from "../../hooks/useFilterData";

interface FilterSearchProps {
    filters: FiltersProps;
    setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

const FilterSearch: React.FC<FilterSearchProps> = ({ filters, setFilters }) => {
    // State management
    const [isRemote, setIsRemote] = useState(false);



    // Get jobs from useFetchFilterData hook
    const { data,} = useFetchFilterData(filters);



    // Filter function
    const handleFilterSearch = (name: string, value: string) => {
        setFilters((prev) => ({ ...prev, [name]: value }));
    };



    // Check if remote
    useEffect(() => {
        setFilters((prev) => ({ ...prev, remoteOnly: isRemote ? "true" : "false" }));
    }, [isRemote, setFilters]);




    return (
        <div className="w-full h-auto my-0 mb-10 md:mb-0 lg:mb-0 md:my-10 lg:my-10 px-5 md:px-12 lg:px-14">
            <h1 className="w-full my-2 mb-5 text-4xl">Filter your search results</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5">
                <FilterSearchCard
                    title="Job Title"
                    placeholder="(e.g. Keywords, Position...)"
                    className="w-40 md:w-56 lg:w-72"
                >
                    <select
                        name="jobTitle"
                        className="bg-transparent w-full outline-none cursor-pointer"
                        value={filters.query}
                        onChange={(e) => handleFilterSearch("query", e.target.value)}
                    >
                        {data?.jobs?.map((job: any) => (
                            <option key={job.id} value={job.title}>
                                {job.title}
                            </option>
                        ))}
                    </select>
                </FilterSearchCard>

                <FilterSearchCard title="Location" placeholder="(City, Country)" className="w-48">
                    <select
                        name="location"
                        className="bg-transparent w-full outline-none cursor-pointer"
                        value={filters.location}
                        onChange={(e) => handleFilterSearch("location", e.target.value)}
                    >
                        {data?.jobs?.map((job: any) => (
                            <option key={job.id} value={job.location}>
                                {job.location}
                            </option>
                        ))}
                    </select>
                </FilterSearchCard>

                <FilterSearchCard title="Date Posted" placeholder="5h ago" className="rounded-3xl w-48 md:w-56 lg:w-80">
                    <select
                        name="datePosted"
                        className="bg-transparent w-full outline-none cursor-pointer"
                        value={filters.datePosted ?? ""}
                        onChange={(e) => handleFilterSearch("datePosted", e.target.value)}
                    >
                        {data?.jobs?.map((job: any) => (
                            <option key={job.id} value={job.datePosted}>
                                {job.datePosted}
                            </option>
                        ))}
                    </select>
                </FilterSearchCard>

                <FilterSearchCard title="Employment Type" className="w-44 md:w-60 lg:w-48">
                    <select
                        name="employmentType"
                        className="bg-transparent w-full outline-none cursor-pointer"
                        value={filters.employmentTypes}
                        onChange={(e) => handleFilterSearch("employmentTypes", e.target.value)}
                    >
                        {data?.jobs?.map((job: any) => (
                            <option key={job.id} value={job.employmentType}>
                                {job.employmentType}
                            </option>
                        ))}
                    </select>
                </FilterSearchCard>

                <div className="md:w-[450px] flex flex-col sm:flex-col items-start md:flex-row lg:flex-row md:items-center lg:items-end justify-between lg:justify-start space-y-3 md:space-y-0 md:space-x-7 lg:space-x-0 lg:space-y-0">
                    <div className="mb-5 flex items-center justify-between space-x-1">
                        <h2 className="font-extrabold uppercase">Remote Only</h2>
                        <div
                            className={`w-8 h-5 ${isRemote ? "bg-indigo-300" : "bg-gray-200"} rounded-3xl relative cursor-pointer`}
                            onClick={() => setIsRemote((prev) => !prev)}
                        >
                            <p
                                className={`w-5 h-5 bg-white rounded-full absolute ${
                                    isRemote ? "right-0" : "left-0"
                                } top-0 border border-light-blue`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSearch;
