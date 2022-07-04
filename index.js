//selectors
const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')
const filterOption=document.querySelector('.filter-todo')
//event listeners
document.addEventListener('DOMContentLoaded',getTodos)
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)
//function
function addTodo(event){
    //prevent form from submitting
    event.preventDefault()
    //create todo div
    const todoDiv=document.createElement('div')
    //add class to div
    todoDiv.classList.add("todo")
    //create list;
    const newTodo=document.createElement('li')
    newTodo.innerText=todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.append(newTodo)
    //add TODO to localstorage
    saveLocalTodos(todoInput.value)
    //check mark button
    const completedButton=document.createElement('button')
    completedButton.innerHTML="<i class='fa fa-check-circle'</i>";
    completedButton.classList.add('complete-btn')
    todoDiv.append(completedButton)
    //trash button
    const trashButton=document.createElement('button')
    trashButton.innerHTML="<i class='fa fa-trash'</i>";
    trashButton.classList.add('trash-btn')
    todoDiv.append(trashButton)
    //append to list
    todoList.append(todoDiv)
    //clear todo input value
    todoInput.value="";

}
function deleteCheck(e){
    const item=e.target
    //delete
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })   
    }
    if(item.classList[0]==='complete-btn'){
    const todo=item.parentElement
    todo.classList.toggle('completed')
    }
}
function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
           case "all":
            todo.style.display="flex";
           break;
           case "completed":
           if (todo.classList.contains("completed")){
            todo.style.display ="flex";
           }else{
            todo.style.display="none";
           }
           break;
           case "uncompleted":
            if (!todo.classList.contains('completed')){
             console.log(todo.style.display ='flex');
            }else{
             todo.style.display='none';
            } 
            break;
        }
    })
}
function saveLocalTodos(todo){
    //check---hey do i already have thing in there
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))

    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos))
}
function getTodos(){
    
    //check---hey do i already have thing in there
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))

    }
    todos.forEach(function(todo){
    const todoDiv=document.createElement('div')
    //add class to div
    todoDiv.classList.add("todo")
    //create list;
    const newTodo=document.createElement('li')
    newTodo.innerText=todo
    newTodo.classList.add('todo-item')
    todoDiv.append(newTodo)
    //add TODO to localstorage
    //saveLocalTodos(todoInput.value)
    //check mark button
    const completedButton=document.createElement('button')
    completedButton.innerHTML="<i class='fa fa-check-circle'</i>";
    completedButton.classList.add('complete-btn')
    todoDiv.append(completedButton)
    //trash button
    const trashButton=document.createElement('button')
    trashButton.innerHTML="<i class='fa fa-trash'</i>";
    trashButton.classList.add('trash-btn')
    todoDiv.append(trashButton)
    //append to list
    todoList.append(todoDiv)
    })
}
function removeLocalTodos(todo){
    //check---hey do i already have thing in there
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))

    }
}