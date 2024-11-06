import taskManagerImage from "../../assets/images/task-manager.jpeg";
import eCommerceImage from "../../assets/images/e-commerce.webp";
import chatAppImage from "../../assets/images/real-time-chat.jpg";
import weatherDashboardImage from "../../assets/images/weather-dashboard.png";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useEffect } from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Task Manager App",
      description:
        "A productivity application that helps users organize and track their tasks. Built with React, Redux, and Firebase.",
      imageUrl: taskManagerImage,
      githubLink: "https://github.com/yourusername/task-manager-app",
      liveDemoLink: "https://task-manager-app.com",
      tools: ["React", "Redux", "Firebase"],
    },
    {
      title: "E-Commerce Store",
      description:
        "A complete e-commerce website featuring product listings, a shopping cart, and a checkout system.",
      imageUrl: eCommerceImage,
      githubLink: "https://github.com/yourusername/ecommerce-store",
      liveDemoLink: "https://ecommerce-store.com",
      tools: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Real-Time Chat App",
      description:
        "A chat application that supports real-time messaging, group chats, and user authentication. Created with Firebase and React.",
      imageUrl: chatAppImage,
      githubLink: "https://github.com/yourusername/real-time-chat-app",
      liveDemoLink: "https://real-time-chat-app.com",
      tools: ["React", "Firebase", "WebSocket"],
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive dashboard displaying current and forecasted weather data. Built with React.",
      imageUrl: weatherDashboardImage,
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveDemoLink: "https://weather-dashboard.com",
      tools: ["React", "OpenWeather API", "CSS"],
    },
  ];

  // DELAY ANIMATION

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("entries", entries);
        entries.forEach((entry, index) => {
          console.log("entry", entry, "index", index);
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${
              index * 0.2
            }s`;
            entry.target.classList.add("projects__card--showAnimation");
          }
        });
      },

      {
        threshold: 0.3,
      }
    );

    const cards = document.querySelectorAll(".projects__card--delayAnimation");
    cards.forEach((card) => {
      console.log(card);
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects" id="projects">
      <div className="projects__container">
        <h4 className="projects__subtitle">Crafted with Passion</h4>
        <h2 className="projects__title">Projects</h2>

        <div className="projects__content row">
          {projectsData.map((item, index) => (
            <div
              key={index}
              className="projects__card projects__card--delayAnimation"
            >
              {/* front-side */}
              <div className="projects__card-side projects__card-side--front">
                <img
                  className="projects__image"
                  src={item.imageUrl}
                  alt="Project Screenshot"
                />
                <h3 className="projects__card-title">{item.title}</h3>
                <p className="projects__description">{item.description}</p>
              </div>
              {/* Back-side */}
              <div className="projects__card-side projects__card-side--back">
                <div className="projects__backside">
                  <div className="projects__backside--sideAnimation"></div>
                  <div className="projects__tools">
                    <ul>
                      {item.tools.map((tool, index) => (
                        <li key={index}>
                          <IoCheckmarkOutline />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="projects__modalOpen">
                    <button className="btn  projects__btn--modalOpen">
                      Open
                    </button>
                  </div>
                  <div className="projects__links">
                    <a
                      href="#"
                      className="projects__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub&rarr;
                    </a>
                    <a
                      href="#"
                      className="projects__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo&rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
