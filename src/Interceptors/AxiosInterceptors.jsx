import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "http://127.0.0.1:9191/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//     return config;
//   }
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const refreshToken = localStorage.getItem("refreshToken");

//         if (!refreshToken) {
//           alert("Session expired — please sign in again");
//         }
//         const refreshRes = await axios.post("http://127.0.0.1:9191/", {
//           refresh: refreshToken,
//         });
//         const newAccessToken = refreshRes.data.access;
//         localStorage.setItem("accessToken", newAccessToken);
//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (err) {
//         localStorage.clear();
//         alert("Session expired — please sign in again");
//         window.location.href = "/signIn"; // redirect to login
//         return Promise.reject(err);
//       }
//     }
//     return Promise.reject(error);
//   }  
// );
// export default axiosInstance;

// const refreshToken =(previousApiRequest , refreshTokenRequest) => {
//     // Logic to refresh the token
//     console.log("Refreshing token...");
//      axios.post('/user', {})
//       .then(function (response) {

//         localStorage.setItem("token", response.data.token);

//         api()

//     })
//       .catch(function (error) {
//         console.log("Error refreshing token", error);
//       });
// }
// const api = (payload) => {
//     axios.post('/user', {
//       firstName: 'Fred',
//       lastName: 'Flintstone'})
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         if(error.code === 401){
//             refreshToken(payload, refreshTokenRequest);
//         }
//         console.log(error);
//       });
// }
