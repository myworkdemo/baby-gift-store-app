// provider.js

import axios from 'axios';

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = 'http://127.0.0.1:3333/api/v1';

const getAll = (resource) => {
    const resp = axios
        .get(`${BASE_URL}/${resource}`)
        .then((response) => {})
        .catch((error) => {});

    return resp;
};
