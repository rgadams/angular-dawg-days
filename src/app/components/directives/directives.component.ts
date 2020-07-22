import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.less']
})
export class DirectivesComponent implements OnInit {
  shouldShowList = false;
  radioButtonValue = 'no';
  itemList = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.itemList.push({
        value: i
      });
    }
  }

  updateShowListValue(): void {
    this.shouldShowList = this.radioButtonValue === 'yes';
  }
}
