// First we need to import axios.js
import axios from 'axios';
// Next we make an 'axiosInstance' of it
const PROD_URL = 'http://vofficeapp.us-east-2.elasticbeanstalk.com/cloudoffice';
const LOCAL_URL = 'http://localhost:9090/baby-gift-store/api';

const axiosInstance = axios.create({
    // .. where we make our configurations
    baseURL: LOCAL_URL
});

// Where you would set stuff like your 'Authorization' header, etc ...
/*
axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("token_id")}`;
*/
export default axiosInstance;
