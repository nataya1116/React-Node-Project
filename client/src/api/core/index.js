import axios from "axios";

const BASE_URL = "http://localhost:8000";
const TIMEOUT = 2500;

const HEADERS = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials" : "true",
    "Access-Control-Allow-Origin" : "http://localhost:8000",
    "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
}
// const HEADERS = {
    // 'Access-Control-Allow-Origin' : '*',


    //   'Access-Control-Allow-Headers' : 'Original,Content-Type,Authorization,X-Auth-Token',

    //   'Access-Control-Allow-Methods' : 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
    // "Accept": "application/json, text/plain, */*",
    // "Content-Type": "application/json; charset=utf-8",
    // "Accept-Encoding": "gzip, deflate, br",
    // "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    // "Connection": "keep-alive",
    // "Host": "localhost:8000",
    // "If-None-Match": 'W/"12-BcYgyvLk8HbSh4X2niJ8Y3aaOSM"',
    // "Origin": "http://localhost:3000",
    // "Referer": "http://localhost:3000/"
// }

const API = axios.create({
    baseURL : BASE_URL,
    timeout : TIMEOUT,
    // headers : HEADERS,
});
// const API = axios.create();

API.interceptors.request.use(
    config =>{ //요청을 보내기 전에 수행할 로직
        return config
    },
    error =>{
        //요청 에러가 발생했을 때 수행할 로직
        console.error(error); //디버깅
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    response =>{
        //응답에 대한 로직 작성
        // console.log("정상");
        // const state = response?.status;
        // if(state) console.log(state, "state");
        const res = response.data;
        return res
    },
    error=>{
        // 응답 에러가 발생했을 때 수행할 로직
        console.error(error); //디버깅
        return Promise.reject(error);
    }
);


export default API;