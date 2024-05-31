const express = require("express")
const restrictedToLoggedInUserOnly = require("../middlewares/auth")
const cookieParser = require("cookie-parser")
// const signup = require("../views/signUp")
const router = express.Router()

router.get("/",(req,res)=>{
    res.render("home")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})

router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/hump",restrictedToLoggedInUserOnly,(req,res)=>{res.send("middleware working")})
module.exports=router;