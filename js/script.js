const buttonRef = document.querySelector("#dark")

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
    let text = document.querySelector("textarea")
    element.classList.toggle("darkerMode");
    note.classList.toggle("darkMode");
    text.classList.toggle("darkMode");
}