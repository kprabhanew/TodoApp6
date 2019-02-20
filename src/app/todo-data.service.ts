import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  constructor(
    private api: ApiService
  ) {
    console.log('%c TodoDataService -> CONSTRUCTOR : ', 'background: #F26D21; color: #FFF');
  }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    console.log('%c TodoDataService -> addTodo : ', 'background: #F26D21; color: #FFF', todo);
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<Todo> {
    console.log('%c TodoDataService -> deleteTodoById : ', 'background: #F26D21; color: #FFF', todoId);
    return this.api.deleteTodoById(todoId);
  }

  // // Simulate PUT /todos/:id
  // updateTodo(todo: Todo): Observable<Todo> {
  //   console.log('%c TodoDataService -> updateTodo : ', 'background: #F26D21; color: #FFF', todo);
  //   return this.api.updateTodo(todo);
  // }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    console.log('%c TodoDataService -> getAllTodos : ', 'background: #F26D21; color: #FFF');
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<Todo> {
    console.log('%c TodoDataService -> getTodoById : ', 'background: #F26D21; color: #FFF');
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: Todo) {
    console.log('%c TodoDataService -> toggleTodoComplete : ', 'background: #F26D21; color: #FFF', todo);
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
