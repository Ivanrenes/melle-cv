import ExperienceItemProps from '@/app/interfaces/ExperienceItemProps';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ExperienceItem from './ExperienceItem';
import SectionBase from '../base/SectionBase';
import SectionContent from '../base/SectionContent';
import SectionTitle from '../summary/SectionTitle';

interface ExperienceSectionProps {
  experiences: Array<ExperienceItemProps>
}

export default function ExperienceSection({ experiences } : ExperienceSectionProps) {
  return (
    <SectionBase name="experiences">
      <SectionTitle title="EXPERIENCIA" icon={faBriefcase} />
      <SectionContent content="TEST" />
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.jobTitle}
          {...experience}
        />
      ))}
    </SectionBase>
  );
}
