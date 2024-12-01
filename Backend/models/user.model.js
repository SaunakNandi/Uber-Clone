const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be at least 3 characters long']
        },
        lastname:{
            type:String,
            minlength:[3,'last name must be at least 3 characters long']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[12,'Email name must be at least 3 characters long']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{  // live tracking the location of captain
        type:String,
    },

})

const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
    throw new Error('JWT_SECRET environment variable is not defined');
}

userSchema.methods.generateAuthToken=function(){
    console.log(this)
    const token=jwt.sign({_id:this._id},secretKey,{expiresIn:'24h'})
    return token
}
userSchema.methods.comparePassword=async function (password) {
    return await bcrypt.compare(password,this.password)
}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}
const userModel=mongoose.model('user',userSchema)

module.exports=userModel