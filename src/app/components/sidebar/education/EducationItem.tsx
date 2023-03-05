import EducationItemProps from "@/app/interfaces/EducationItemProps";

export default function EducationItem({ school, degree, startDate, endDate }: EducationItemProps) {
    return (
        <div className="item">
            <h4 className="degree">{degree}</h4>
            <h5 className="meta">{school}</h5>
            <div className="time">{startDate} - {endDate}</div>
        </div>
    );
}