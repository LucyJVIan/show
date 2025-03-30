import axios from 'axios';

export const ApiUnisender = axios.create({
    baseURL: 'https://api.unisender.com/ru/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
