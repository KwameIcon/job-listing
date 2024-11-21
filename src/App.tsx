import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "./components/pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen/>
  }
])

function App() {
  return (
    <div className=" w-screen h-screen" >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
