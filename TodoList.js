// Create a  to do list that allow user to add , delect 
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// Create a function that will run in response to the button being clicked.

button.addEventListener("click",eventLister);

function eventLister () {
      const myItem = input.value;
      input.value = '';

      const listItem = document.createElement('li');
      const listText = document.createElement('span');
      const listBtn = document.createElement('button');

      listItem.appendChild(listText);
      listText.textContent = myItem;
      listItem.appendChild(listBtn);
      listBtn.textContent = 'Delete';
      list.appendChild(listItem);

      listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
      });


// Manipulate the Style sheet
const nav=document.querySelector("h1")
nav.style.color="white"
nav.style.textAlign="center"
nav.style.backgroundColor = 'black';
nav.style.padding ='10px';
nav.style.width='250px'
console.log(see)

      input.focus();
    }
eventLister()

// const listText = document.createElement("span");
// const listButton = document.createElement("buton");