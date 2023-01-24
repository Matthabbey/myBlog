import axios from "axios";

const baseURL = "http://localhost:5000/"

export const fetchPost = async ()=>{
    try {
        const response = await axios.get(`${baseURL}api/post/`)
        return response
        
    } catch (error) {
        console.log(error)
    }
}