import { LanguageItemProps } from "@/app/interfaces/LanguageItemProps";



export default function LanguageItem ({ language, level } : LanguageItemProps) {
    return (
        <li>
            {language} 
            {' '}
            <span className="lang-desc">({level})</span>
        </li>
    );
}