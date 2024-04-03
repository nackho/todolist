const entryBox = document.getElementById("entry-box");
const taskList = document.getElementById("task-list");

function addTask(){
    if(entryBox.value === ''){
        alert("Enter task.");
    }
    else{
        let li = document.createElement("li");
        li.classList.add("task");
        li.innerHTML = entryBox.value;
        taskList.appendChild(li);

        let task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit";
        taskList.appendChild(task_edit);

        // task_edit.addEventListener("click", function(e){
        //     if (task_edit.innerText == "EDIT") {
        //         task_edit.innerText = "Save";
        //     } else {
        //         console.log("hello test")
        //     }
        // })

        let span = document.createElement("span");

        let removeTaskButtonAsUnicode = "\u00d7"
        span.innerHTML = removeTaskButtonAsUnicode;
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