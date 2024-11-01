import profile from "../../assets/images/ratul.png";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegHandPointRight } from "react-icons/fa6";

import resume from "../../../public/file/Ratul Resume.pdf";
const Home = () => {
  //   window.addEventListener("load", () => {
  //     document.querySelectorAll(".home__img--circle").forEach(circle => {
  //         circle.classList.add("home__img--circle-loaded");
  //     });
  // });

  return (
    <div className="home__container" id="home">
      <div className="home__text">
        <h1 className="home__heading--one">
          <span className="home__heading--one-icon">
            <FaRegHandPointRight />
          </span>
          Ratul Islam
        </h1>
        <h3 className="home__heading--three">Frontend Developer</h3>
        <div className="home__social--link">
          <a
            className=""
            href="https://github.com/iratul010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <VscGithubInverted />
          </a>
          <a
            className=""
            href="https://www.linkedin.com/in/ratul-islam-19545618b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="home__about--text">
          Driven by a passion for crafting innovative React web applications
          that elevate commercial success.
        </p>
        <a
          href={resume}
          download="resume.pdf"
          className="btn  home__btn-resume"
        >
          Resume
        </a>
      </div>
      <div className="home__profile">
        <img src={profile} alt="Own Img" className="home__img" />
        <span className="home__img--circle-1 home__img--circle"></span>
        <span className="home__img--circle-2 home__img--circle"></span>
        <span className="home__img--circle-3 home__img--circle"></span>
        <span className="home__img--circle-4 home__img--circle"></span>
        <span className="home__img--circle-5 home__img--circle"></span>
        <span className="home__img--circle-6 home__img--circle"></span>
        <span className="home__img--circle-7 home__img--circle"></span>
      </div>
    </div>
  );
};

export default Home;
