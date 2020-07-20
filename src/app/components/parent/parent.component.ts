import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {
  count;

  constructor() { }

  ngOnInit(): void {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  handleReset() {
    this.count = 0;
  }
}
