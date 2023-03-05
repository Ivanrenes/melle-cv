import EducationItemProps from "@/app/interfaces/EducationItemProps";
import EducationItem from "./EducationItem";

interface EducationInfoProps {
    education: Array<EducationItemProps>
  }
export default function EducationInfo({ education }: EducationInfoProps) {
    return (
        <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {education.map((educationItemProps) => (<EducationItem key={educationItemProps.school} {...educationItemProps} />))}
        </div>
    );
    }