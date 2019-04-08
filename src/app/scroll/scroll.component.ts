import { Component, OnInit, HostListener } from '@angular/core';
import { ICity } from '../services/models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  //Displayed Array (Viewable)
  public cities: Array<ICity> = [];

  //Cached Array
  public cachcities: Array<ICity> = [];
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 1)) {
      this.mobileLoad();
    }
  }


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCities().subscribe(val => this.mobileAdapt(val))
  }


  //Initializes view depending on userAgent.
  mobileAdapt(cfetch: Array<ICity>): void{
    if(/mobile/g.test(navigator.userAgent.toLowerCase())){
      this.cachcities = [...cfetch];
      this.mobileLoad();
    } else {
      this.cities = [...cfetch];
    }
  }


  //Adds an item to the view a specified number of times.
  mobileLoad(): void{
    const loadNumber = 5;

    var times = (this.cachcities.length >= 5 ? loadNumber : this.cachcities.length); // if not enough items, it gets the max available

    for(var i = 0; i < times; i++){
      this.cacheToView();
    }
  }


  //Shifts an item from cache to view.
  cacheToView():void{
    this.cities = [...this.cities, this.cachcities.shift()];
  }


}
