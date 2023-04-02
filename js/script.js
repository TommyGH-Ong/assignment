const lightDark = document.querySelector("#dark")
let box = document.querySelector(".textbox")
let field = document.querySelector("textarea")
let notesArray = [
    {title:"note one", body:"this is my first note"},
    {title:"note two", body:"this is my second note"}
];
let noteList = document.querySelector(".note");

function lightsOff() {
    let element = document.body;
    let note = document.querySelector(".notes")
    element.classList.toggle("darkerMode");
    note.classList.toggle("darkMode");
    field.classList.toggle("darkMode");
}

function changeText() {
    if (lightDark.textContent === "Dark Theme"){
        lightDark.textContent = "Light Theme"
    }else{
        lightDark.textContent = "Dark Theme"
    }
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
    const listItem = document.createElement("li");
    const listItemText = document.createTextNode(noteTitle);
    listItem.appendChild(listItemText);
    noteList.appendChild(listItem)
}

function noteDisplay(event){
    if (event.target.tagName === "LI"){
        const noteTargetTitle = event.target.textContent;
        const noteTarget = notesArray.find(element => element.title === noteTargetTitle);
        field.value = noteTarget.body;
    }
}

noteList.addEventListener("click", noteDisplay);