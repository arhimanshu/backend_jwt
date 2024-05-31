// const { getUsers } = require("../service/auth")

// const restrictedToLoggedInUserOnly=async(req,res,next)=>{
// const userId=req.cookies.uid
// //cokkie retrive krni ho to req.cookies hi use krte h (ask chat gpt)
// if(!userId) return res.redirect("/user/login")

//  const user= getUsers(userId)
//  if(!user) return res.send("please login first")
//  req.user=user
// //clinet par bhej rhe h "user" ko ,jo hume mil gya authentication se ie req.user m user bhej rhe h
// next();
// }
// // export default restrictedToLoggedInUserOnly;
// module.exports=restrictedToLoggedInUserOnly


const { getUser } = require("../service/auth");

const restrictedToLoggedInUserOnly = (req, res, next) => {
    const userId = req.cookies.uid;

    if (!userId) {
        return res.redirect("/user/login");
    }

    const user = getUser(userId); // Assuming getUser is synchronous
//we are using getuser otherwise someone will just put any number by going in browser and putting a random number in cookie ,thats why we r verifying that there is a user present with that cookie
    if (!user) {

        res.redirect("/login",404)
        // return res.redirect(",/user/login");
    }
    
    req.user = user;
    next();
};

module.exports = restrictedToLoggedInUserOnly;
