import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() gameStarted = new EventEmitter();
  @Output() gameStoped = new EventEmitter();
  @Input() numbers;

  num: number;
  ref;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    console.log('GamecontrolComponent -> startGame called!');
    this.gameStarted.emit();
    this.num = 0;
    this.ref = setInterval(() => this.incrementNumber(), 1000);
  }

  incrementNumber() {
    ++this.num;
    console.log('Number incremented: ' + this.num);

    this.numbers.push(this.num);
    console.log('Number pushed: ' + this.numbers);
  }

  stopGame() {
    console.log('GamecontrolComponent -> stopGame called!');
    clearInterval(this.ref);
    this.gameStoped.emit();
  }
}
