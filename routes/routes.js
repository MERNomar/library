const express = require('express')
const bookControllers = require('../controller/controllers')
const {auth} = require('../middleware/authjwt')
const router = express.Router()

router.get('/homepage'  , bookControllers.get_homePage)
router.post('/signup'  , bookControllers.signup_post)
router.get('/signup'  , bookControllers.signup_get)
router.get('/login'  , bookControllers.login_get)
router.post('/login'  , bookControllers.login_post)
router.get('/' , auth , bookControllers.main_getter )
router.post('/' , auth , bookControllers.create_book )
router.get('/:id' , auth ,bookControllers.book_delete)



module.exports = router