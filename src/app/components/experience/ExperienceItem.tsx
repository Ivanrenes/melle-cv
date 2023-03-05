import ExperienceItemProps from '../../interfaces/ExperienceItemProps';

export default function ExperienceItem({
  jobTitle, company, startDate, endDate, description,
}: ExperienceItemProps) {
  return (
    <div className="item">
      <div className="meta">
        <div className="upper-row">
          <h3 className="job-title">{jobTitle}</h3>
          <div className="time">
            {startDate}
            {' '}
            -
            {' '}
            {endDate}
          </div>
        </div>
        <div className="company">{company}</div>
      </div>
      <div className="details">
        <p>{description}</p>
      </div>
    </div>
  );
}
