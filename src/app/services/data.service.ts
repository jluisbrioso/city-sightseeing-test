import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private numberGenerator$: Observable<number>;

  constructor() {
    this.numberGenerator$ = Observable.create( (obs) => {
      let currentValue = 1;
      let increment = 1;
      setInterval(() => {
        currentValue += increment;
        if (currentValue <= 0 || currentValue >= 20) {
          increment = increment * -1;
        }
        obs.next(currentValue);
      }, 500);
    });
  }

  getGraphValues(): Observable<number> {
    return this.numberGenerator$;
  }
}
