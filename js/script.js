const buttonRef = document.querySelector("#dark")
let box = document.querySelector(".textbox")
let field = document.querySelector("textarea")
let notesArray = [
    {title:"note one", body:"this is my first note"},
    {title:"note two", body:"this is my second note"}
];

function changeText() {
    if (buttonRef.textContent === "Dark Theme"){
        buttonRef.textContent = "Light Theme"
    }else{
        buttonRef.textContent = "Dark Theme"
    }
}

function lightsOff() {
    let element = document.body;
    let note = document.querySelector(".notes")
    element.classList.toggle("darkerMode");
    note.classList.toggle("darkMode");
    text.classList.toggle("darkMode");
}

function hideButtons() {
    box.style.display = "none";
}

function showButtons() {
    if (box.style.display === "none") {
        box.style.display = "block";
    }else{
        field.value=""
    }
}

function saveNote(){
    const noteText = field.value;
    const noteTitle = prompt("Please enter a title");
    const newNote = {title: noteTitle, body: noteText};
    notesArray.push(newNote);
    const noteList = document.querySelector(".note");
    const listItem = document.createElement("li");
    const listItemText = document.createTextNode(noteTitle);
    listItem.appendChild(listItemText);
    noteList.appendChild(listItem)
}
