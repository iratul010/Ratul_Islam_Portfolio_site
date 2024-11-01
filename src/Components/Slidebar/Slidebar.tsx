import { useEffect, useState } from "react";
 
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
  id: string;
  icon: JSX.Element;
}

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeToggle, setIsThemeToggle] = useState(false);
  const menuItems: MenuItem[] = [
    { id: "home", icon: <IoHomeOutline /> },
    { id: "about", icon: <HiOutlineUser /> },
    { id: "skills", icon: <GiSkills /> },
    { id: "projects", icon: <GoFileSubmodule /> },
    { id: "contacts", icon: <MdContactPhone /> },
  ];
  const toggleSlidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleTheme = () => {
    const newThemeToggle = !isThemeToggle;
    console.log(newThemeToggle);
    setIsThemeToggle(newThemeToggle);
    localStorage.setItem("themeToggle", newThemeToggle.toString());
  };
  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeToggle");
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
          {menuItems.map((menuItem, index) => (
            <button
              key={index}
              onClick={() => handleScrollToSection(menuItem.id)}
              className="slidebar__item"
            >
              {isOpen ? (
                menuItem.id.charAt(0).toUpperCase() + menuItem.id.slice(1)
              ) : (
                <span className="slidebar__icons">{menuItem.icon}</span>
              )}
            </button>
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

/**import { useEffect, useState } from "react";
import { LuArrowRightFromLine, LuArrowLeftFromLine } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillSun } from "react-icons/ai";

interface MenuItem {
  id: string;
  icon: JSX.Element;
}

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeToggle, setIsThemeToggle] = useState(false);

  const menuItems: MenuItem[] = [
    { id: "home", icon: <IoHomeOutline /> },
    { id: "about", icon: <HiOutlineUser /> },
    { id: "skills", icon: <GiSkills /> },
    { id: "projects", icon: <GoFileSubmodule /> },
    { id: "contacts", icon: <MdContactPhone /> },
  ];

  const toggleSlidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newThemeToggle = !isThemeToggle;
    setIsThemeToggle(newThemeToggle);
    localStorage.setItem("themeToggle", newThemeToggle.toString());
  };

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("themeToggle");
    if (savedTheme !== null) {
      setIsThemeToggle(JSON.parse(savedTheme));
    }
  }, []);

  return (
    <div className={`${isOpen ? "slidebar__expanded" : ""} slidebar`}>
      <div className="slidebar__container">
        <button onClick={toggleSlidebar} className="btn btn-slider">
          {isOpen ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
        </button>
        <div className="slidebar__menus">
          {menuItems.map((menuItem, index) => (
            <button
              key={index}
              onClick={() => handleScrollToSection(menuItem.id)}
              className="slidebar__item"
            >
              {isOpen ? (
                menuItem.id.charAt(0).toUpperCase() + menuItem.id.slice(1)
              ) : (
                <span className="slidebar__icons">{menuItem.icon}</span>
              )}
            </button>
          ))}
        </div>
        <div className="slidebar__setting">
          <button
            onClick={toggleTheme}
            className="btn btn-slider slidebar__themeToggle"
          >
            {isThemeToggle ? <AiFillSun /> : <BsMoonStarsFill />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
 */