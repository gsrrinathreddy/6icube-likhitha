import User from '../../models/users/User.js';
import bcrypt from 'bcrypt';
export const register = async(req,res)=>{
    const{firstName,lastName,email,mobile,password}=req.body;
    if(!firstName || !lastName|| !email || !mobile || !password )
    return res.status(400).json({message:"all fields are mandatory"});
    const existinguser = await User.findOne({ email });
    if (existinguser)
    return res.status(400).json({message: 'user already exists'   });
    try{
        const hashedpwd = await bcrypt.hash(password, 12)
        const result= await User.create({
            firstName,
            lastName,
            email,
            mobile,
            password:hashedpwd
        });
        console.log(result);
        res.status(201).json({ 'success':`${firstName} successfully registered`});
    }catch (error){
        res.status(500).json
        ({message:error.message});
    }
} 
export const updateByUserId = async (req,res)=>{
    const userId = req.params._id;
    console.log("params",userId)
    const updatedData = {...req.body};
    const filter = {_id:req.params._id}
    try{
        const updatedUser = await User.findOneAndUpdate(filter,updatedData,{new:true})
        console.log(updatedUser)
        if(!updatedUser)
        return res.status(400).json({message:"id does not exists"});
        return res.status(200).json({message:'Us          er updated'});
    }catch (err){
        res.status(500).json({message:err})
    }
}
export const deleteUserById = async (req,res)=>{
    const params = req.params._id;
    const result = await User.deleteOne({_id:req.params._id});
    console.log("result",result) 
    if(result.deletedCount---0)
    return res.status(401).json({message:"The user does not exist"})
    res.status(200).json({message:"the user deleted successfully"})
}
export const getAllUsers = async (req,res) =>{
    const users = await User.find();
    console.log('users',users)
    if(!users)
    return res.status(404).json({message:"there are no users"})
    res.status(200).json({message:"users fetched successfully",data:users})
}