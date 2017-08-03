import { todos } from './data';
import { Todo } from './todo';

export class TodoService {
  todos: Todo[] = todos;

  createTodo(title: string) {
    let todo = new Todo(title);
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if(index > -1) {
      this.todos.splice(index, 1);
    }
  }
}