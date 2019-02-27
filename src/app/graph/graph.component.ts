import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getGraphValues().subscribe((val) => console.log(val));
  }

}
