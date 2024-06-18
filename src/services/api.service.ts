import axios from "axios";
import {baseURL} from "../constants/urls";

const _apiAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTU5YjY1YTczNmM0Y2UzYjg1MWU4ZWJkOTgzMTQ0NSIsInN1YiI6IjY2NmZlNmU4ZjE4MmU0MTlkYmQxZGNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bMQCcpMp6d0sr6as-D8C9bnCEaK26rOjkOjaLD1iqSE';


const apiService = axios.create({
    baseURL,
    headers: {
        accept: 'application/json'
    }
});

apiService.interceptors.request.use(request => {
    request.headers.Authorization = 'Bearer ' + _apiAccessToken;

    console.log(request.headers.Authorization);

    return request;
});

export {
    apiService
}

