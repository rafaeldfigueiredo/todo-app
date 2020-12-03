// initialize variables
let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

const listEl = document.querySelector('#todo-list');
const inputEl = document.querySelector('#todo-input');
const buttonEl = document.querySelector('#addTodoBtn');

// Event to add a item in the todos list and render it
buttonEl.addEventListener('click',
    () => {
        inputEl == '' ? alert('Digite uma tarefa!') :
        todos.push(inputEl.value) // adds the input value on the todos list
        inputEl.value = '' // reset the value on the input
        renderTodos(); 
        saveToStorage();
    })

//Self-explanatory
function renderTodos() {
    listEl.innerHTML = '' //prevents the list to be rendered more than one time
    todos.map(
        (todo) => {
            //Creates an list item to render a todo item from the 'todos' list
            let el = document.createElement('li')
            el.textContent = todo;

            //Creates a anchor tag to delete item
            let delEl = document.createElement('a');
            delEl.setAttribute('href', '#'); delEl.setAttribute('class','del')
            delEl.textContent = 'Excluir';
            var pos = todos.indexOf(todo);
            delEl.setAttribute('onclick', `deleteTodos(${pos})`); // Global variable for deleteTodos function delete the element where it is on the todos list

            //Append the delete button to the element
            el.appendChild(delEl);
            listEl.appendChild(el);
        }
    )
}

function deleteTodos(pos) {
    todos.splice(pos, 1)
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

renderTodos();