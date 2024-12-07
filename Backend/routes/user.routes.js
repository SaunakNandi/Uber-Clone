const express=require('express')
const  router=express.Router()
const {body}=require('express-validator')
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    // if min length is not 3 then give the message
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long'),
    // body('mobile').isLength({min:10,max:10}).withMessage('Mobile no. should be active one'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long'),
], userController.registerUser // to perform any action on the validation failed by express-validator we do it inside controller
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password Invalid'),],
    userController.loginUser
)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)
router.post('/logout',authMiddleware.authUser,userController.logoutUser)
module.exports=router