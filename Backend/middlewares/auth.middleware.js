const userModel=require('../models/user.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

module.exports.authUser=async (req,res,next)=>{
    console.log(req.headers.authorization)
    const token= req.cookies.token || req.headers?.authorization?.split(' ')[1]
    if(!token)
        return res.status(401).json({message:'Unauthorized'})

    // if suppose the user has stored the token somewhere and try to login after the token got expired so we will check if the token present with him blacklisted or not
    const isBlackListed=await userModel.findOne({token})
    if(isBlackListed)
        return res.status(401).json({message:'Unauthorized'})
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user=await userModel.findById(decoded._id)
        req.user=user
        return next()
    } catch (error) {
        console.log('Problem in auth.middleware')
    }
}