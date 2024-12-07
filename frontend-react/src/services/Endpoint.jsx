import axios from "axios";
export const BASE_URL = "http://localhost:5000"
const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});
export const get = (url , params)=>instance.get(url ,{params})                 
export const post = (url , data)=> instance.post(url , data)
export const patch =  (url , data)=> instance.patch(url , data)   
export const dele = (url)=> instance.delete(url)        