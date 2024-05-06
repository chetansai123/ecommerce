import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app=express();

app.listen(3000,()=>{
    console.log("Run successfully at PORT:3000...");
}).on('error',()=>{
console.log("error occured");
})