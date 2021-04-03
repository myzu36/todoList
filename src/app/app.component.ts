import { Component } from '@angular/core';
import { Todo } from './class/todo';
import { TodoService } from './service/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public todoService: TodoService){

  }
}
