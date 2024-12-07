import jwt from "jsonwebtoken"
import UserModel from "../models/user.js"
//  user Login heh ki nhi check karne ke liye
const isLogin = async(req , res ,next)=>{
    try{

        // token mangwaao
        
        const token = req.cookies.token
        console.log('token' , token)
        
        //yahan peh ek condition lga sakte heh ki token mila hi nhi , iska matlab user register hi nhi hua heh
        if(!token){
            return res.status(401).json({message:'Unauthorised : No token provided'})
        }
        
        // abh token ko decode bhi karna padhega
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
        
        // abh userid mil jayegi , abh user ko find karte heh
        const user = await  UserModel.findById(decoded.userId)
        console.log(user)
        
        //user ko dhundho heh ki nhi
        if(!user){
            return res.status(403).json({message:"user not found"})
        }

//know , dekho hum chahate heh ki comment wahi kar paaye j0h logined ho , isseh nhi farak padhta ki admin heh ki user
//comment toh koi bhi kar sakta heh , abh agar token exist hi nhi karta hehmatlab logined hi nhi hhe banda ,
// isiliye yahan hum role nhi check kar rhe

        // if(user.role!='admin'){
        //     return res.status(403).json({message : "user is not an admin"})
        // }

        // finally agar token exist karta heh toh matlab banda logined heh , toh useh entry deh do , i mean req kar loh

        req.user = user
        next()
        }catch(error){
            console.log(error)
            return res.status(403).json({success:false , message:"serbver error"})
}}



export { isLogin}
