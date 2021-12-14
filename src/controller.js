export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.todoList = null;
        this.todoInput = null;
        this.addBtn = null;

        this.init();
    }

    init() {
        this.queryNodes();
        this.addListeners();
        this.render();
    }

    queryNodes() {
        this.todoList = document.querySelector('#todos');
        this.todoInput = document.querySelector('#todoInput');
        this.addBtn = document.querySelector('#addBtn');
    }

    addListeners() {
        this.todoList.addEventListener('click', this.removeTodo);
        this.addBtn.addEventListener('click', this.addTodo);
    }

    removeListeners() {
        this.todoList.removeEventListener('click', this.removeTodo);
        this.addBtn.removeEventListener('click', this.addTodo);
    }

    removeTodo = (e) => {
        if (e.target.classList.contains('del-btn')) {
            this.model.removeTodo(e.target.id);
            this.render();
        }
    }

    addTodo = () => {
        if (this.todoInput.value) {
            this.model.addTodo(this.todoInput.value);
            this.render();
        }
    }

    render = () => {
        this.view.render(this.model.getData());
    }    
}
