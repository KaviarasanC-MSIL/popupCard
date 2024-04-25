//selecting popupbx,overlay & button 
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addPopupbutton = document.getElementById("add-popup-button")
var cancelbtn = document.getElementById('cancel-popup')

addPopupbutton.addEventListener("click",function(){
    popupbox.style.display ="block";
    popupoverlay.style.display="block";
});

cancelbtn.addEventListener('click',function(event){
    event.preventDefault()
    popupoverlay.style.display="none";
    popupbox.style.display ="none";
})


// select container ,add-book,book-title-input,book-author-input,book-description-input

var container = document.querySelector('.container')
var addbook = document.getElementById('add-book')
var booktitleinput = document.getElementById('book-title-input')
var bookauthorinput = document.getElementById('book-author-input')
var bookdescriptioninput = document.getElementById('book-description-input')
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2> 
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deleteBook(event)" >Delete</button>
  `
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display ="none";
})

function deleteBook(event) {
    event.preventDefault()
   event.target.parentElement.remove()
}