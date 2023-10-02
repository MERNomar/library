   //! the modal part
   let block = document.querySelector("#block")
   function showModal(){
       block.style.display = 'block'
   }
   function hideModal(){
       block.style.display = 'none'
       clearContent()
   }

   document.querySelector(".close").addEventListener('click' , e => {
       hideModal()
   })

   // put a random number as a isbn code 

   
   function getRandomISBN() {
    const randomISBN = Math.floor(Math.random() * 90000000)

    document.querySelector('#isbn').value = randomISBN

   }
   document.querySelector('.rando').addEventListener('click' , (e) => {
    getRandomISBN()
   })

   



