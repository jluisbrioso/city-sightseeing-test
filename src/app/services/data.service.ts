import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICity } from './models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private numberGenerator$: Observable<number>;

  constructor( private http: HttpClient) {
    this.numberGenerator$ = Observable.create( (obs) => {
      let currentValue = 1;
      let increment = 1;
      setInterval(() => {
        currentValue += increment;
        if (currentValue <= 0 || currentValue >= 10) {
          increment = increment * -1;
        }
        obs.next(currentValue);
      }, 500);
    });
  }

  getGraphValues(): Observable<number> {
    return this.numberGenerator$;
  }

  getCities(): Observable<ICity[]> {
    return this.http.get('https://api.city-sightseeing.com/api/location/top')
      .pipe(map(response => {
        const res = response as ICity[];
        res.forEach(city => city.thumbnail = `https://d3hrj27b4bz3ky.cloudfront.net/small/${city.thumbnail}`);
        return res;
      }));
  }

}
