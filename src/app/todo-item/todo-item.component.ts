import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todos/models/todo';
import { TodoServiceService } from '../todo-service.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed

    }
    return classes;
  }
  onToggle(todo) {
    // toggle UI
    todo.completed = !todo.completed;
    console.log('todo--')
    //toggle server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
    console.log('Delete');
  }
}
