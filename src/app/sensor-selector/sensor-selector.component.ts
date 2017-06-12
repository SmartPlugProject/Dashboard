import { Component, EventEmitter, Output } from '@angular/core';

import { SensorSelectorService } from './sensor-selector.service';

@Component({
  selector: 'app-sensor-selector',
  templateUrl: './sensor-selector.component.html',
  styleUrls: ['./sensor-selector.component.css']
})
export class SensorSelectorComponent {

  selectedSensor: string;
  names: string[];

  constructor(private sensorsService: SensorSelectorService) {
      this.names = this.sensorsService.getSensorsName();
      this.selectedSensor = this.names[0];
  }

  selectSensor(idx) {
    this.selectedSensor = this.names[idx];
    this.sensorsService.selectSensor(idx);
  }
}
