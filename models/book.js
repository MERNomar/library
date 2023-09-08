const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    book : {type : String , required : true},
    author : {type : String , required : true},
    pageNum : {type : String , required : true},
    readState : {type : String , required : true}
})

const Book = mongoose.model("Book" , BookSchema)

module.exports = Book