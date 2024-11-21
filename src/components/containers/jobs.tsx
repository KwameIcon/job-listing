import { PrimaryJobCard } from "../UIComponents";


const Jobs: React.FC = () => {

    return(
        <div className="w-9/12 m-auto">

            {/* header text */}
            <div className="flex items-center justify-between">
                <p className="opacity-60">We found 25 jobs available for you: </p>
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
            <PrimaryJobCard/>
            <PrimaryJobCard/>
            <PrimaryJobCard/>
            <PrimaryJobCard/>
            <PrimaryJobCard/>
        </div>
    )
}

export default Jobs;