import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Exl service private limited"
          subTitle="Process Associate 2024 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="InternsElite"
          subTitle="Machine Learning Engineer intern 2023"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="Machine Learning Engineer 2023"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Freelancer"
          subTitle="Web developer 2022"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
