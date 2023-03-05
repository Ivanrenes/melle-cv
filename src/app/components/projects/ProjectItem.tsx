import ProjectItemProps from '../../interfaces/ProjectItemProps';

export default function ProjectItem({ title, tagline, url }: ProjectItemProps) {
  return (
    <div className="item">
      <span className="project-title"><a href={url} target="_blank" rel="noreferrer">{title}</a></span>
      {' '}
      -
      {' '}
      <span className="project-tagline">{tagline}</span>
    </div>
  );
}
