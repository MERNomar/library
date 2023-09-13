const express = require('express')
const bookControllers = require('../controller/controllers')

const router = express.Router()


router.get('/signup' , bookControllers.signup_get)
router.get('/login' , bookControllers.login_get)
router.post('/signup' , bookControllers.signup_post)
router.post('/login' , bookControllers.login_post)
router.get('/' , bookControllers.main_getter )
router.post('/' , bookControllers.create_book )
router.get('/:id' , bookControllers.book_delete)



module.exports = router