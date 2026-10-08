function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task == "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    
    let taskText = document.createElement("span");
    taskText.textContent = task;

    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.onclick = function () {
        taskText.style.textDecoration = "line-through";
        taskText.style.opacity = "0.5";
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        li.remove();
    };

    

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);


    document.getElementById("taskList").appendChild(li);

    

    input.value = "";
}