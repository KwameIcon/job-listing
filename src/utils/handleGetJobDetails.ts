import { useQueryClient } from 'react-query';
import { Job } from "../components/UIComponents/cards/primaryJobCard";
import { FiltersProps } from '../hooks/useFilterData';

// Custom hook to get job details and related jobs from the cache
const useJobDetails = () => {
  const queryClient = useQueryClient();

  const handleGetJobDetails = (
    jobId: string,
    jobTitle: string,
    filters: FiltersProps,
    setSelectedJob: React.Dispatch<React.SetStateAction<Job | undefined>>,
    setRelatedJobs: React.Dispatch<React.SetStateAction<Job[] | undefined>>,
    setIsProductDetails: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!jobId) {
      console.error("Invalid job ID provided");
      alert("Invalid job Id Provided");
      return;
    }

    try {
      const cachedData = queryClient.getQueryData<{ jobs: Job[] }>(['jobs', filters]);

      if (cachedData && Array.isArray(cachedData.jobs)) {
        const cachedJobs = cachedData.jobs;

        // Get the selected job
        const job = cachedJobs.find((job) => job.id === jobId);
        setSelectedJob(job);

        // Get related jobs by filtering jobs that match the jobTitle
        const relatedJobs = cachedJobs.filter((job) =>
          job.title.includes(jobTitle)
        );

        setRelatedJobs(relatedJobs);
        setIsProductDetails(true);
      } else {
        console.error("Jobs not found or invalid format in cache");
        alert("Jobs data not available or invalid format in cache");
      }
    } catch (error) {
      console.error("Error retrieving data", error);
    }
  };

  return handleGetJobDetails;
};

export default useJobDetails;
