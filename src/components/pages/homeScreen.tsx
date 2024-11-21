import { Showcase } from "../containers"
import FilterSearch from "../containers/filterSearch"
import { MainLayout } from "../layout"

function HomeScreen() {
  return (
    <MainLayout>
      <Showcase/>
      <FilterSearch/>
    </MainLayout>
  )
}

export default HomeScreen