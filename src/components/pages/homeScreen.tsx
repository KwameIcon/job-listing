import { Jobs, Showcase, UserReviews } from "../containers"
import FilterSearch from "../containers/filterSearch"
import { Footer, MainLayout } from "../layout"
import {QuoteIcon} from '../../assets/quote';
import { Button, Card } from "../UIComponents";






function HomeScreen() {
  return (

    // main layout
    <MainLayout>


      {/* showcase container layout */}
      <Showcase/>


      {/* search by filter container layout */}
      <FilterSearch/>


      {/* jobs */}
      <Jobs/>


      <div className="w-[900px] m-auto h-[900px] bg-green-500 bg-opacity-10 rounded-br-gentle-rounded rounded-bl-sharp-rounded rounded-tl-gentle-rounded rounded-tr-gentle-rounded rotate-[30deg] absolute top-[1950px] -left-[650px]">
          <QuoteIcon className="fill-white w-44 absolute top-5 right-48 -z-10 rotate-[120deg]"/>
      </div>

      
      {/* user reviews */}
      <UserReviews/>


      {/* post job card */}
      <div className="mt-60 relative">
        <div className=" absolute -top-32 w-full flex justify-center">
            <Card className="w-8/12 m-auto h-40 mt-16 bg-[#96a5ff] flex items-center justify-between py-4 px-20">
            <div className="flex flex-col justify-center items-start space-y-2">
              <h5 className="text-xl text-white">Does your company needs great employees?</h5>
              <p className="text-sm">To post job offer, visit our subpage For Employer</p>
            </div>
            <Button className="bg-white w-32 text-[#96a5ff] hover:bg-gray-100">Post a job</Button>
          </Card>
        </div>


        {/* footer layout component */}
        <Footer/>
      </div>

    </MainLayout>
  )
}

export default HomeScreen