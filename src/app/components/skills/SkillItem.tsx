/* eslint-disable jsx-a11y/control-has-associated-label */

import SkillItemProps from '../../interfaces/SkillItemProps';

export default function SkillItem({ software, progress } : SkillItemProps) {
  return (
    <div className="item">
      <h3 className="level-title">{ software}</h3>
      <div className="progress level-bar">
        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} />
      </div>
    </div>
  );
}
