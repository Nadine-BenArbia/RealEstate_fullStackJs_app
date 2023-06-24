const jwt = require("jsonwebtoken");
const user = require("../model/userSchema");

const isAuth =(req,res,next)=>{
    const authHeader=req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == nul)res.sendstatus(401)

    jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
        console.log(err);
        req.user=user
        next();
    })
}
module.exports=isAuth;