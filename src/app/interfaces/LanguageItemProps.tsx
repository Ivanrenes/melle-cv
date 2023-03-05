export enum Level {
    NATIVE = 'Native',
    PROFESSIONAL = 'Professional',
    BASIC = 'Basic'
}

export interface LanguageItemProps {
    language: string;
    level: Level | string;
}