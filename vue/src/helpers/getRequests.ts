import type { TQuestion } from '../types/components.ts';

import { JSONGetRequest } from './baseRequests.js';

export async function GetQuestion (rank : number) : Promise<TQuestion> {
    const jsonObject = await JSONGetRequest<TQuestion>(questionGetURL + '/' + rank);

    return {
        word: jsonObject.word ? jsonObject.word : '',
        rank: jsonObject.rank ? jsonObject.rank : '',
        sentenceWithoutWord: jsonObject.sentenceWithoutWord ? jsonObject.sentenceWithoutWord : '',
        sentenceWithWord: jsonObject.sentenceWithWord ? jsonObject.sentenceWithWord : '',
        sentenceTranslation: jsonObject.sentenceTranslation ? jsonObject.sentenceTranslation : '',
        correctAnswer: jsonObject.correctAnswer ? jsonObject.correctAnswer : '',
        allOptions: jsonObject.allOptions ? jsonObject.allOptions : [],
    };
};
