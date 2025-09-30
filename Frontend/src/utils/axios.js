import axios from "axios";

const instance = axios.create({
  baseURL: "https://automatic-memory-v6qjq7v66px63p6pj/api",

});

instance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default instance;
