// array to store my books  
let myLibrary = [
    { name: "Naruto", writer: "Masashi Kishimoto", pagesNum:1 , readOrnot: "read" },
   ];

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

// function to push the books to the array
function addBookToLibrary() {
    let newbook = new Book(bookName.value , author.value , pageNum.value , readState.checked )
    if (newbook.name === "" || newbook.author === "" || newbook.pagesNum === "") return
    myLibrary.push(newbook)
    newBookCard(newbook)
    hideModal()


}

// function to create new book card and push to the library
function newBookCard(book){
   let bookCard = document.createElement('div')
   bookCard.className = 'books-grid-item'
   booksContainer.appendChild(bookCard)
   console.log(bookCard)
   let bookName = document.createElement('div')
   let bookAuthor = document.createElement('div')
   let bookPages = document.createElement('div')
   let readState = document.createElement('div')
   bookName.innerHTML = book.name
   bookAuthor.innerHTML = book.writer
   bookPages.innerHTML = book.pagesNum
   readState.innerHTML = book.readOrnot
   bookCard.appendChild(bookName)
   bookCard.appendChild(bookAuthor)
   bookCard.appendChild(bookPages)
   bookCard.appendChild(readState)
    
}


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
    
}
