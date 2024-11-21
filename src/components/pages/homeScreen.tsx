import { Jobs, Showcase } from "../containers"
import FilterSearch from "../containers/filterSearch"
import { MainLayout } from "../layout"

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

    </MainLayout>
  )
}

export default HomeScreen