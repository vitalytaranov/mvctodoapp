export default class Model {
    constructor() {
        this.todos = new Map();

        this.init();
    }

    init = () => {
        this.getFromLS();
    }

    getData = () => {
        return this.todos;
    }

    getId = () => {
        return String(Date.now());
    }

    getFromLS = () => {
        const todos = localStorage.getItem('todos');
        if (todos) {
            const obj = JSON.parse(todos);
            this.todos = new Map(Object.entries(obj));
        } else {
            localStorage.setItem('todos', JSON.stringify({}));
        }
    }

    saveToLS = () => {
        const obj = {};
        this.todos.forEach((value, key) => {
            obj[key] = value;
        });
        localStorage.setItem('todos', JSON.stringify(obj));
    }

    addTodo = (todo) => {
        if (todo.length) {
            const id = this.getId();
            this.todos.set(id, todo);
            this.saveToLS();
        }
    }

    removeTodo = (id) => {
        this.todos.delete(id);
        this.saveToLS();
    }
}
