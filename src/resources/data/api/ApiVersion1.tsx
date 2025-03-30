import axios from 'axios';

export const ApiVersion1 = axios.create({
    baseURL: '/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});
