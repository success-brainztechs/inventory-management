import axios from "axios";

// Create an Axios instance with base config
const axiosConfig = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});


axiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;
