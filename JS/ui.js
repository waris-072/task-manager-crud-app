
let filterSelect = document.getElementById("filters");

filterSelect.addEventListener("change", function(){
    state.filterType = filterSelect.value;
    renderTasks();
});

function renderTasks(){
    listItems.innerHTML = "";

    let filteredTasks = state.tasks.filter(function(task){
        if(state.filterType === "all") return true;
        if(state.filterType === "completed") return task.completed;
        if(state.filterType === "pending") return !task.completed;
    });

    filteredTasks.forEach(function(task){
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function(){
           toggleTask(task.id);
            renderTasks();
        })

        let span = document.createElement("span");
        span.innerText = task.task.toUpperCase() ;
        if(task.completed){
            span.style.textDecoration = "line-through";
        }
        
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("editBtn");
        editBtn.addEventListener("click", function(){
            editTask(task.id);
        })

        let dltBtn = document.createElement("button");
        dltBtn.innerText = "Delete";
        dltBtn.classList.add("dltBtn");
        dltBtn.addEventListener("click", function(){
            deleteTask(task.id);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(dltBtn);
        listItems.appendChild(li);

    });
}