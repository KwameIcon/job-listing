import { useQuery } from "react-query"



// API
const url = 'https://jobs-api14.p.rapidapi.com/v2/list?query=Web%20Developer&location=United%20States&autoTranslateLocation=false&remoteOnly=false&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '63a01c2872msh0a8ec1e3eaca998p158ac1jsn59ff697a1142',
		'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
	}
};


// fetch function
const fetchJobs = async () => {
  const response =  await fetch(url, options);
  if(!response.ok){
    throw new Error(`${response.status}`);
  }
  return response.json();
}



// fetch data hook
export const useFetchData = () =>{
    return useQuery('jobs', fetchJobs, { staleTime: Infinity }
  )
}