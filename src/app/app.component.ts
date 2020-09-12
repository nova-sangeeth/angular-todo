import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Hello there!';

  read_name(name: string) {
    this.name;
  }

  constructor() {
    this.name = 'nova--sangeeth';
  }
}

