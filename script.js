const entryBox = document.getElementById("entry-box");
const taskList = document.getElementById("task-list");

function addTask(){
    if(entryBox.value === ''){
        alert("Enter task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = entryBox.value;
        taskList.appendChild(li);

        let task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit";
        taskList.appendChild(task_edit);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
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