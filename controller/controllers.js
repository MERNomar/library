const Book = require('../models/book')
const Books = require('../models/book')

const create_book = (req , res) => {
    console.log(req.body)
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
console.log(id)
Book.findByIdAndDelete(id)
.then(e => res.redirect('/'))
.catch(err => res.redirect('/'))

}

module.exports = {main_getter , create_book , book_delete}