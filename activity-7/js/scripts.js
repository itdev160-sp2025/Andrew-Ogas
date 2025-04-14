var taskList = [];

var taskStatus = {
    active: 'active',
    completed: 'completed'
}

function Task (id, name, dueDate, status) {
    this.id = id;
    this.name = name;
    this.dueDate = dueDate;
    this.status = status;
}

function addTaskElement(task){
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);
    var dueDateEl = document.createElement('div');
    var dueDateText = document.createTextNode('Due: ' + task.dueDate);
    // var xButton = document.createElement('button');
    // var xIcon = document.createTextNode('X');

    taskEl.setAttribute('id', task.id);

    taskEl.appendChild(textEl);
    // xButton.appendChild(xIcon);

    listEl.appendChild(taskEl);
    // taskEl.appendChild(xButton);
    if(task.dueDate != ''){
        dueDateEl.setAttribute('class', 'dueDate')
        dueDateEl.appendChild(dueDateText);
        taskEl.appendChild(dueDateEl);
    }
    // xButton.setAttribute('id', (task.id + 'button'));
    // xButton.setAttribute('class', 'shiftButton');
}

function addTask (event) {
    var inputEl = document.getElementById('input-task');
    var dueDateEl = document.getElementById('due-date');
    if (inputEl.value != ''){
        var id = 'item-' + taskList.length;

        var task = new Task(id, inputEl.value, dueDateEl.value, taskStatus.active);
        taskList.push(task);

        addTaskElement(task);

        inputEl.value = '';
        dueDateEl.value = '';
    }
}

function completeTask (event) {
    var taskEl = event.target;
    var id = taskEl.id;
    // var buttonEl = event.target;
    // var getId = buttonEl.id;
    // var id = getId.substring(0, getId.length-6);
    // var taskEl = getElementById(id);

    for(var i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].status = taskStatus.completed;
            taskEl.remove();
            document.getElementById('completed-list').appendChild(taskEl);
            break;
        }
    }
}

// function buttonComplete (event) {
//     var buttonEl = event.target;
//     var getId = buttonEl.id;
//     var taskEl = getElementById(getId.substring(0, getId.length-6));
//     var id = taskEl.id;

//     for(var i = 0; i < taskList.length; i++) {
//         if (taskList[i].id == id) {
//             taskList[i].status = taskStatus.completed;
//             taskEl.remove();
//             document.getElementById('completed-list').appendChild(taskEl);
//             break;
//         }
//     }
// }
function restoreTask (event) {
    var taskEl = event.target;
    var id = taskEl.id;

    for(var i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id){
            taskList[i].status = taskStatus.active;
            taskEl.remove();
            document.getElementById('active-list').appendChild(taskEl);
            break;
        }
    }
}

function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

function init() {
    document.getElementById('add-task').onclick = addTask;

    document.getElementById('input-task').onclick = clickButton;

    document.getElementById('active-list').onclick = completeTask;

    document.getElementById('completed-list').onclick = restoreTask;
}

init();