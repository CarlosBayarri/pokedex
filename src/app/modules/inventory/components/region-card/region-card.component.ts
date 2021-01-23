import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.scss']
})
export class RegionCardComponent implements OnInit {

  @Input() region: any;
  public name: string;

  constructor() { }

  ngOnInit(): void {
    if (this.region.name.split('-')[1]) {
      this.name = this.region.name.split('-')[1];
      if (this.region.name.split('-')[1] === 'central') { this.name = this.region.name.split('-')[0]; }
    } else {
      this.name = this.region.name;
    }
  }

}
