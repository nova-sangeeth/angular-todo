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
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  //method to remove from the UI
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Remove from server
    this.todoService.deleteTodo(todo).subscribe();
    console.log('deleted')
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
