import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Rootlayout from "./Components/Rootlayout"


let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Rootlayout/>}>
        <Route path="/home" element={<Home/>}></Route>
         <Route path="/product" element={<Product/>}></Route>
    </Route>
))

function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
