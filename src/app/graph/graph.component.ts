import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  // Data to display in the chart
  public data: Array<number> = [];

  // Controls subscription cycle
  private unsub: Subject<any> = new Subject();


  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getGraphValues()
    .pipe(takeUntil(this.unsub)) //tells the subscription to stop (when unsub changes)
    .subscribe((val) => this.data = [...this.data, val]);
  }

  //Lifecycle method to complete subscription
  ngOnDestroy(): any {
    this.unsub.next();//changes subject's value
    this.unsub.complete();
}

}
