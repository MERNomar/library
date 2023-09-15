const jwt = require('jsonwebtoken')

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

module.exports = {auth}