import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
     path:'/',
     element:<Root/>,
     children:[
       {
         path:'/',
         element:<Home/>,

       }
     ]
    }
])
  return (
    <RouterProvider router={router}/>
  );
};

export default AppRoutes;