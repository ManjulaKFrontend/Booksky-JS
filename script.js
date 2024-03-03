//selecting popu box popup overlay button


var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

//select cancel button popup button

var cancelpopup=document.getElementById("cancel-popup")


cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select container, addbook , book-tiltle, book-author-input, book-description
var container= document.querySelector(".container")
var addbook= document.getElementById("add-book")
var booktitleinput= document.getElementById("book-title-input")
var authorinput= document.getElementById("book-author-input")
var bookdescriptioninput= document.getElementById("book-description-input")



addbook.addEventListener("click",function(event){
    event.preventDefault()

 var div=document.createElement("div")
 div.setAttribute("class","book-container")
 div.innerHTML=`<h2>${booktitleinput.value}</h2>
 <h5>${authorinput.value}</h5>
 <p>${bookdescriptioninput.value}</p>
 <button onclick="deletebook(event)">Delete</button>`
 container.append(div)
 popupoverlay.style.display="none"
 popupbox.style.display="none"







})
///deletebutton

function deletebook(event){

    event.target.parentElement.remove()
}