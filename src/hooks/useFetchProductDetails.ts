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
      'x-rapidapi-key': '13139939e6mshcb6c98caa2ab43ap1a1d6fjsnf6a0ce30483c',
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