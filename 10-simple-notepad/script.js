//select dom elements
const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");


//load saved notes from localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

