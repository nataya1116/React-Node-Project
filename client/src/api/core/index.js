import axios from "axios";

const BASE_URL = "http://localhost:8000";
const TIMEOUT = 2500;
const request = axios.create({baseURL : BASE_URL, timeout : TIMEOUT});

//요청 인터셉터
request.interceptors.request.use(
    config =>{ //요청을 보내기 전에 수행할 로직
        return config
    },
    error =>{
        //요청 에러가 발생했을 때 수행할 로직
        console.log("request");
        console.log(error); //디버깅
        return Promise.reject(error);
    }
);

// 응답 리퀘스트
request.interceptors.response.use(
    response =>{
        //응답에 대한 로직 작성
        const res = response.data
        return res
    },

    error=>{
        //응답 에러가 발생했을 때 수행할 로직
        console.log("response");
        console.log(error); //디버깅
        return Promise.reject(error);
    }
);

export default request;