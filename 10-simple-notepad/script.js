//select dom elements
const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");
const clearAllBtn = document.getElementById("clearAllBtn");




//load saved notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];





//render all notes
function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;
        // notesList.appendChild(li);


        //delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        });

        li.appendChild(deleteBtn);
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



//clear all notes
clearAllBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all notes?")) {
        notes = [];
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
    }
});




//initial render
renderNotes();