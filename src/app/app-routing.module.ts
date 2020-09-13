import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Todo } from './todos/models/todo';
import { TodosComponent } from './todos/todos.component'
import { AboutComponent } from './about/about.component'
const routes: Routes = [
  { path: "", component: TodosComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
