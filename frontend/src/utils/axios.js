


import axios from "axios";

// apna axios instance banao
const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend ka base URL
});

// har request ke sath token automatic bhejna
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
