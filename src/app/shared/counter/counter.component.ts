import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    FormsModule,
    NgStyle,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() counter: number = 0;
  isVisible: boolean = false;

  increaseCounter() {
    this.counter++;
    this.isVisible = false;
  }

  decreaseCounter() {
    this.counter--;
    this.checkInput();
  }

  checkInput() {
    if (this.counter < 0) {
      this.isVisible = true;
      this.counter = 0;
    }
  }
}
