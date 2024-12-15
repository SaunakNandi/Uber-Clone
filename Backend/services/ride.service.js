const rideModel=require('../models/ride.model')
const mapService=require('./maps.service')
const crypto = require('crypto');
async function getFare(pickup,destination){
    if(!pickup || !destination)
        throw new Error('Pickup and Destination are required')
    const distanceTime=await mapService.getDistance_and_Time(pickup,destination)
    const baseFare = {
        auto: 10,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 10,
        car: 30,
        moto: 20
    };

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto))
    };
    return fare
}

function getOTP(num){
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}
module.exports.createRide=async({user,pickup,destination,vehicleType})=>{
    if(!user || !pickup || !destination || !vehicleType)
        throw new Error('All fields are required')
    const fare=await getFare(pickup,destination)
    const ride=rideModel.create({
        user,
        pickup,
        destination,
        fare:fare[vehicleType],
        otp:getOTP(6)
    })
    return ride
}

