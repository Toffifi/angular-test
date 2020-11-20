import { Todo, TodosService } from './../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todosService: TodosService) { }
  todos: Todo[] = [];
  loading = false;
  todoTitle = '';
  error = '';

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo(): void {
    if (!this.todoTitle.trim()){
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };

    this.todosService.addTodo(newTodo)
      .subscribe(response => {
        this.todos.push(response);
        this.todoTitle = '';
      });
  }

  fetchTodos(): void {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      });
  }
  removeTodo(id: number): void {
    this.todosService.removeTodo(id)
      .subscribe(response => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }
  completeTodo(id: number): void {
    this.todosService.completeTodo(id)
      .subscribe(response => {
        this.todos.find(t => t.id = response.id).completed = true;
      }, error => {
        this.error = error.message;
      }
      );
  }

}
