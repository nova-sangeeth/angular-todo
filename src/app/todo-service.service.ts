import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }
  getTodos() {
    return [
      {
        id: 1,
        title: 'todo---uu',
        completed: false
      },
      {
        id: 2,
        title: 'todo---uu2',
        completed: true
      },
      {
        id: 3,
        title: 'todo---uu3',
        completed: true
      },
      {
        id: 4,
        title: 'todo---uu4',
        completed: false
      },
      {
        id: 5,
        title: 'todo---uu5',
        completed: false
      },
    ]
  }
}
