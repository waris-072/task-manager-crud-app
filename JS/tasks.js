
function editTask(id){
    let task = state.tasks.find(function(t){
        return t.id === id;
    });
    if(task){
        state.editTaskId = task.id;
        taskInput.value = task.task;
        addBtn.innerText = "Update";
    }
}
function deleteTask(id){
    state.tasks = state.tasks.filter(function(t){
        return t.id !== id;
    });
    saveTasks();
}

function toggleTask(id) {
    let task = state.tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
    }
}