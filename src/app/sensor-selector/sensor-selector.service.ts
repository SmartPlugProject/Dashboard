import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class SensorSelectorService {

  private sensorsName = ["Todos Sensores", "Geladeira 1", "Ar condicionado Quarto"];

  @Output() sensorSelection = new EventEmitter();


  constructor() { }

  getSensorsName() {
    return this.sensorsName;
  }

  selectSensor(index: number) {
      this.sensorSelection.emit(index);
  }

}
