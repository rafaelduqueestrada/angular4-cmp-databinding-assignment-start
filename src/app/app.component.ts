import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers;

  onGameStarted() {
    console.log('AppComponent -> onGameStarted called!');
    this.numbers = [];
  }

  onGameStoped() {
    console.log('AppComponent -> onGameStoped called!');
    this.numbers = [];
  }
}
