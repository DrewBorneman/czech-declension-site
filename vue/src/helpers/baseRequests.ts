import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const requestURL = "https://www.borneman.me";
//const port = 8000;

export async function JSONGetRequest<T> (url: string) : Promise<T> {
    const response: T = await MakeAxiosRequest({
        method: 'get',
        url: url,
        baseURL: requestURL,
        responseType: 'json',
        headers: {},
    }).then((response) => {
        return response.data;
    });
    return response;
}

export async function JSONPostRequest (url: string, jsonContent: string) : Promise<number> {
    const response: number = await MakeAxiosRequest({
        method: 'post',
        url: url,
        baseURL: requestURL,
        headers: {"Content-Type": 'application/json'},
        data: jsonContent,
    }).then(response => response.data);
    return response;
}

async function MakeAxiosRequest (config: AxiosRequestConfig) : Promise<AxiosResponse> {
    return axios(config);
}