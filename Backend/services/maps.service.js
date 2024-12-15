const axios = require('axios');
const captainModel = require('../models/captain.model');
const apiKey = process.env.GOOGLE_MAPS_API;

/*
1st route involves sending address and corresponding to that address I will get lattitude and longitude
2nd route involves sending the start and destination location and based on that I will get the minimum distance and time required to travel from start to destination
*/

module.exports.getAddressCoordinate = async (address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[ 0 ].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports.getDistance_and_Time=async(origin,dest)=>{
    if(!origin || !dest)
        throw new Error('Origin and Destination are required')
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(dest)}&key=${apiKey}`;
    try {
        const res=await axios.get(url)
        console.log(res.data.rows)
        if(res.data.status==='OK')
        {
            if(res.data.rows[0].elements[0].status==='ZERO_RESULTS') 
                throw new Error('No routes found')
            return res.data.rows[0].elements[0]
        }
        else
            throw  new Error('Unable to fetch distance and time')
    } catch (error) {
        console.log(error)
        throw error
    }
}
module.exports.getSuggestions=async(input)=>{
    if(!input)
        throw new Error('Query is required')
    const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try {
        const response=await axios.get(url)
        if(response.data.status==='OK')
            return response.data.predictions
        else
            throw new Error('Unable to fetch suggestions')
    } catch (error) {
        console.log(error)
        throw error
    }
}