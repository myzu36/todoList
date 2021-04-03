import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.scss']
})
export class TodoinputComponent implements OnInit {

  public todoText: string;

  constructor(private todoService: TodoService) { 
    this.todoText = "";
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText="";
  }
}
