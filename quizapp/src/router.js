import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Homepage from "./Page/Homepage/Homepage";
import Practise from "./Page/Practise/Practise";
import Test from "./Page/Test/Test";


const router =   createBrowserRouter([ 
    {
        path: "/",
        element: <Homepage />
    } ,
    {
        path: '/practise',
        element: <Practise />
    } , 
    {
        path: '/test' ,
        element: <Test />
    }
])

export default router