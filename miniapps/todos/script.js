const todos = [
    { id: 0, title: "Estudar JavaScript", done: true},
    { id: 1, title: "Fazer exercícios de HTML e CSS", done: false },
    { id: 2, title: "Ler um artigo sobre APIs", done: false },
    { id: 3, title: "Refatorar projeto anterior", done: true },
    { id: 4, title: "Enviar tarefa no Moodle", done: false },
];

function renderTODOS(todos) {
    const todoListDOM = document.getElementById("todo-list");
    todoListDOM.innerHTML = "";

    for (const todo of todos) {
        const itemDOM = document.createElement("li");
        itemDOM.textContent = todo.title;
        itemDOM.setAttribute("name", todo.id)
        if (todo.done) {
            itemDOM.className = "done";
        }
        todoListDOM.appendChild(itemDOM);

        const checkboxDOM = document.createElement("input");
        checkboxDOM.type = "checkbox";
        checkboxDOM.className = "checkbox";
        checkboxDOM.checked = todo.done;
        checkboxDOM.addEventListener("change", changedCheckBox);
        itemDOM.appendChild(checkboxDOM);
    }
}

function filterTODOS(event) {
    const filterValue = event.target.value;
    const filteredTODOS = todos.filter((todo) => {
            return todo.title.toLowerCase().includes(filterValue.toLowerCase())
    });
    renderTODOS(filteredTODOS);
}

function changedCheckBox(event) {
    const itemDOM = event.target.parentElement;
    const todoTarget = todos.find((element) => element.id == itemDOM.getAttribute("name"))
    if (event.target.checked) {
        itemDOM.className = "done";
        todoTarget.done = true;
    } else {
        itemDOM.className = "";
        todoTarget.done = false;
    }
    console.log(todos);
}



renderTODOS(todos)
document.getElementById("filter").addEventListener("input", filterTODOS);

