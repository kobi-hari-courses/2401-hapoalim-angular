import { Component, inject } from '@angular/core';
import { MY_NUMBER } from './my-number.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly myNumber = inject(MY_NUMBER);

  constructor() {
    console.log('my number is', this.myNumber);
  }
}
