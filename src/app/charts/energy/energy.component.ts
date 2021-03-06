import { Component } from '@angular/core';

import { SensorSelectorService } from '../../sensor-selector/sensor-selector.service';

@Component({
  selector: 'chart-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent {
  data: Array<any>;

  dataDisplayed: Array<any>;

  labels: Array<any>;

  options = {
    responsive: true
  };

  colors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(0,59,101,0.4)',
      borderColor: 'rgba(0,59,101,1)',
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
    this.labels = this.sensorSelectorService.getLabels();
    this.sensorSelectorService.sensorSelection.subscribe(
      sensor => {
        this.dataDisplayed = [this.sensorSelectorService.getSensorData(sensor)];
      }
    );
  }
}
