const express = require("express")

const router = express.Router()

const {handleUserSignUp,handleUserLogin} = require("../controller/userFunction")
router.post("/",handleUserSignUp)
router.post("/login",handleUserLogin)


module.exports=router;

 