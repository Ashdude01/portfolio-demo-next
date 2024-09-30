import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={amazonClone.src}
          title="Microservices"
          link="https://github.com/bittush8789/Microservices"
        />
        <ProjectCard
          img={reactBD.src}
          title="3-Tier-DevOps"
          link="https://github.com/bittush8789/3-Tier-Projects"
        />
        <ProjectCard
          img={cyberBlog.src}
          title="Kubernates"
          link="https://github.com/bittush8789/2-Tier-Flask-App/tree/main"
        />
        <ProjectCard
          img={noorShop.src}
          title="Full stack DevOps"
          link="https://github.com/bittush8789/Full-stack-Blogging-App"
        />
        <ProjectCard
          img={dynamicPortfolio.src}
          title="Personal Chat BOT"
          link="https://bittuchatbot8789.streamlit.app"
        />

        <ProjectCard
          img={dashboard.src}
          title="Image to Text "
          link="https://bittuimage.streamlit.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
