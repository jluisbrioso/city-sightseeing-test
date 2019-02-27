import { Component, OnInit } from '@angular/core';
import { ICity } from '../services/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  public cities: Array<ICity> = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCities().subscribe(val => this.cities = val);
  }

}
