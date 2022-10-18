import axios from "axios";

const BASE_URL = "http://localhost:8000";
const TIMEOUT = 2500;
const HEADERS = { 
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials" : "true",
    "Access-Control-Allow-Origin" : "http://localhost:8000",
    "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
    
};

const API = axios.create({
    baseURL : BASE_URL,
    // timeout : TIMEOUT,
    headers : HEADERS,
    withCredentials : true,
    
});

export default API;
// const request = axios.create({
//     baseURL : BASE_URL, 
//     timeout : TIMEOUT,
//     withCredentials : true,
//     // headers : {"Access-Control-Allow-Origin" : "*"}
//     // headers : { 
//     //     "Access-Control-Allow-Origin": "http://localhost:8000",
//     //     "Access-Control-Allow-Credentials": true 
//     // },
//     // headers: {
//     //     'Access-Control-Allow-Origin': '*',
//     //     'Access-Control-Allow-Headers': '*',
//     //     'Access-Control-Allow-Credentials': 'true',
        
//     //   }
//     headers: { "Content-Type": `application/json`}
// });

// //요청 인터셉터
// request.interceptors.request.use(
//     config =>{ //요청을 보내기 전에 수행할 로직
//         return config
//     },
//     error =>{
//         //요청 에러가 발생했을 때 수행할 로직
//         // console.log("request");
//         console.error(error); //디버깅
//         return Promise.reject(error);
//     }
// );

// // 응답 리퀘스트
// request.interceptors.response.use(
//     response =>{
//         //응답에 대한 로직 작성
//         const res = response.data
//         return res
//     },

//     error=>{
//         //응답 에러가 발생했을 때 수행할 로직
//         // console.log("response");
//         console.error(error); //디버깅
//         // console.error(error.response.data);
//         return Promise.reject(error);
//     }
// );

// export default request;