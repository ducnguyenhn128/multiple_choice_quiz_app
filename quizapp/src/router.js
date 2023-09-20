import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Homepage from "./Page/Homepage/Homepage";
import Practise from "./Page/Practise/Practise";
import Test from "./Page/Test/Test";
import OfficialTest from "./Page/OfficialTest/OfficialTest";


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
    } ,
    {
        path: 'officialtest',
        element: <OfficialTest />
    }
])

export default router