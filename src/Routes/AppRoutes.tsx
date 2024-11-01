import { createBrowserRouter, RouterProvider } from "react-router-dom";
 
 
import App from "../App";
import Root from "../Root/Root";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
     path:'/',
     element:<Root/>,
     children:[
       {
         path:'/',
         element:<App/>,

       },
      
     ]
    }
])
  return (
    <RouterProvider router={router}/>
  );
};

export default AppRoutes;