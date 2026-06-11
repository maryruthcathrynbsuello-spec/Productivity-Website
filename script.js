
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById
    ('task-input');
    const addTaskButton = document.getElementById
    ('add-task-btn');
    const taskList = document.getElementById
    ('tasks');


    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (!taskText) {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" class="task-checkbox"> <span>${taskText}</span>` ;

        taskList.appendChild(li);
        taskInput.value = '';
    };

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            addTask(e);
        }
    });
});