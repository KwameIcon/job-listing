import { Jobs, Showcase, UserReviews } from "../containers"
import FilterSearch from "../containers/filterSearch"
import { Footer, MainLayout } from "../layout"
import {QuoteIcon} from '../../assets/quote';
import { Button, Card } from "../UIComponents";
import { useQuery } from "react-query";


// API
const url = "https://jobs-api14.p.rapidapi.com/v2/list?query=Web%20Developer&location=United%20States";
const options: RequestInit =  {
  method: 'GET',
	headers: {
		'x-rapidapi-key': 'be97cb80d9msh91e63daf024b31cp1fb892jsn9e6c0b959ba1',
		'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
	}
}



function HomeScreen() {

  const {data, isLoading, error} = useQuery('jobs', async () => {
    const response = await fetch(url, options);
    console.log(response.json());
  })



  return (

    // main layout
    <MainLayout>


      {/* showcase container layout */}
      <Showcase/>


      {/* search by filter container layout */}
      <FilterSearch/>


      {/* jobs */}
      <Jobs/>


      <div className="w-[900px] m-auto h-[900px] bg-green-500 bg-opacity-10 rounded-br-gentle-rounded rounded-bl-sharp-rounded rounded-tl-gentle-rounded rounded-tr-gentle-rounded rotate-[30deg] absolute top-[2400px] md:top-[2300px] lg:top-[1950px] -left-[750px] md:-left-[650px] lg:-left-[650px]">
          <QuoteIcon className="fill-white opacity-65 md:opacity-100 lg:opacity-100 w-44 absolute top-16 md:top-5 lg:top-5 right-20 md:right-48 lg:right-48 -z-10 rotate-[120deg]"/>
      </div>

      
      {/* user reviews */}
      <UserReviews/>


      {/* post job card */}
      <div className="mt-32 md:mt-48 h-max lg:mt-60 relative">
        <div className=" absolute -top-20 w-full flex justify-center">
            <Card className="w-11/12 md:w-8/12 lg:w-9/12 m-auto h-44 md:h-40 lg:h-40 bg-blue-300 flex items-center justify-center md:justify-center lg:justify-center flex-wrap py-4 px-20 space-y-5 md:space-y-0 lg:space-y-0 lg:space-x-24">
            <div className="flex flex-col justify-center items-start space-y-2">
              <h5 className="text-xl text-white text-center md:text-left lg:text-left">Does your company needs great employees?</h5>
              <p className="w-full text-sm text-center md:text-left lg:text-left">To post job offer, visit our subpage For Employer</p>
            </div>
            <Button className="w-32 !text-indigo-500 !bg-white hover:bg-gray-100">Post a job</Button>
          </Card>
        </div>


        {/* footer layout component */}
        <Footer/>
      </div>

    </MainLayout>
  )
}

export default HomeScreen