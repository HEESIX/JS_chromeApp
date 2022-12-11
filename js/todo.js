const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');
const toDoDeleteBtn = toDoList.querySelectorAll('button');

const toDos = JSON.parse(localStorage.getItem('todos'));

if(toDos !== null){
    toDos.forEach(element => {
        paintToDo(element);
    });
}

function saveToDos(){
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(e){
    e.target.parentElement.remove();
    
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.appendChild(span);
    li.appendChild(button);
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
    toDos.push(newToDo);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);