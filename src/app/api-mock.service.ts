import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
    console.log('%c ApiMockService -> CONSTRUCTOR : ', 'background: #C02F1D; color: #FFF');
  }

  public getAllTodos(): Observable<Todo[]> {
    console.log('%c ApiMockService -> getAllTodos : ', 'background: #C02F1D; color: #FFF');
    return Observable.of([
      new Todo({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    console.log('%c ApiMockService -> createTodo : ', 'background: #C02F1D; color: #FFF');
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    console.log('%c ApiMockService -> getTodoById : ', 'background: #C02F1D; color: #FFF');
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    console.log('%c ApiMockService -> updateTodo : ', 'background: #C02F1D; color: #FFF');
    return Observable.of(
      new Todo({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    console.log('%c ApiMockService -> deleteTodoById : ', 'background: #C02F1D; color: #FFF');
    return null;
  }
}
