// array to store my books  
let myLibrary = [
    {name : "All Tomorrows" , writer : "C.M. Kösemen" , pagesNum : 111 , readOrNot : "did not read yet"} 
];

let bookName = document.querySelector('#name')
let author = document.querySelector('#author')
let pageNum = document.querySelector('#pageNum')
let readState = document.querySelector('#readState')
let submit = document.querySelector('.submitButton')

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
    myLibrary.push(newbook)
}



// function to loob through myLibrary array and display it
function loobThroughLibrary(library){
    
}









//! the modal part
let block = document.querySelector("#block")
function showModal(){
    block.style.display = 'block'
}
function hideModal(){
    block.style.display = 'none'
}
