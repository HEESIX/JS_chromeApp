const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');
const toDoDeleteBtn = toDoList.querySelectorAll('button');

function onClickDeleteBtn(e){
    e.target.parentElement.remove();
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.appendChild(span);
    li.appendChild(button);
    button.innerText = '삭제';
    button.addEventListener('click', onClickDeleteBtn);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);