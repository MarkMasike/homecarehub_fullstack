import express from "express"
import mongoose  from "mongoose";
import {} from 'dotenv/config'
 mongoose.set('strictQuery',true);
const app = express();

const connect = async()=>{ 
    try{
      await mongoose.connect(process.env.MONGO)
      console.log('connected to mongodb')
    }catch(error){
        console.log(error);
    }
}


app.listen(8800, ()=>{
    connect()
    console.log("Backend server running")
})