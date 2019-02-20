import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(    
    private todoDataService: TodoDataService
  ) {
    console.log('%c APPCOMPONENT -> CONSTRUCTOR : ', 'background: #093145; color: #FFF');
  }

  public ngOnInit() {
    console.log('%c AppComponent -> ngOnInit : ', 'background: #093145; color: #FFF');
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          console.log('%c AppComponent -> ngOnInit -> Subscribe : ', 'background: #093145; color: #FFF', todos);
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo) {
    console.log('%c AppComponent -> onAddTodo : ', 'background: #093145; color: #FFF', todo);
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          console.log('%c AppComponent -> onAddTodo -> subscribe : ', 'background: #093145; color: #FFF', newTodo);
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onToggleTodoComplete(todo) {
    console.log('%c AppComponent -> onToggleTodoComplete : ', 'background: #093145; color: #FFF', todo);
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(        
        (updatedTodo) => {
          console.log('%c AppComponent -> onToggleTodoComplete -> subscribe - updatedValue : ', 'background: #093145; color: #FFF', updatedTodo);
          // todo = updatedTodo;
        }
      );
  }

  onRemoveTodo(todo) {
    console.log('%c AppComponent -> onRemoveTodo : ', 'background: #093145; color: #FFF', todo);
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => {
          console.log('%c AppComponent -> onRemoveTodo -> subscribe : ', 'background: #093145; color: #FFF', _);
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }
}
