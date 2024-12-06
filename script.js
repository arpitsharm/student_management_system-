// variables
let mode = "light"

// functions
const modes = () => {
    const changemode = () => {
        if (mode == "light") {
            mode = "dark"
            document.getElementById("modeid").innerHTML = "Light Mode"
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";

        } else if (mode == "dark") {
            mode = "light"
            document.getElementById("modeid").innerHTML = "Dark Mode"
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }

    document.getElementById("modeid").addEventListener("click", changemode);
}
const todomain = () => {
    const todoForm = document.getElementById('todoForm');
    const todoList = document.getElementById('todoList');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const work = document.getElementById('work').value;

        if (name && work) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${name}</td><td>${work}</td>`;
            todoList.appendChild(newRow);

            // Clear the inputs
            document.getElementById('name').value = '';
            document.getElementById('work').value = '';
        }
    });
}
// function call
modes()
todomain()
