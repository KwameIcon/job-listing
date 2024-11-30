import React, { useEffect, useState } from "react";
import { FilterSearchCard } from "../UIComponents";
import { FiltersProps } from "../../hooks/useFilterData";



// component types
interface FilterSearchProps {
    filters: FiltersProps;
    setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}


// component
const FilterSearch: React.FC<FilterSearchProps> = ({ filters, setFilters }) => {

    // State
    const [isRemote, setIsRemote] = useState(false);


    // Filter function
    const handleFilterSearch = (name: string, value: string) => {
        setFilters((prev) => ({ ...prev, [name]: value }));
    };



    // Check remote jobs
    useEffect(() => {
        setFilters((prev) => ({ ...prev, remoteOnly: isRemote ? "true" : "false" }));
    }, [isRemote, setFilters]);



    return (
        <div className="w-full h-auto my-0 mb-10 md:mb-0 lg:mb-0 md:my-10 lg:my-10 px-5 md:px-12 lg:px-14 relative z-0">
            <h1 className="w-full my-2 mb-5 text-3xl md:text-4xl">Filter your search results</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5">
                <div className="w-full md:w-56 lg:w-max">
                        <FilterSearchCard
                        title="Job Title"
                        placeholder="(e.g. Keywords, Position...)"
                        className="w-full md:w-56 lg:w-72"
                    >
                        <select
                            name="jobTitle"
                            className="bg-transparent w-full outline-none cursor-pointer"
                            value={filters.query}
                            onChange={(e) => handleFilterSearch("query", e.target.value)}
                        >
                            <option value="project manager">Project Manager</option>
                            <option value="software engineer">Software Engineer</option>
                            <option value="web developer">Web Developer</option>
                            <option value="accountant">Accountant</option>
                            <option value="data scientist">Data Scientist</option>
                            <option value="graphic designer">Graphic Designer</option>
                            <option value="teaching">Teaching</option>
                        </select>
                    </FilterSearchCard>
                </div>


                <div className="w-full md:w-56 lg:w-max">
                    <FilterSearchCard title="Location" placeholder="(City, Country)" className="w-full md:w-72 lg:w-60">
                        <select
                            name="location"
                            className="bg-transparent w-full outline-none cursor-pointer"
                            value={filters.location}
                            onChange={(e) => handleFilterSearch("location", e.target.value)}
                        >
                            <option value="united state">United State</option>
                            <option value="Canada">Canada</option>
                            <option value="Spain">Spain</option>
                            <option value="Britain">Britain</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                        </select>
                    </FilterSearchCard>
                </div>

                
                <div className="w-full md:w-56 lg:w-max">
                    <FilterSearchCard title="Employment Type" className="w-full md:w-72 lg:w-60">
                        <select
                            name="employmentType"
                            className="bg-transparent w-full outline-none cursor-pointer"
                            value={filters.employmentTypes}
                            onChange={(e) => handleFilterSearch("employmentTypes", e.target.value)}
                        >
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>
                            <option value="intern">Intern</option>
                            <option value="contractor">Contractor</option>
                        </select>
                    </FilterSearchCard>
                </div>

                <div className="md:w-[450px] flex flex-col items-start md:flex-row md:items-center lg:items-end justify-between lg:justify-start md:space-y-0 md:space-x-7 lg:space-x-0 lg:space-y-0">
                    <div className="mt-5 md:mb-5 flex items-center justify-between space-x-1">
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
