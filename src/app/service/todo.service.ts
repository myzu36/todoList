import { Injectable } from '@angular/core';
import { Todo } from '../class/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private nextId: number;

  constructor() { 
    let todos = this.getTodos();
    if (todos.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = todos[todos.length-1].id;
      this.nextId = maxId +1;
    }

  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    // this.todos.push(todo);
    let todos = this.getTodos();
    todos.unshift(todo);
    this.setLocalStroageTodos(todos);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todos') || '{}');
    return localStorageItem? localStorageItem.todos :  [];
  }

  public removeTodo(id: number): void{
    let todos = this.getTodos();
    todos = todos.filter((todo) => todo.id!==id);
    this.setLocalStroageTodos(todos);
  }

  private setLocalStroageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({todos: todos}));
  }
}
