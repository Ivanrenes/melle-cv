import { LanguageItemProps, Level } from "@/app/interfaces/LanguageItemProps";
import LanguageItem from "./LanguageItem";

interface LanguageInfoProps {
    languages: Array<LanguageItemProps>
}
export default function LanguageInfo({ languages }: LanguageInfoProps) {

    const levelParsed = (level: Level) => {
        switch (level) {
            case 'Native':
                return Level.NATIVE;
            case 'Professional':
                return Level.PROFESSIONAL;
            case'Basic':
                return Level.BASIC;
            default:
                return Level.BASIC;;
        }
    }

    return (
        <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
                {languages.map((language) => (<LanguageItem key={language.language} language={language.language} level={language.level} />))}
            </ul>
        </div>
    );
}