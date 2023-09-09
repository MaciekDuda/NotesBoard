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

const noteCleaner = () => { 
    textArea.value = '';
	category.selectedIndex = 0;
    notePanel.style.display = 'none';
 }

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	error.style.visibility = 'hidden';
    noteCleaner()
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);

	newNote.innerHTML = `<div class="note-header">
    <h3 class="note-title">${selectedValue} #${cardID+1}</h3>
    <button class="delete-note">
        <i class="fa-solid fa-circle-xmark"></i>
    </button>
</div>
<div class="note-body">
    ${textArea.value}
</div>`;

	noteArea.appendChild(newNote);
	cardID++;

    noteCleaner()
};

const selectValue = () => { 
    selectedValue = category.options[category.selectedIndex].text;
    console.log(selectedValue);
 }

const addNote = () => {
	if (
		textArea.value !== '' &&
		category.options[category.selectedIndex].value !== '0'
	) {
		createNote();
		error.style.visibility = 'hidden';
	} else {
		error.style.visibility = 'visible';
	}
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);


//playground

document.getElementById('czasButton').addEventListener('click', () => {
    const teraz = new Date();
    const dzien = teraz.getDate();
    const miesiac = teraz.getMonth() + 1; // Miesiące są numerowane od 0 do 11, dlatego dodajemy 1
    const rok = teraz.getFullYear();
    const godzina = teraz.getHours();
    const minuta = teraz.getMinutes();

    // Formatowanie czasu w formacie "dzień-miesiąc-rok godzina:minuta"
    const czas = `${dzien}-${miesiac}-${rok} ${godzina}:${minuta}`;

    document.getElementById('czasP').textContent = czas;
});
