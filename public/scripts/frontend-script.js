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
  






