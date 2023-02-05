// Try to manipulate the link content tag  <a> </a>

 // Firt of the seclet the element you try to manipulate 
 const link = document.querySelector("a");
  console.log(link) 
// Now start to  manipulate it, using property and method to it
 link.textContent =" 10 easy and smart Js projects" 
// change the link itself 
link.href="https://emeritus.org/blog/coding-javascript-project-ideas/"

// Create new html tag element through javacript
const section = document.querySelector("section")
console.log(section)
const parent =document.createElement("b")
parent.textContent="e.g DOM"
console.log(parent)
// Now you can appendChild(),the text will display on
section.appendChild(parent)
const createSourceNode=document.createTextNode("\nFirst knowledge");
console.log(createSourceNode)
// Now you should select the element should display the text 
const seclet = document.querySelector("section")
seclet.appendChild(createSourceNode)
console.log(seclet)

// move element
section.appendChild(parent)

// remove the hello there 
const getITag = document.querySelector("i")
console.log(getITag)
// now let us remove the "hello there "
section.removeChild(getITag)

// remove the whole p tag 

const pElement=document.querySelector("p")

pElement.remove()

// Renomve us the correct one img
const image=document.querySelector("section")
const img =document.querySelector("img")
console.log(image,img)

image.removeChild(img)

// Manipulate the Style sheet
const nav=document.querySelector("nav")
nav.style.color="white"
nav.style.textAlign="center"
nav.style.backgroundColor = 'black';
nav.style.padding = '10px';
const see =nav.setAttribute("manipulation","blue")
console.log(see)
