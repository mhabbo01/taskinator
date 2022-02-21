//we are giving the button with id #save-task the name of buttonE1 below.
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

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

    tasksToDoEl.appendChild(listItemEl);
}

// on a button click, create a task
formEl.addEventListener("submit", taskFormHandler);
