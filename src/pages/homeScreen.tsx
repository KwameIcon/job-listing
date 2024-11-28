
import { useState } from "react";
import { FiltersProps } from "../hooks/useFilterData";
import { Footer, MainLayout } from "../components/layout";
import { FilterSearch, Jobs, Showcase, UserReviews } from "../components/containers";
import { Button, Card } from "../components/UIComponents";


// job provider types
export interface JobProvider {
  jobProvider: string;
  url: string;
}



// job types
export interface JobProps{
  id: string;
  title:string;
  companyName: string;
  image: string;
  location: string;
  employmentType:string;
  datePosted:string;
  salaryRange: string;
  jobProviders: JobProvider[];
}



// home screen component
function HomeScreen() {


  // set default filter values
  const [filters, setFilters] = useState<FiltersProps>({
    query: 'project manager',
    location: 'United States',
    remoteOnly: 'false',
    employmentTypes: '',
    datePosted: null,
    nextPage: undefined
  })


  

  return (

    // main layout
    <MainLayout>


      {/* showcase container layout */}
      <Showcase filters={filters}/>


      {/* search by filter container layout */}
      <FilterSearch filters={filters} setFilters={setFilters}/>


      {/* jobs */}
      <Jobs filters={filters} setFilters={setFilters}/>

      
      {/* user reviews */}
      <UserReviews/>


      {/* post job card */}
      <div className="mt-32 md:mt-48 h-max lg:mt-60 relative">
        <div className=" absolute -top-20 w-full flex justify-center">
            <Card className="w-11/12 md:w-8/12 lg:w-9/12 m-auto h-44 md:h-40 lg:h-40 !bg-indigo-300 flex items-center justify-center md:justify-center lg:justify-center flex-wrap py-4 px-20 space-y-5 md:space-y-0 lg:space-y-0 lg:space-x-24">
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