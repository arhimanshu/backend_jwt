const {v4:uuidv4}=require("uuid")
const User = require("../models/userSchema");
const {setUsers} = require("../service/auth");
const handleUserSignUp=async (req,res)=>{
  const  {name,password,email}= req.body;
   const z= await User.create({
        name,email,password}
      )
      console.log(z)
    return res.redirect("/")
    
}

const handleUserLogin=async (req,res)=>{
  const  {password,email}= req.body;
    const user=await User.findOne({
        email,password})
if(!user)
return res.render("/login",{ error:"invalid user or psk"})

const sessionId=uuidv4()
setUsers(sessionId,user)
res.cookie("uid",sessionId)
//ye sessiom id setUser and cookie m daali h becoz ,,jb login krenge tab user k sath 
//ek id set krdenge taki pta lge baad m ki user konsa h ye and cookie m isiliye daali taki 
//middleware use kr ske ie ki konse user ko kis cheez ka access h

    return res.redirect("/")
}
    
module.exports={handleUserSignUp,handleUserLogin}











