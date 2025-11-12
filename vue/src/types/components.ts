export interface TQuestion {
    rank: number;
    word: string;
    sentenceWithoutWord: string;
    sentenceWithWord: string;
    sentenceTranslation: string;
    correctAnswer: string;
    allOptions: string[];
}

export interface TCount {
    count: number;
}
