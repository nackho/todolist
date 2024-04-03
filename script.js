const entryBox = document.getElementById("entry-box");
const taskList = document.getElementById("task-list");

let taskCount = 0;

function addTask(){
    if(entryBox.value === ''){
        alert("Enter task.");
    }
    else{
        let taskRow = document.createElement("li");
        taskRow.classList.add("task");
        taskRow.innerHTML = entryBox.value;
        taskRow.id = `${taskCount++}`;
        taskList.appendChild(taskRow);

        let taskRowEditButton = document.createElement("button");
        taskRowEditButton.classList.add("edit");
        taskRowEditButton.innerHTML = "Edit";
        taskRow.appendChild(taskRowEditButton);

        // TODO: think about where and how to define the input element so it is accessible in the if and else blocks.
        taskRowEditButton.addEventListener("click", function(e){
            if (e.target.innerText === "Edit") {
                e.target.innerText = "Save";

                // TODO: create an input element with current taskRow text as it's value, then appendChild
                // TODO: hide taskRow
            } else {
                // this else block triggers when Save is clicked.
                e.target.innerText = "Edit";

                // TODO: set taskRow innerHTML text to new input element's value.
                // TODO: unhide taskRow. delete input element.
            }
        });

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