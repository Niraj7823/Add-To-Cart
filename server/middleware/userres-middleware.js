const jwt = require('jsonwebtoken');
const user = require('../model/user-model')
const userrefMidd = async(req,res,next)=>{

const token = req.header("Authorization")

if(!token)
{
    return res.json({message:"token not a provide"})
}
const jwtToken = token.replace("Bearer","").trim()

try{
   const jwtVerified = jwt.verify(jwtToken,process.env.JWT_SECRATE)
   const UserData =  await user.findOne({email:jwtVerified.email}).select({password:0})
   req.user=UserData
   req.userId =UserData._id
   req.token=token
  
    next()
}
catch(error)
{
 console.log(error)
}

}

module.exports=userrefMidd
