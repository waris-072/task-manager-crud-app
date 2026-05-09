function loadTasks() {
    try{
        let data = localStorage.getItem("tasks");
        state.tasks = data ? JSON.parse(data) : [];
    } catch(e){
        state.tasks = [];
    }
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
}
