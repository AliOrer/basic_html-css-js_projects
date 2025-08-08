//select dom elements
const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");


//load saved notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];



//render all notes
function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;
        notesList.appendChild(li);
    });
}

//save new notes
saveBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText === "") return;

    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    renderNotes();
});



//allow enter key to save notes
noteInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        saveBtn.click();
    }
});



//initial render
renderNotes();