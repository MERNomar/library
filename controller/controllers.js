const User = require('../models/user')
const Books = require('../models/book')


const create_book = (req , res) => {
    const book = new Books(req.body)
    book
    .save()
    .then(e => {res.redirect('/')})
    .catch(err => {console.log(err)})
}

const main_getter = (req , res) => {
    Books.find().then(books => {
        res.render('index' , {books} )
    })
    .catch(err => {res.send(err)})
}

const book_delete = (req , res) => {
const id = req.params.id
Books.findByIdAndDelete(id)
.then(e => res.redirect('/'))
.catch(err => res.redirect('/'))

}

const login_get = (req ,res) => {
    res.render('login')
}

const signup_get = (req ,res) => {
    res.render('signup')
}

const signup_post = async (req ,res) => {
    const {username , email , password} = req.body
    try { 
        const user = await User.create({username ,email , password})
        res.status(201).json(user)
        
    }catch (err){
        res.status(404).send("user was not created !" +err)
        console.log(err.errors)

    }
}

const login_post = (req ,res) => {
    const {email , password} = req.body

    console.log(email + password)
}

module.exports = {main_getter , create_book , book_delete , login_get , signup_get , signup_post , login_post}