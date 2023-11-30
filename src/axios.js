import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
    withXSRFToken: true
});

// Add an interceptor for CSRF cookie on PUT, POST, and DELETE requests
axiosClient.interceptors.request.use(async (config) => {
    if (['put', 'post', 'delete'].includes(config.method.toLowerCase())) {
        await axiosClient.get('/sanctum/csrf-cookie');
    }
    return config;
});

export default axiosClient;