import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service'
import { Todo } from '../todos/models/todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    // this.todos = 
    this.todos = this.todoService.getTodos();
  }

}
