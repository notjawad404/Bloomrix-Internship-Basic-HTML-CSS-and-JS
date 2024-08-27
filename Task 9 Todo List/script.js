window.addEventListener('load', () => {
    const form = document.querySelector('#todo-form');
    const input = document.querySelector('#add-input');
    const todo_list = document.querySelector('#todolist');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const todo_input = input.value;

        if (!todo_input) {
            alert('Please add a new task');
            return;
        }

        const todo_element = document.createElement('div');
        todo_element.classList.add('todo');

        const todo_checkbox = document.createElement('input');
        todo_checkbox.type = 'checkbox';
        todo_checkbox.checked = false;        
        todo_checkbox.classList.add('todo_checkbox');

        const todo_input_element = document.createElement('input');
        todo_input_element.classList.add('todo-text');
        todo_input_element.type = 'text';
        todo_input_element.value = todo_input;
        todo_input_element.setAttribute("readonly", "readonly");

        const todo_action_element = document.createElement("div");
        todo_action_element.classList.add("actions");

        const todo_edit_element = document.createElement("button");
        todo_edit_element.classList.add("edit-button");
        todo_edit_element.innerText = "Edit";

        const todo_delete_element = document.createElement("button");
        todo_delete_element.classList.add("delete-button");
        todo_delete_element.innerText = "Delete";

        todo_action_element.appendChild(todo_edit_element);
        todo_action_element.appendChild(todo_delete_element);

        todo_element.appendChild(todo_checkbox);
        todo_element.appendChild(todo_input_element);
        todo_element.appendChild(todo_action_element);

        todo_list.appendChild(todo_element);

        input.value = "";

        todo_checkbox.addEventListener('change', () => {
            if (todo_checkbox.checked) {
                todo_checkbox.checked = true;
                todo_input_element.classList.add('strikethrough');
            } else {
                todo_checkbox.checked = false;
                todo_input_element.classList.remove('strikethrough');
            }
        });

        todo_edit_element.addEventListener('click', () => {
            if (todo_input_element.hasAttribute("readonly")) {
                todo_input_element.removeAttribute("readonly");
                todo_input_element.focus();
                todo_edit_element.innerText = "Save";
            } else {
                todo_input_element.setAttribute("readonly", "readonly");
                todo_edit_element.innerText = "Edit";
            }
        });

        todo_delete_element.addEventListener('click', () => {
            todo_list.removeChild(todo_element);
        });

        console.log('Submit form');
    });
});
