//selectors
const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')
//event listeners
todoButton.addEventListener('click',addTodo)
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

