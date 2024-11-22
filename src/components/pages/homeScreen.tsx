import { Jobs, Showcase, UserReviews } from "../containers"
import FilterSearch from "../containers/filterSearch"
import { MainLayout } from "../layout"
import {QuoteIcon} from '../../assets/quote';






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


      <div className="w-[900px] m-auto h-[1000px] bg-green-500 bg-opacity-10 rounded-br-gentle-rounded rounded-bl-sharp-rounded rounded-tl-gentle-rounded rounded-tr-gentle-rounded rotate-[30deg] absolute top-[1950px] -left-[650px]">
          <QuoteIcon className="fill-white w-44 absolute top-5 right-48 -z-10 rotate-[120deg]"/>
      </div>

      
      {/* user reviews */}
      <UserReviews/>

    </MainLayout>
  )
}

export default HomeScreen