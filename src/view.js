export default class View {
    constructor() {
        this.todoList = document.querySelector('#todos');
    }
    
    // accepts Map<string, string>
    render = (todos) => {
        this.todoList.innerHTML = '';

        todos.forEach((todo, key) => {
            const li = document.createElement('li');
            li.id = key;
            li.innerHTML = `
                <span>${todo}</span>
                <button class="del-btn" id="${key}">X</button>
            `;
            this.todoList.appendChild(li);
        });
    }
}