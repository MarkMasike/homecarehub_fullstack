import User from "../models/user.model.js";

export const register= async(req,res)=>{
   
    try{
      const newUser = new User({
        username:"test",
        email:"test",
        password:"test",
        country:"test",
      });
      await newUser.save();
      res.status(201).send("User created successfully");

    }catch(err){
        res.status(500).send('something went wrong');
    }
}
export const login=(res,req)=>{
   
}
export const logout =(res,req)=>{
   
}