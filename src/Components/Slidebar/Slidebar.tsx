import { useState } from "react";
import { Link } from "react-router-dom";

const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSlidebar = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = ["/", "/about", "/contact", "/projects", "/resume"];
  return (
    <div className={`${isOpen ? "slidebar__expanded" : ""} slidebar `}>
      Slidebar
      <button onClick={() => toggleSlidebar()}>increase</button>
      <div className="slidebar__list">
        {menuItems.map((path, index) => (
          <Link key={index} to={path} className="slidebar__item">
            {path === "/"
              ? "Home"
              : path.slice(1).charAt(0).toUpperCase()+path.slice(2)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Slidebar;
