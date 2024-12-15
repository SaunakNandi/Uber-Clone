const mapService=require('../services/maps.service')
const {validationResult}=require('express-validator')
module.exports.getCoordinates=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
        return res.status(400).json({errors:errors.array()})
    try{
        const {address}=req.query
        const coordinates=await mapService.getAddressCoordinate(address)
        res.status(200).json(coordinates)
    }
    catch(error){
        res.status(404).json({message:'Coordinate not found'})
    }
}

module.exports.getDistanceTime=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
        return res.status(400).json({errors:errors.array()})
    try {
        const {origin,destination}=req.query
        const distanceTime=await mapService.getDistance_and_Time(origin,destination)
        res.status(200).json(distanceTime)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        throw error
    }
}

module.exports.getAutoCompleteSuggestions=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
        return res.status(400).json({errors:errors.array()})
    try {
        const {input}=req.query
        const suggestions=await mapService.getSuggestions(input)
        res.status(200).json(suggestions)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        throw error
    }
}