import { Component } from '@angular/core';

const todos = [
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
  todos = todos;

  toggle(todo: any) {
    todo.completed = !todo.completed;
  }

  delete(todo: any) {
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
  }
}