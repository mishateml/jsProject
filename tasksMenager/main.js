//define Ui vars

const form = document.querySelector('#task-form');
const taskList =document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all listeners
loadEventListener();


//load all listeners
function loadEventListener() {
    //dom loader listener
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task
    form.addEventListener('submit', addTask);
    //remove task
    taskList.addEventListener('click',removeTask);
    // clear tasks
    clearBtn.addEventListener('click',clearTasks);
    //filter tasks
    filter.addEventListener('keyup',filterTasks)
}

//add task
function addTask(e) {
  if(taskInput.value === ''){
      alert('add a task');
  }

  //create li element
    const li = document.createElement('li');
  //add class
    li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  //add class
  link.className = 'delete-item secondary-content pointer';
  // Add icon html
  link.innerHTML= '<i class="fa fa-remove"></i>';
  //append the link to li
    li.appendChild(link);

    //store tasks in LS
    storeTasksInLocalStorage(taskInput.value);

  //append li to ul
     taskList.appendChild(li);
    taskInput.value = '';


    e.preventDefault();
}



// store task
function storeTasksInLocalStorage(task) {
    let tasks;
if(localStorage.getItem('tasks') == null){
    tasks = [];
}else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
}
tasks.push(task);
localStorage.setItem('tasks',JSON.stringify(tasks));
}


//remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if (confirm("are you sure?")){

            e.target.parentElement.parentElement.remove();
            removeTaskFromLS(e.target.parentElement.parentElement);
        }
    }
}

//clearTasks
function clearTasks(e) {
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLS();
}
// clear task from LS
function clearTasksFromLS() {
    localStorage.clear();
}
//filter tasks
function filterTasks(e) {
const text = e.target.value.toLowerCase();

document.querySelectorAll('.collection-item').forEach(
   function (task) {
       const item = task.firstChild.textContent;
       if (item.toLowerCase().indexOf(text) != -1){
           task.style.display = 'block';
       }else {
           task.style.display = 'none';
       }
   } 
)
}

// get tasks from LS
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        // console.log(`tsks ${tasks}`);
    }

    tasks.forEach(function (task) {
        //create li element
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        //add class
        link.className = 'delete-item secondary-content pointer';
        // Add icon html
        link.innerHTML= '<i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);
        //append li to ul
        taskList.appendChild(li);
        taskInput.value = '';
    })
}
// Remove task from ls
function removeTaskFromLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') == null){
        tasks = [];
    }else {

        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function (task, index) {
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }

    })
    localStorage.setItem('tasks',JSON.stringify(tasks));

}