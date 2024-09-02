import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const port = 3000;

export async function JSONGetRequest<T> (url: string) : Promise<T> {
    const response: T = await MakeAxiosRequest({
        method: 'get',
        url: url,
        baseURL: `http://localhost:${port}`,
        responseType: 'json',
        headers: {},
    }).then((response) => {
        return response.data;
    });
    return response;
}

// export async function JSONPostRequest (url: string, jsonContent: JSON) : Promise<number> {
//     const response: number = await MakeAxiosRequest({
//         method: 'post',
//         url: url,
//         baseURL: `${url}:${port}`,
//         headers: {"Content-Type": 'application/json',
//             "Content-Encoding": 'utf-8'},
//     }).then(response => response.data);
//     return response;
// }

async function MakeAxiosRequest (config: AxiosRequestConfig) : Promise<AxiosResponse> {
    return axios(config);
}