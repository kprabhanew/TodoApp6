import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo = new Todo();
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    console.log('%c TodoListHeaderComponent -> CONSTRUCTOR  : ', 'color: #9B541C', this.newTodo);
  }

  ngOnInit() {
  }

  addTodo() {
    console.log('%c TodoListHeaderComponent -> addTodo => add.emit(todo)  : ', 'color: #9B541C', this.newTodo);
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
