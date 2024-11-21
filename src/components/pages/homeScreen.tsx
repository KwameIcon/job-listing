import { Jobs, Showcase } from "../containers"
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


      <div className="w-[900px] m-auto h-[1000px] bg-green-500 bg-opacity-10 rounded-br-gentle-rounded rounded-bl-sharp-rounded rounded-tl-gentle-rounded rounded-tr-gentle-rounded rotate-[30deg] absolute top-[2000px] -left-[650px]">
          <QuoteIcon className="fill-white w-48 absolute top-20 right-28 z-10 rotate-[120deg]"/>
      </div>

      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repudiandae incidunt adipisci laudantium qui, voluptas ullam saepe necessitatibus nisi vel quasi expedita maiores perferendis pariatur! Est amet doloremque mollitia suscipit!</h1>

    </MainLayout>
  )
}

export default HomeScreen