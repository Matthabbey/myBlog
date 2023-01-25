import axios from "axios";
import { useLocation } from "react-router-dom";

const baseURL = "http://localhost:5000/"

export const fetchPost = async ()=>{
    try {
        const response = await axios.get(`${baseURL}api/post/`)
        return response
        
    } catch (error) {
        console.log(error)
    }
}

export const getSinglePost = async (id: string) =>{
    try {
        const res = await axios.get(`${baseURL}api/post/${id}`)
        // console.log(res);
        
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getCategory = async ()=>{
    try {
        const res = await axios.get(`${baseURL}api/post/`)
        console.log(res);
        return res
        
    } catch (error) {
        console.log(error)
    }
}