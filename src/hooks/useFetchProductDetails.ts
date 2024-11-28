import axios from "axios";
import { useQuery } from "react-query"



// fetch function
const fetchJobDetails = async(JOB_ID: string) =>{
  // API
  const options = {
    method: 'GET',
    url: 'https://jobs-api14.p.rapidapi.com/get',
    params: {
      id: `${JOB_ID}`,
      language: 'en_GB'
    },
    headers: {
      'x-rapidapi-key': 'f422163b6bmshf7c768d713a1505p19ee7ajsnb2679f1e4a75',
      'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
    }
  };


  const response =  await axios.request(options);
  return response.data;
}


// fetch data hook
export const useFetchJobDetails = (jobId:string) =>{
  const isValidId = !!jobId;
  return useQuery(['jobs', jobId], () => fetchJobDetails(jobId), 
  { 
    enabled: isValidId,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    keepPreviousData: true 
  }
  )
}