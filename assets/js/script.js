//we are giving the button with id #save-task the name of buttonE1 below.
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskIdCounter = 0;

// addEventListener will listen for the click and will execute function
var taskFormHandler = function() {
    // prevents the default browser behavior
    event.preventDefault();
    //we are selecting an <input> element on the page that has a name attribute set to "task-name".
    //adding .value on the end of this will grab the value of the input of the user
    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //console.dir will have the console display data as a JavaScript object, show virtually everything about the element.
    // console.dir(taskNameInput);

    //check if inut values are empty strings, ! checks if the value is false
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    //resets the form each time a task is added
    formEl.reset();

    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
    
};

var createTaskEl = function(taskDataObj) {
    // it will create a new li element in the html
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // we will assign the new element the className to add the styles on the css sheet
    taskInfoEl.className = "task-info";
    // this is the text that will display when we hit the button to add a new task
    //in here we are adding taskNameInput which will give us the value we retreived above
    //add html content to div, must use innerHTML to insert this
    listItemEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    // appendChild add the new item to the end of the list.
    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);


    tasksToDoEl.appendChild(listItemEl);

    //increase task counter for next unique id
    taskIdCounter++;
}

var createTaskActions = function(taskId) {
    //this will create a div which will act as a container for the other elements
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    
    //create edit button
    var editButtonEl = document.createElement("button");
    //add text to the button
    editButtonEl.textContent = "Edit";
    //give the button a class name for css styling
    editButtonEl.className = "btn edit-btn";
    //give the button an id
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    //create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute = ("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);
    
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {
        //create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        //append to select
        statusSelectEl.appendChild(statusOptionEl);
    }
    
    return actionContainerEl;

}

// on a button click, create a task
formEl.addEventListener("submit", taskFormHandler);
