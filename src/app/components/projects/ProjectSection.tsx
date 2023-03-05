import ProjectItemProps from '@/app/interfaces/ProjectItemProps';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import ProjectItem from './ProjectItem';
import SectionBase from '../base/SectionBase';
import SectionContent from '../base/SectionContent';
import SectionTitle from '../summary/SectionTitle';

interface ProjectsSectionProps {
  projects: Array<ProjectItemProps>
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionBase name="projects">
      <SectionTitle title="PROYECTOS" icon={faArchive} />
      <SectionContent content="TEST" />
      {projects.map((project) => (
        <ProjectItem
          key={project.title}
          {...project}
        />
      ))}
    </SectionBase>
  );
}
