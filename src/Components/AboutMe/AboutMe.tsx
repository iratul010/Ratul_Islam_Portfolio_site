import img from "../../assets/images/ratul.png";
import { GiAchievement } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-me__container">
        <h4 className="about-me__details">A Bit About Me</h4>
        <h2 className="about-me__title">Passions & Pathways</h2>

        <div className="about-me__content">
          <div className="about-me__image">
            <img src={img} alt="Profile of Ratul Islam" />
          </div>
          <div className="about-me__info">
            <div className="about-me__stats">
              <div className="about-me__experience">
                <GiAchievement className="icon" />
                <h3>Experience</h3>
                <p>2 Year <MdOutlineCalendarMonth />
                </p>
                <p>Frontend Developer</p>
              </div>
              <div className="about-me__education">
                <RiGraduationCapFill className="icon" />
                <h3>Education </h3>
                <p><MdOutlineDone />Complete 
                </p>
                <p>Bachelor’s in Computer Engineering</p>
              </div>
            </div>
            <p className="about-me__description">
              I’ve completed my university studies with a strong focus on web
              development as part of my engineering journey. Honing my design
              skills and seeking valuable mentorship have always been
              priorities. With a solid foundation in both web development and
              design, I spent significant time studying UI design, followed by
              completing a 6-month web development course with Programming Hero.
              <br /> <br />
              Known for my motivation, friendliness, empathy, and determination,
              I am passionate about combining design and development. I find
              great satisfaction in exploring color theory and design
              principles. Looking ahead, I am excited to apply my skills, stay
              updated with the latest web development trends, and contribute to
              meaningful projects alongside other dedicated professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
