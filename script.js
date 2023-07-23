// array to store my books  
let dataSetNumber = 0;
let myLibrary = [
    { name: "1", writer: "Masashi Kishimoto", pagesNum:1 , readOrnot: "read" },
   
   ];

let formTitle = document.querySelector('.modal-title')
let bookName = document.querySelector('#name')
let author = document.querySelector('#author')
let pageNum = document.querySelector('#pageNum')
let readState = document.querySelector('#readState')
let submit = document.querySelector('.submitButton')
let booksContainer = document.getElementById('books-grid')
submit.addEventListener('click' , e => {
 addBookToLibrary() 
})



// the constructor function
function Book(name , writer , pagesNum , readOrnot) {
    this.name = name;
    this.writer = writer;
    this.pagesNum = pagesNum;
    this.readOrnot = readOrnot;
}

// function to push the books to the array and checking valeus before that
function addBookToLibrary() {
    let newbook = new Book(bookName.value , author.value , pageNum.value , readState.checked )
    if (newbook.name === "" || newbook.author === "" || newbook.pagesNum <= 0) return formTitle.innerHTML = "fill the required fields" , formTitle.style.color = 'red'
    if (readState.checked === true) {readState.checked = "read"}
    if (readState.checked === false) {readState.checked = "not read"}
    myLibrary.push(newbook)

    newBookCard(newbook)
    hideModal()
}

// function to create new book card and push to the library by useing the //* addBookToLibrary()
function newBookCard(book){
    // declaring all the needed values
   let bookCard = document.createElement('div')
   let bookName = document.createElement('div')
   let bookAuthor = document.createElement('div')
   let bookPages = document.createElement('div')
   let readState = document.createElement('div')

// adding the name , state , authors details to the cards and the array
   bookCard.setAttribute('data-cardnum' , dataSetNumber)
   bookCard.className = 'books-grid-item'
   bookName.innerHTML = book.name
   bookAuthor.innerHTML = book.writer
   bookPages.innerHTML = book.pagesNum
   readState.innerHTML = book.readOrnot
   booksContainer.appendChild(bookCard)

   //appending childs to the book card 
   bookCard.appendChild(bookName)
   bookCard.appendChild(bookAuthor)
   bookCard.appendChild(bookPages)
   bookCard.appendChild(readState)

   dataSetNumber = dataSetNumber+1

   // delete the book button 
   removeCard(bookCard)

}

// remove button function 
function removeCard(bookCard){

    let deleteBook = document.createElement('div')
    deleteBook.innerHTML = "Remove"
    deleteBook.className = 'deleteBook'
    bookCard.appendChild(deleteBook)

    deleteBook.addEventListener('click' , e => {
        bookCard.remove()
        myLibrary.pop(bookCard.dataset.cardnum)
        console.log()

    })
}


// change the read state 
 

// function to loob through myLibrary array and display it
function loobThroughLibrary(library){
    for(let i = 0; i < library.length; i++){
        newBookCard(library[i])
    }
}

loobThroughLibrary(myLibrary)




//! the modal part
let block = document.querySelector("#block")
function showModal(){
    block.style.display = 'block'
}
function hideModal(){
    block.style.display = 'none'
    clearContent()
}
function clearContent(){
    bookName.value = ""
    author.value = ""
    pageNum.value = ""
    readState.checked = false
}
document.querySelector(".close").addEventListener('click' , e => {
    hideModal()
})
