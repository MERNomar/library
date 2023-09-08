const express = require('express')
const bookControllers = require('../controller/controllers')

const router = express.Router()

router.get('/' , bookControllers.main_getter )
router.post('/' , bookControllers.create_book )
router.get('/:id' , bookControllers.book_delete)



module.exports = router