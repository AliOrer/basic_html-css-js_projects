const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText == "") return;

    const li = document.createElement("li");
    li.textContent = taskText;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginleft = "10px";
    deleteBtn.addEventListener("click", () => li.remove()) 
    
    li.addEventListener("click", () =>  {
        li.classList.toggle("completed");
});

li.appendChild(deleteBtn);
taskList.appendChild(li);
taskInput.value = ""; 
});