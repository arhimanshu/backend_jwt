const express =require("express")
const cookieparser=require("cookie-parser")
const path=require("path")
const mongoose = require("mongoose")
const mongooseConnect=require("./dB/mongooseConnect")
mongooseConnect().then(()=>app.listen(5000,()=>{console.log("connected & running on PORT","http://localhost:5000/")}))

const staticRoute=require("./routes/staticRoute")
const userRoute=require("./routes/userRoute")

const app= express()
const ejs=require("ejs")
const restrictedToLoggedInUserOnly = require("./middlewares/auth")

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));
  app.use(cookieparser())

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

// app.get("/",(req,res)=>{res.send("hi")})

app.use("/",staticRoute)
app.use("/user",userRoute)
app.use("/asap",restrictedToLoggedInUserOnly,(req,res)=>res.send("hi beutiful"))
