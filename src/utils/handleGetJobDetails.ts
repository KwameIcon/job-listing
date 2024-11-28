import { Job } from "../components/UIComponents/cards/primaryJobCard";



// function
export const handleGetJobDetails = (
    jobId: String, jobTitle: string, setSelectedJob: React.Dispatch<React.SetStateAction<Job | undefined>>, setRelatedJobs: React.Dispatch<React.SetStateAction<Job[] | undefined>>, setIsProductDetails :React.Dispatch<React.SetStateAction<boolean>>
    ) => {

    if (!jobId) {
            console.error("Invalid job ID provided");
            alert("Invalid job Id Provided");
            return;
        }

        try {
            // get jobs from localstorage
            let storedJobs = (localStorage.getItem('jobs'))
            let jobObject = (storedJobs ? JSON.parse(storedJobs) : null);

            // get selected job from jobs
            const job = jobObject?.find((job:{id:string}) => job.id === jobId);
            setSelectedJob(job);

            // get related jobs
            const relatedJobs = jobObject?.filter((job: {title:string}) => job.title.includes(jobTitle));


            setRelatedJobs(relatedJobs);
            setIsProductDetails(true);


        } catch (error) {
            console.error("Error retrieving data", error);
        }
        
}