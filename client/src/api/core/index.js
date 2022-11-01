import axios from "axios";
import { SessionService } from "../../service";

const BASE_URL = "http://localhost:8000";
const TIMEOUT = 2500;

// const HEADERS = {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Credentials" : "true",
//     "Access-Control-Allow-Origin" : "http://localhost:8000",
//     "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
// }

const baseAPI = axios.create({
    baseURL : BASE_URL,
    timeout : TIMEOUT,
    // headers : HEADERS,
});

baseAPI.interceptors.request.use(
    config =>{ //요청을 보내기 전에 수행할 로직
        return config
    },
    error =>{
        //요청 에러가 발생했을 때 수행할 로직
        console.error(error); //디버깅
        return Promise.reject(error);
    }
);

baseAPI.interceptors.response.use(
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

const authAPI = axios.create({
    baseURL : BASE_URL,
    timeout : TIMEOUT,
    // headers : HEADERS,
});

authAPI.interceptors.request.use(
    config =>{ //요청을 보내기 전에 수행할 로직
        const access_token = SessionService.getAccessToken();
        const refresh_token = SessionService.getRefreshToken();

        config.headers = {access_token, refresh_token};
        return config
    },
    error =>{
        //요청 에러가 발생했을 때 수행할 로직
        console.error(error); //디버깅
        return Promise.reject(error);
    }
);

authAPI.interceptors.response.use(
    response =>{
        const res = response.data;
        return res
    },
    error=>{
        // 응답 에러가 발생했을 때 수행할 로직
        console.error(error); //디버깅
        return Promise.reject(error);
    }
);


export { baseAPI, authAPI };