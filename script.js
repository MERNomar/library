let block = document.querySelector("#block")



let myLibrary = [];

function Book(name , writer , numberOfpages , readOrnot) {
    this.name = name;
    this.writer = writer;
    this.numberOfpages = numberOfpages;
    this.readOrnot = readOrnot;
}

function addBookToLibrary(book) {
    myLibrary = [book.name]

}
let allTommorows = new Book("All Tomorrows" , "C.M. Kösemen" , 111 , "did not read yet" )
addBookToLibrary(allTommorows)
console.log(myLibrary)

function showModal(){
    block.style.display = 'block'
}
function hideModal(){
    block.style.display = 'none'
}
