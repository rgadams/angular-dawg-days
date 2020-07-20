import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatHttpService {
  constructor(private http: HttpClient) { }

  getRandomCat(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': 'd842b293-fbe8-4c92-9261-9d3976fc9979'
      }
    });
  }
}
