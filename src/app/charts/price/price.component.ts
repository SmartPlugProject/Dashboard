import { Component } from '@angular/core';

import { SensorSelectorService } from '../../sensor-selector/sensor-selector.service';

@Component({
  selector: 'chart-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  data: Array<any>;

  dataDisplayed: Array<any>;

  labels: Array<any>;

  options = {
    responsive: true
  };

  colors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(86,200,113,0.4)',
      borderColor: 'rgba(86,200,113,1)',
      pointBackgroundColor: 'rgba(86,200,113,1)',
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
