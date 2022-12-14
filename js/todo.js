const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');
const toDoDeleteBtn = toDoList.querySelectorAll('button');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){
    toDos.splice(getIdx(e.target.parentElement), 1);
    saveToDos();
    e.target.parentElement.remove();
}

function getIdx(ele){
    var _i = 0;
    while((ele = ele.previousSibling) !== null ) {
      _i++;
    }
    return _i-1;
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

const saveToDo = localStorage.getItem(TODOS_KEY);

if(saveToDo !== null){
    const parsedToDos = JSON.parse(saveToDo);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item));
}