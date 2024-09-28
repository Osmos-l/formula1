import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.openf1.org/v1',
    timeout: 10000,
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;