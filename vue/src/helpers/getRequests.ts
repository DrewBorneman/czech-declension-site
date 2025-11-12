import type { TQuestion, TCount } from '../types/components.ts';

import { JSONGetRequest } from './baseRequests.js';
import { QuestionGetURL, CountURL } from '../consts/routes';

export async function GetQuestion (rank : number) : Promise<TQuestion> {
    const jsonObject = await JSONGetRequest<TQuestion>(QuestionGetURL + '/' + rank);

    return {
        word: jsonObject.word ? jsonObject.word : '',
        rank: rank,
        sentenceWithoutWord: jsonObject.sentenceWithoutWord ? jsonObject.sentenceWithoutWord : '',
        sentenceWithWord: jsonObject.sentenceWithWord ? jsonObject.sentenceWithWord : '',
        sentenceTranslation: jsonObject.sentenceTranslation ? jsonObject.sentenceTranslation : '',
        correctAnswer: jsonObject.correctAnswer ? jsonObject.correctAnswer : '',
        allOptions: jsonObject.allOptions ? jsonObject.allOptions : [],
    };
};

export async function GetCount () : Promise<number> {
    const jsonObject = await JSONGetRequest<TCount>(CountURL);

    return jsonObject.count ? jsonObject.count : -1
};
