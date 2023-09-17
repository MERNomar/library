const express = require('express')
const bookControllers = require('../controller/controllers')
const {auth , userData} = require('../middleware/authjwt')
const router = express.Router()


router.get('*' , userData)
router.get('/homepage'  , bookControllers.get_homePage)
router.post('/signup'  , bookControllers.signup_post)
router.get('/signup'  , bookControllers.signup_get)
router.get('/login'  , bookControllers.login_get)
router.post('/login'  , bookControllers.login_post)
router.get('/logout'  , bookControllers.logout_get)
router.get('/' , auth , bookControllers.main_getter )
router.post('/' , auth , bookControllers.create_book )
router.get('/:id' , auth ,bookControllers.book_delete)
router.post('/bulk'  , bookControllers.create_book_bulk)



module.exports = router