import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuArrowRightFromLine } from "react-icons/lu";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillSun } from "react-icons/ai";
interface MenuItem {
  path: string;
  icon: JSX.Element;
}

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeToggle, setIsThemeToggle] = useState(false);
  const menuItems:MenuItem[] = [
    { path: "/", icon: <IoHomeOutline /> },
    { path: "/about", icon: <HiOutlineUser /> },
    { path: "/skills", icon: <GiSkills /> },
    { path: "/projects", icon: <GoFileSubmodule /> },
    { path: "/contacts", icon: <MdContactPhone /> },
  ];
  const toggleSlidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleTheme = () => {
    const newThemeToggle = !isThemeToggle;
    console.log(newThemeToggle)
    setIsThemeToggle(newThemeToggle);
    localStorage.setItem('themeToggle', newThemeToggle.toString()); 
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeToggle');
    if (savedTheme !== null) {
      setIsThemeToggle(JSON.parse(savedTheme)); // Retrieve from localStorage
    }
  }, []);
  
  return (
    <div className={` ${isOpen ? "slidebar__expanded" : ""} slidebar `}>
      <div className="slidebar__container">
        <button onClick={() => toggleSlidebar()} className="btn btn-slider">
          {isOpen ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
        </button>
        <div className="slidebar__menus">
          {menuItems.map((pathObj, index) => (
            <Link key={index} to={pathObj.path} className="slidebar__item">
              {isOpen ? (
                pathObj.path === "/" ? (
                  "Home"
                ) : (
                  pathObj.path.slice(1).charAt(0).toUpperCase() +
                  pathObj.path.slice(2)
                )
              ) : (
                <span className="slidebar__icons">{pathObj.icon}</span>
              )}
            </Link>
          ))}
        </div>
        <div className="slidebar__setting">
          <button
            onClick={() => toggleTheme()}
            className=" btn btn-slider slidebar__themeToggle"
          >
            {isThemeToggle ? <AiFillSun /> : <BsMoonStarsFill />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
