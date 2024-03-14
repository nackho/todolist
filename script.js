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
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    entryBox.value = '';
}