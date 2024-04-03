const entryBox = document.getElementById("entry-box");
const taskList = document.getElementById("task-list");

function addTask(){
    if(entryBox.value === ''){
        alert("Enter task.");
    }
    else{
        let taskRow = document.createElement("li");
        taskRow.classList.add("task");
        taskRow.innerHTML = entryBox.value;
        taskList.appendChild(taskRow);

        let taskRowEditButton = document.createElement("button");
        taskRowEditButton.classList.add("edit");
        taskRowEditButton.innerHTML = "Edit";
        taskRow.appendChild(taskRowEditButton);

        // task_edit.addEventListener("click", function(e){
        //     if (task_edit.innerText == "EDIT") {
        //         task_edit.innerText = "Save";
        //     } else {
        //         console.log("hello test")
        //     }
        // })

        let taskRowDeleteButton = document.createElement("span");

        let deleteButtonAsUnicode = "\u00d7"
        taskRowDeleteButton.innerHTML = deleteButtonAsUnicode;
        taskRow.appendChild(taskRowDeleteButton);
    }
    entryBox.value = '';
    saveData()
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("complete");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();