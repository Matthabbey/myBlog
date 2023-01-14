import express from "express";
import dotenv from 'dotenv'
import connectMongoDB from "./config";

dotenv.config()
connectMongoDB()
const app = express()

app.listen("5000", ()=>{
    console.log("Server is running here")
})