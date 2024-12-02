
import { useState } from "react";
import { FiltersProps } from "../hooks/useFilterData";
import { Footer, MainLayout } from "../components/layout";
import { FilterSearch, Jobs, Showcase, UserReviews } from "../components/containers";
import { Button, Card } from "../components/UIComponents";



// home screen component
function HomeScreen() {


  // set default filter values
  const [filters, setFilters] = useState<FiltersProps>({
    query: 'Web Developer',
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
      <div className="w-full mt-32 md:mt-48 h-max lg:mt-60 relative">
        <div className=" absolute -top-24 md:-top-20 w-full flex justify-center px-1 md:px-0">
            <Card className="w-full md:w-9/12 lg:w-9/12 m-auto h-auto md:h-40 !bg-indigo-300 flex items-center justify-center md:justify-center flex-wrap py-4 px-1 md:px-20 space-y-4 md:space-y-0 lg:space-y-0 lg:space-x-24">
            <div className="flex flex-col justify-center items-start space-y-2">
              <h5 className="text-xl text-white text-center md:text-left lg:text-left">Does your company needs great employees?</h5>
              <p className="w-full text-sm text-center md:text-left lg:text-left">To post job offer, visit our subpage For Employer</p>
            </div>
            <Button className="w-32 !text-indigo-500 !bg-white !hover:bg-gray-200 text-xl font-bold">Post a job</Button>
          </Card>
        </div>

        {/* footer layout component */}
        <Footer/>
      </div>

    </MainLayout>
  )
}

export default HomeScreen