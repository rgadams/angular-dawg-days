import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Output() resetCount = new EventEmitter();
  @Input() count;

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.resetCount.emit();
  }
}
