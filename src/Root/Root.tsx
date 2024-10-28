import { Outlet } from "react-router-dom";
 
import Footer from "../Components/Footer/Footer";
import Slidebar from "../Components/Slidebar/Slidebar";

const Root = () => {
  return (
    <div className="root">
      <Slidebar/>
       <Outlet/>
       <Footer/>
    </div>
  );
};

export default Root;