import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../class/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }
}
