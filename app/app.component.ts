import { Component } from '@angular/core';

class Todo {
  constructor(public title: string, public completed: boolean = false) {};
}

const todos: Todo[] = [
  {
    title: 'Изучить JavaScript',
    completed: true
  },
  {
    title: 'Изучить Angular 2',
    completed: false
  },
  {
    title: 'Написать приложение',
    completed: false
  }
]

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  title = 'Angular Todo';
  todos: Todo[] = todos;
  newTodoTitle: string = '';

  create() {
    let todo = new Todo(this.newTodoTitle);
    this.todos.push(todo);
    this.newTodoTitle = '';
  }

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    let index = todos.indexOf(todo);

    if(index > -1) {
      todos.splice(index, 1);
    }
  }
}