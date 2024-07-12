import axios from 'axios';

export const customizedAxios = axios.create({
    baseURL: 'https://wooyong.shop/',
    headers: {
        "withCredentials": true,
        "Access-Control-Allow-Credentials":"true",
        "Access-Control-Allow-Origin": `http://localhost:8080`,
    },
});