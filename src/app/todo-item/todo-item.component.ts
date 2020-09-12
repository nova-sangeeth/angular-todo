import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todos/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

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
    todo.completed = !todo.completed;
    console.log('todo--')
  }
  onDelete(todo) {
    console.log('Delete');
  }
}
