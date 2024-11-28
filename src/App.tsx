import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ReactQueryDevtools} from 'react-query/devtools'
import { HomeScreen } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen/>
  }
])

function App() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden scrollbar-none" >
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen = {false} position="bottom-left" />
    </div>
  );
}

export default App;
