let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("btn");
let listItems = document.getElementById("listItems");

const state = {
    tasks:[],
    editTaskId: null,
    filterType: 'all'
}

loadTasks();
renderTasks();

function addTask(){
    let taskValue = taskInput.value.trim();

    if (taskValue === "") return;
    
    if(editTaskId !== null){
        let task = state.tasks.find(t => t.id == editTaskId)
        task.task = taskValue;

        editTaskId = null;
        addBtn.innerText = "Add";
    }else{
        let taskObj = {id:Date.now(), task:taskValue, completed:false}
        state.tasks.push(taskObj);
    }
    saveTasks();
    renderTasks();
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

