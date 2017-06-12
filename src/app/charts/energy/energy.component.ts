import { Component } from '@angular/core';

import { SensorSelectorService } from '../../sensor-selector/sensor-selector.service';

@Component({
  selector: 'chart-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent {
  data: Array<any> = [
    /*{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}*/
  ];

  dataDisplayed = [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}];

  labels: Array<any> = ['Label1', 'Label2', 'Label3', 'Label4', 'Label5', 'Label6', 'Label7'];

  options = {
    responsive: true
  };

  colors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  legend = true;
  type = 'line';

  chartClicked(e) {
    console.log(e);
  }

  chartHovered(e) {
    console.log(e);
  }
  constructor(private sensorSelectorService: SensorSelectorService) {
    this.sensorSelectorService.sensorSelection.subscribe(
      index => this.dataDisplayed = [this.data[index]]
    );
  }

}
