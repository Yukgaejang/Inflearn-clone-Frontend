import axios from 'axios';

export const customizedAxios = axios.create({
    baseURL: 'https://wooyong.shop/',
    headers: {
        "withCredentials": true,
    },
});