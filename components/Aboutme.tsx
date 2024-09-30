import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        I am a DevOps Engineer with a strong skill set in Kubernetes, Docker, Ansible, Terraform, Jenkins, and Git. My experience includes building and managing scalable cloud infrastructures on platforms like AWS and Azure. I excel in automating deployment processes and streamlining CI/CD pipelines to enhance software delivery efficiency. Proficient in Python scripting, I leverage automation to improve operational workflows and system performance. I have a solid understanding of Ubuntu environments, ensuring reliable and secure deployments. By integrating DevSecOps practices, I prioritize security and compliance throughout the development lifecycle. I am passionate about learning new technologies and continuously improving my skills to deliver robust and efficient solutions that drive organizational success.
        </p>
        {/* <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p> */}

      </div>
    </div>
  );
};

export default Aboutme;
