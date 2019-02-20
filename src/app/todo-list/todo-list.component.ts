import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    console.log('%c TodoListComponent -> CONSTRUCTOR : ', 'color: #8A2BE2');
  }

  onToggleTodoComplete(todo: Todo) {
    console.log('%c TodoListComponent -> onToggleTodoComplete => toggleComplete.emit(todo)  : ', 'color: #8A2BE2', todo);
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    console.log('%c TodoListComponent -> onRemoveTodo => remove.emit(todo)  : ', 'color: #8A2BE2', todo);
    this.remove.emit(todo);
  }

}
