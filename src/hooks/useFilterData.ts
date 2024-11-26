import axios from "axios";
import { useQuery } from "react-query";

// filters types
 export interface FiltersProps {
    query: string;
    location: string;
    remoteOnly: string;
    employmentTypes: string;
    datePosted: string | null;
    nextPage?: string;
}





const fetchJobs = async(filters: FiltersProps) => {

    const {query, location, remoteOnly, employmentTypes, datePosted, nextPage} = filters;
    const baseUrl = "https://jobs-api14.p.rapidapi.com/v2/list";


    // conditionally include parameters
    const params: {[key: string]: string | undefined} = {};
    if(query) params.query = query
    if(location) params.location = location
    if(remoteOnly) params.remoteOnly = remoteOnly
    if(employmentTypes) params.employmentTypes = employmentTypes
    if(datePosted) params.datePosted = datePosted
    if(nextPage) params.nextPage = nextPage


        const options = {
            method: 'GET',
            url: baseUrl,
            params,
            headers: {
                'x-rapidapi-key': 'ca60a3ab3dmshf63a0f8d8db25a5p187e74jsn2ac8992df72e',
                'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
            }
        }

    const response = await axios.request(options);

    return response.data;
}


// useFetchFilterData hook
export const useFetchFilterData = (filters: FiltersProps) => {

    const isValidFilters = Object.values(filters).some((value) => value)

    return useQuery(
        ['jobs', filters], 
        () =>fetchJobs(filters), 
        {
            enabled: isValidFilters,
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            keepPreviousData: true
        }
    )
}