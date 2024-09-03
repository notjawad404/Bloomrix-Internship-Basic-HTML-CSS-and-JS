// API module
const fetchTodos= async () =>  {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.error('Failed to fetch todos:', error);
        return [];
    }
}

// Manage todos using closures
const todoManager = () => {
    let todos = [];

    return {
        gettodos: () => todos,
        addtodo: (todo) => {
            todos.push(todo);
        },
        removetodo: (id) => {
            todos = todos.filter(todo => todo.id !== id);
        }
    };
}

// UI module
function rendertodos(todos, container) {
    container.innerHTML = '';
    todos.forEach(todo => {
        
        const li = document.createElement('li');
        li.textContent = todo.title;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            li.remove();
        };
        li.appendChild(removeButton);
        container.appendChild(li);
    });
}

// Main script
document.addEventListener('DOMContentLoaded', async () => {
    const todoListElement = document.getElementById('todo-list');
    const newtodoInput = document.getElementById('new-todo');
    const addtodoButton = document.getElementById('add-todo');

    const todosManager = todoManager();

    const initialtodos = await fetchTodos();
    initialtodos.forEach(todo => todosManager.addtodo(todo));

    rendertodos(todosManager.gettodos(), todoListElement);

    addtodoButton.addEventListener('click', () => {
        const newtodoTitle = newtodoInput.value.trim();
        if (newtodoTitle) {
            const newtodo = { id: Date.now(), title: newtodoTitle };
            todosManager.addtodo(newtodo);
            rendertodos(todosManager.gettodos(), todoListElement);
            newtodoInput.value = '';
        }
    });
});
