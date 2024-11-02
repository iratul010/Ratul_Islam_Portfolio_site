import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Skills = () => {
  const frontSkills = [
    "CSS3",
    "SASS",
    "Tailwind",
    "React Js",
    "javascript JS",
    "Redux",
    "Typescript",
  ];
  const backSkills = ["Node Js", "Express Js", "Firebase", "MongoDB"];

  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <h4 className="skills__subtitle">See My</h4>
        <h2 className="skills__title">Proficiency</h2>
        <div className="skills__content">
          <div className="skills__section skills__section--frontend">
            <h3 className="skills__section-title">Frontend</h3>
            <ul className="skills__list">
              {frontSkills.map((item, index) => (
                <li className="skills__item" key={index}>
                  <IoMdCheckmarkCircleOutline className="skills__item-icon"/> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills__section skills__section--backend">
            <h3 className="skills__section-title">Backend</h3>
            <ul className="skills__list">
              {backSkills.map((item, index) => (
                <li className="skills__item" key={index}>
                  <IoMdCheckmarkCircleOutline className="skills__item-icon" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
