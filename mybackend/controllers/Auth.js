
import UserModel from "../models/user.js"
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"




// Hello everyone , from Ritika Gaur , this is our Registration section//
const Register = async(req , res)=>{
    try{
        

const {FullName , email , password}= req.body
const existUser = await UserModel.findOne({email})
if(existUser){
    return res.status(301).json({success:false , message:"User already exist please login"})
}




// here , we will give path for the uploading of our image , through the use of multer.js which is in the middleware folder
 const imagePath = req.file.filename

 console.log(req.file); // Check if the file is being uploaded

 if (!req.file) {
   return res.status(400).json({ error: 'No file uploaded' });
 }



// for making the password secure , we will convert it into hasspassword
const hasepassword = bcryptjs.hashSync(password, 10
)
// remember  , we used hashSync 






// As we are seeing that we requested to the body for the user data 
// now , we wil send it to our database
const NewUser = new UserModel({
    FullName , email , password:hasepassword , profile: imagePath
})

// here , we will save it
await NewUser.save()



// now a success message will be show , i have used post man for api testing , we can all also use thunderclient for this
return res.status(200).json({success:true , message:"User registered successfully" , user:NewUser})

// res.send("hello")

    }
    catch(error){
        console.log(error);
        return res.status(500).json({success:false , message:"Internal server error"})
    }
}






// This will be our Login section

const Login = async(req , res)=>{
    try{



        // if user forget to fill any field
        const {email , password} = req.body
        if(!email || !password){
            return res.status (400).json({success:false , message:"All Fields are required"})
        }



        // firstly , let's find the user
        const FindUser  = await UserModel.findOne({email})
        if(!FindUser){
            return res.status(400).json({success:false , message:"No user found in our database , please register"})
        }

        // after finding the email in the database , then we will compare their password
        const comparepassword = await bcryptjs.compare(password , FindUser.password)

if(!comparepassword){
    return res.status(400).json({success:false , message:"Invalid Password"})
}


// here , we will generate token

const token = jwt.sign({userId:FindUser._id} , process.env.JWT_SECRET)


res.cookie('token' , token,{
    httpOnly:true,
    secure:false,// false isiliye likha because yeh secure https ke liye kaam karta heh
    maxAge: 3*24*60*60*1000
}) 


res.status(200).json({success:true , message:"Login successfully" , user:FindUser , token})
    }
    catch(error){
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}










// This is our LogOut Section



// now this for logout
// const Logout = async(req , res)=>{
//     try{
// res.clearCookie('token');
// res.status(200).json({success:true , message:"Logout successfully" })
//     }catch(error){
//         console.log(error)
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// }

export {Register , Login
    //  Logout
    }


