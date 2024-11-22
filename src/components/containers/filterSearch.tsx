import { useState } from "react";
import { FilterSearchCard } from "../UIComponents";


const FilterSearch: React.FC = () => {

        // states management
        const [isRemote, setIsRemote] = useState(false);


    return(
        <div className="w-full h-auto my-0 mb-10 md:mb-0 lg:mb-0 md:my-10 lg:my-10 px-5 md:px-12 lg:px-14">
            <h1 className="w-full my-2 mb-5 text-4xl">Filter your search results</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5">

                <FilterSearchCard title="job title" placeholder="(e.g. Keywords. Position...)" className="w-40 md:w-56 lg:w-72">
                    <select name="jobTitle" className="bg-transparent w-full outline-none cursor-pointer">
                        <option value="product_designer">Product Designer</option>
                        <option value="backend_engineer">Backend Engineer</option>
                        <option value="frontend_engineer">Frontend Engineer</option>
                    </select>
                </FilterSearchCard>

                <FilterSearchCard title="LOcation" placeholder="(City, Country)" className="w-48">
                    <select name="location" className="bg-transparent w-full outline-none cursor-pointer">
                        <option value="product_designer">Ghana, Accra</option>
                        <option value="backend_engineer">Nigeria, Abuja</option>
                        <option value="frontend_engineer">England, London</option>
                    </select>
                </FilterSearchCard>

                <FilterSearchCard title="Distance" className="!bg-transparent !shadow-none !rounded-none !justify-start">
                    <form action="" className="w-full flex items-center justify-start md:space-x-1 lg:space-x-5">
                        <input type="range" min="1" max="100" className=" w-40 -ml-5 md:-ml-0 lg:-ml-0 shadow-2xl" id="myRange"/>
                        <span className="text-green-500">(20km)</span>
                    </form>
                </FilterSearchCard>

                <FilterSearchCard title="Budget($)" placeholder="(min-max)" className="rounded-3xl w-48 md:w-56 lg:w-80">
                    <select name="jobTitle" className="bg-transparent w-full outline-none cursor-pointer">
                        <option value="product_designer">8 000 - 10 000</option>
                        <option value="backend_engineer">10 000 - 15 000</option>
                        <option value="frontend_engineer">15 000 - 20 000</option>
                    </select>
                </FilterSearchCard>

                <FilterSearchCard title="Level" placeholder="(Junior, Medium, Senior)" className="w-40 md:w-56 lg:w-60">
                    <select name="jobTitle" className="bg-transparent w-full outline-none cursor-pointer">
                        <option value="product_designer">Junior</option>
                        <option value="backend_engineer">Medium</option>
                        <option value="frontend_engineer">Senior</option>
                    </select>
                </FilterSearchCard>

                <FilterSearchCard title="Project type" placeholder="(Long/short-term)" className="w-48 md:w-56 lg:w-60">
                    <select name="jobTitle" className="bg-transparent w-full outline-none cursor-pointer">
                        <option value="product_designer">Long</option>
                        <option value="backend_engineer">Short</option>
                    </select>
                </FilterSearchCard>

                <FilterSearchCard title="company size" className="w-40 md:w-56 lg:w-60">
                    <select name="jobTitle" className="bg-transparent w-full outline-none cursor-pointer">
                        <option value="product_designer">5 - 10</option>
                        <option value="backend_engineer">10 - 20</option>
                        <option value="frontend_engineer">20 - ...</option>
                    </select>
                </FilterSearchCard>

                <div className="md:w-[450px] flex flex-col sm:flex-col items-start md:flex-row lg:flex-row md:items-center lg:items-end justify-between lg:justify-start space-y-3 md:space-y-0 md:space-x-7 lg:space-x-0 lg:space-y-0">
                    <FilterSearchCard title="available" className="w-44 md:w-60 lg:w-48">
                        <select name="jobTitle" className="bg-transparent w-full outline-none cursor-pointer">
                            <option value="product_designer">Full time</option>
                            <option value="backend_engineer">Part Time</option>
                            <option value="frontend_engineer">Remote</option>
                            <option value="frontend_engineer">Hybrid</option>
                        </select>
                    </FilterSearchCard>

                    <div className="mb-5 flex items-center justify-between space-x-1 ">
                        <h2 className="font-extrabold uppercase">remote only</h2>
                        <div className={`w-8 h-5 ${isRemote ? 'bg-indigo-300' : 'bg-gray-200'} rounded-3xl relative cursor-pointer`} onClick={() => setIsRemote((prev) => !prev)}>
                            <p className={`w-5 h-5 bg-white rounded-full absolute ${isRemote ? 'right-0' : 'left-0'} top-0 border border-light-blue`}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterSearch;