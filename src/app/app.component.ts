import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<style>
              button {
                margin-right : 40px;
              }
            </style>
            <h1>Welcome to {{title}}</h1>
            <button (click)="increment()">Increment</button>
            <button (click)="decrement()">Decrement</button>
            <app-child [count] = "counter"></app-child>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Component';

  counter = 5;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
