import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Layout from "./Components/Layout"
import Home from "./Components/Home"

const App=()=> {
  const routes =createBrowserRouter([
    {path:"/",element:<Layout/>,
      children:[
        {index:true , element:<Home/>},
      ]
    }
  ],
{
    basename: "/3D-Portfolio" 
  }
)
  return (
    <>
     <RouterProvider router={routes}/>


    </>
  )
}

export default App
