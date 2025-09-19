import { IconType } from "./enums";

export interface TQuestion {
    rank: number;
    word: string;
    sentenceWithoutWord: string;
    sentenceWithWord: string;
    sentenceTranslation: string;
    correctAnswer: string;
    allOptions: string[];
}
