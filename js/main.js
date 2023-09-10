const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteAllBtn = document.querySelector('.delete-all');
const deleteBtn = document.getElementsByClassName('.delete-note');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const title = document.querySelector('#title');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');
const date = document.querySelector('.date');

let selectedValue;
let cardID = 0;

const noteCleaner = () => {
	textArea.value = '';
	title.value = '';
	category.selectedIndex = 0;
	notePanel.style.display = 'none';
};

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	error.style.visibility = 'hidden';
	noteCleaner();
};

const actualDate = () => {
	const now = new Date();
	const day = now.getDate();
	const month = now.getMonth() + 1;
	const year = now.getFullYear();
	const hour = now.getHours();
	const minute = now.getMinutes();

	let formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

	const time = `${day}/${month}/${year} ${hour}:${formattedMinute}`;
	return time;
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);
	const time = actualDate();

	newNote.innerHTML = `<div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note" onclick="deleteNote(${cardID})">
    <i class="fa-solid fa-circle-xmark"></i>
    </button>
    </div>
    <div class="note-body">
	<h4>${title.value}</h4>
    <p>${textArea.value}</p>
    </div>
    <div class="note-footer">
    <p class="date">${time}</p>
    </div>`;

	noteArea.appendChild(newNote);
	cardID++;

	noteCleaner();
	checkColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
	console.log(selectedValue);
};

const addNote = () => {
	if (
		textArea.value !== '' && title.value !== '' &&
		category.options[category.selectedIndex].value !== '0'
	) {
		createNote();
		error.style.visibility = 'hidden';
	} else {
		error.style.visibility = 'visible';
	}
};

const checkColor = (note) => {
	switch (selectedValue) {
		case 'Shopping':
			note.style.backgroundColor = 'rgb(154,205,50)';
			break;
		case 'Work':
			note.style.backgroundColor = 'rgb(255, 243, 0)';
			break;
		case 'Others':
			note.style.backgroundColor = 'rgb(255,105,180)';
			break;
		case 'Appointment':
			note.style.backgroundColor = 'rgb(0,191,255)';
			break;
		case 'Reminder':
			note.style.backgroundColor = 'rgb(255,170,0)';
			break;
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);
