import { Component, OnInit } from '@angular/core';
import {CatHttpService} from '../../services/cat-http.service';

@Component({
  selector: 'app-second',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.less']
})
export class CatsComponent implements OnInit {
  catUrl: ImageBitmap;

  constructor(private catHttpService: CatHttpService) { }

  ngOnInit(): void {
    this.getNewCat();
  }

  getNewCat(): void {
    this.catHttpService.getRandomCat().subscribe((response) => {
      this.catUrl = response[0].url;
    });
  }

}
