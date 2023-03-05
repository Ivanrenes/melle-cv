import { faUser } from '@fortawesome/free-solid-svg-icons';
import SectionBase from '../base/SectionBase';
import SectionContent from '../base/SectionContent';
import SectionTitle from './SectionTitle';

interface SummarySectionProps {
  summary: string;
}

export default function SummarySection({ summary } : SummarySectionProps) {
  return (
    <SectionBase name="summary">
      <SectionTitle title="RESUMEN" icon={faUser} />
      <SectionContent content={summary} />
    </SectionBase>
  );
}


