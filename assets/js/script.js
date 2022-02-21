//we are giving the button with id #save-task the name of buttonE1 below.
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// addEventListener will listen for the click and will execute function
var createTaskHandler = function() {
    // it will create a new li element in the html
    var listItemEl = document.createElement("li");
    // we will assign the new element the className to add the styles on the css sheet
    listItemEl.className = "task-item";
    // this is the text that will display when we hit the button to add a new task
    listItemEl.textContent = "This is a new task.";
    // appendChild add the new item to the end of the list.
    tasksToDoEl.appendChild(listItemEl);
};

// on a button click, create a task
buttonEl.addEventListener("click", createTaskHandler);
