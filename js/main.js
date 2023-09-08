const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteAllBtn = document.getElementsByClassName('.delete-all');
const deleteBtn = document.getElementsByClassName('.delete-note');


const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardID = 0;

const openPanel = () => { 
    notePanel.style.display = 'flex';
    error.style.visbility = 'hidden';
    textArea.value = '';
    category.selectedIndex = 0;
 }

const closePanel = () => { 
    notePanel.style.display = 'none'

 }

 const createNote = (second) => { third }

 const addNote = () => { 
    if(textArea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        error.style.visbility = 'hidden'
    } else {
        error.style.visibility = 'visible'
    }
  }



 addBtn.addEventListener('click', openPanel);
 cancelBtn.addEventListener('click', closePanel);
 saveBtn.addEventListener('click', addNote);