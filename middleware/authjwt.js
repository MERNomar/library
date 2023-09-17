const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = (req , res , next) => {
    const token = req.cookies.auth;
    if (token){
    jwt.verify(token , 'omar ahmed something' , (err , decodedToken) => {
        if (err) {
            console.log(err)
            res.redirect('/login')  
        } else {
            console.log(decodedToken)
            next()
        }
    })}
    else{
        res.redirect('/login')  

    }
}

const userData =  (req , res , next) => {
    const token = req.cookies.auth;
    if (token){
    jwt.verify(token , 'omar ahmed something' , async (err , decodedToken) => {
        if (err) {
            console.log(err)
            res.locals.user = null
            next()
        } else {
            console.log(decodedToken)
            const user = await User.findById(decodedToken.id)
            res.locals.user = user
            next()
        }
    })}
    else{
        res.locals.user = null
        next()
    }
}

module.exports = {auth , userData}