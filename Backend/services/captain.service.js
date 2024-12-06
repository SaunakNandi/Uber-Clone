
const captainModel=require('../models/captain.model')
module.exports.createCaptain=async({
    firstname,lastname,email,password,color,model,plate,capacity,vehicleType
})=>{
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType)
        throw new Error('All fields are required')
    const captain=captainModel.create({
            fullname:{
                firstname,
                lastname
            },
            mobile,
            email,
            password,
            vehicle:{
                color,
                plate,
                model,
                capacity,
                vehicleType,
            }
        })
    return captain
}
