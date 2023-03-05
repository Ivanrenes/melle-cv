import SkillItemProps from '@/app/interfaces/SkillItemProps';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import SectionBase from '../base/SectionBase';
import SectionContent from '../base/SectionContent';
import SectionTitle from '../summary/SectionTitle';
import SkillItem from './SkillItem';

interface SkillSectionProps {
  skills: Array<SkillItemProps>
}

export default function SkillSection({ skills }: SkillSectionProps) {
  return (
    <SectionBase name="skills">
      <SectionTitle title="Skills" icon={faRocket} />
      <SectionContent content="TEST" />
      <div className="skillset">
        {skills.map((skill) => (
          <SkillItem
            key={skill.software}
            {...skill}
          />
        ))}
      </div>

    </SectionBase>
  );
}
