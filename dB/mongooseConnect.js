const mongoose = require("mongoose")
const mongooseConnect=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/auth')
    .then(() => {
     console.log('Connected to MongoDB')}).catch((msg)=>{console.log("error",msg)})
 
     
 
 
 };
 

 module.exports = mongooseConnect;