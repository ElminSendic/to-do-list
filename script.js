
function deleteTask(taskItem) {
    taskItem.remove();
}

function completeTask(taskItem, checkbox) {
    taskItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
    taskItem.style.opacity = checkbox.checked ? "0.5" : "1";
}

function addTask() {
    const taskText = document.getElementById("taskinput").value;
    if (taskText.trim() === "") {
        alert("Unesite tekst zadatka.");
        return;
    }

    const taskItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {
        completeTask(taskItem, checkbox);
    });

    
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon"); 
    deleteIcon.addEventListener("click", function() {
        deleteTask(taskItem);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(taskText));
    taskItem.appendChild(deleteIcon);

    document.getElementById("taskList").appendChild(taskItem);
    document.getElementById("taskinput").value = "";
}


document.getElementById("mybutton").addEventListener("click", function() {
    addTask();
});


document.getElementById("taskinput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function filterTasks(option) {
    const taskList = document.getElementById("taskList").children;
    for (let i = 0; i < taskList.length; i++) {
        const taskItem = taskList[i];
        const checkbox = taskItem.querySelector("input[type='checkbox']");

        if (option === "completed" && checkbox.checked === false) {
            taskItem.style.display = "none"; 
        } else if (option === "incompleted" && checkbox.checked === true) {
            taskItem.style.display = "none"; 
        } else {
            taskItem.style.display = "flex"; 
        }
    }
}

document.getElementById("filterOptions").addEventListener("change", function() {
    const selectedOption = this.value;
    filterTasks(selectedOption);
});

