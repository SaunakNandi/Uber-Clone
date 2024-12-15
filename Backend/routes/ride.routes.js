const express=require('express')
const router=express.Router()
const {body}=require('express-validator')
const rideController=require('../controllers/ride.controller')
const authMiddleware=require('../middlewares/auth.middleware')

// creating ride after user selected start and destination 

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('Invalid Vehicle type'),
    rideController.createRide
)
module.exports=router