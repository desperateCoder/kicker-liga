import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-occupy-slider',
  templateUrl: './occupy-slider.component.html',
  styleUrls: ['./occupy-slider.component.scss']
})
export class OccupySliderComponent implements OnInit {

  public occupied = false;
  constructor() { }

  ngOnInit() {
  }

  toggleOccupied(): void {
    this.occupied = !this.occupied;
    this.tellServerOccupied(this.occupied);
  }

  tellServerOccupied(isOccupied: boolean){
    //TODO: do something
  }
}
