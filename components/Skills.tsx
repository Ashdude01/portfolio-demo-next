import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Kubernates"
          link="https://kubernetes.io/docs/home/"
        />
        <SkillsInput title="Docker" link="https://docs.docker.com/" />
        <SkillsInput title="Jenkins" link="https://www.jenkins.io/" />
        <SkillsInput title="Ansible" link="https://docs.ansible.com/ansible/latest/index.html" />
        <SkillsInput
          title="Terraform"
          link="https://www.terraform.io/"
        />
        <SkillsInput title="Ubuntu" link="https://docs.ubuntu.com/" />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="MongoDB" link="https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-in_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204524&adgroup=1207264237113792&msclkid=01bb2a2a7efb1f768bde4cd021999ed9" />
        <SkillsInput
          title="MySQL"
          link="https://dev.mysql.com/doc/"
        />
        <SkillsInput title="AWS" link="https://docs.aws.amazon.com/" />
        <SkillsInput title="AZURE" link="https://learn.microsoft.com/en-us/azure/?product=popular" />
        <SkillsInput
          title="Python"
          link="https://www.python.org/"
        />
        <SkillsInput
          title="Java"
          link="https://www.oracle.com/java/technologies/downloads/"
        />
        <SkillsInput title="SonarQube" link="https://docs.sonarsource.com/sonarqube/latest/" />
        <SkillsInput
          title="OWASP"
          link="https://owasp.org/site-documentation/"
        />
        <SkillsInput title="Trivy" link="https://trivy.dev/" />
        <SkillsInput title="Maven" link="https://maven.apache.org/guides/" />
        <SkillsInput title="Nexus" link="https://www.sonatype.com/products/sonatype-nexus-repository" />
        <SkillsInput title="Prometheus" link="https://prometheus.io/docs/prometheus/latest/getting_started/" />
        <SkillsInput title="Grafana" link="https://grafana.com/" />
        <SkillsInput title="GitLab" link="https://docs.gitlab.com/" />
        <SkillsInput title="Circle CI" link="https://circleci.com/" />
        <SkillsInput
          title="Machine Learning"
          link="https://scikit-learn.org/stable/index.html"
        />
        <SkillsInput title="Deep Learning " link="https://d2l.ai/" />
        <SkillsInput title="Computer vision" link="https://opencv.org/" />
        <SkillsInput title="NLP" link="https://www.nltk.org/" />
        <SkillsInput title="Generative Ai" link="https://www.ibm.com/topics/generative-ai" />
      </div>
    </div>
  );
};

export default Skills;
