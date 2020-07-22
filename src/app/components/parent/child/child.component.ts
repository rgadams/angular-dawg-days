import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent {
  @Output() resetCount = new EventEmitter();
  @Input() count;

  constructor() { }

  reset() {
    this.resetCount.emit();
  }
}
