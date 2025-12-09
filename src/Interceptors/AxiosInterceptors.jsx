import axios from "axios";

const axiosInterceptors = () => {
  axios.interceptors.request.use((request) => {
    console.log("Starting Request", request);
  });
};

export default axiosInterceptors;

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
