const express = require('express')
const bookControllers = require('../controller/book-controllers')
const userControllers = require('../controller/user-controllers')
const {auth , userData} = require('../middleware/authjwt')
const router = express.Router()


router.get('*' , userData)
router.get('/homepage'  , bookControllers.get_homePage)
router.post('/signup'  , userControllers.signup_post)
router.get('/signup'  , userControllers.signup_get)
router.get('/login'  , userControllers.login_get)
router.post('/login'  , userControllers.login_post)
router.get('/logout'  , userControllers.logout_get)
router.get('/' , auth , bookControllers.main_getter )
router.post('/' , auth , bookControllers.create_book )
router.get('/:id' , auth ,bookControllers.book_delete)



module.exports = router