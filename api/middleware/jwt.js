

export const verifyToken =(req,res)=>{
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send("You are not authenticated");
  
    jwt.verify(token,process.env.jWT_KEY, async (err,payload)=>{
     if (err) return res.status(403).send("Token is not valid!");
     req.userID = payload.id;
     req.isSeller = payload.isSeller;
     
    });
};