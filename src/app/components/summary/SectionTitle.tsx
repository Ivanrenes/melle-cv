import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SectionTitleProps {
  title: string;
  icon: IconDefinition;
}

export default function SectionTitle({ title, icon } : SectionTitleProps) {
  return (
    <h2 className="section-title">
      <span className="icon-holder"><FontAwesomeIcon icon={icon} /></span>
      {title}
    </h2>
  );
}
