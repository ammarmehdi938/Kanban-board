import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:9191",
  headers: { "Content-Type": "application/json" },
});

// requestInterceptor
axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const axiosInstanceRequest = error.config;
    if (error.response?.status != 401) {
      return Promise.reject(error);
    }
    if (axiosInstanceRequest._retry) {
      localStorage.clear();
      return Promise.reject(error);
    }
    axiosInstanceRequest._retry = true;
    try {
      const refreshToken = sessionStorage.getItem("refreshToken");
      if (!refreshToken) {
        return Promise.reject(error);
      }
      const response = await axios.post("http://127.0.0.1:9191/refresh_token", {
        refresh: refreshToken,
      });
      const newAccessToken = response.data.access;
      sessionStorage.setItem("accessToken", newAccessToken);
      axiosInstanceRequest.headers[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      return axiosInstance(axiosInstanceRequest);
    } catch (error) {
      sessionStorage.clear();

      return Promise.reject(error);
    }
  }
);
export default axiosInstance;
