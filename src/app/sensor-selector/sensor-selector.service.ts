import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Sensor } from '../../model/sensor.model';

@Injectable()
export class SensorSelectorService {

  private sensorList: Sensor[] = [];
  private sensorsName = ["Todos"];
  private sensorData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Todos'}
    /*{data: [28, 48, 40, 19, 86, 27, 90], label: 'Geladeira 1'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Ar condicionado Quarto'}*/
  ];

  private labels = [
    "12h", "12h15", "12h30", "12h45", "13h", "13h15", "13h30", "13h45"
  ]
  /*private labels = [/*{
    "name": "Todos",
    "timestamps": ["12h", "12h15", "12h30", "12h45", "13h", "13h15", "13h30", "13h45"]
  }];*/

  @Output() sensorSelection = new EventEmitter();

  constructor(private http: Http) {
    this.http.get("http://smart-plug-1.herokuapp.com/sensor/list")
      .map(response => response.json())
      .subscribe(response => {
        for (let sensor of response.sensors) {
          let energy: Array<number> = [];
          let timestamps: Array<Date> = [];
          for (let index in sensor.energy) {
            energy.push(sensor.energy);
            timestamps.push(sensor.value[index].timestamp);
          }
          let s = new Sensor(sensor.id, sensor.name, sensor.device, energy);
          this.sensorList.push(s);
          let graphData = {
            data: s.energy, label: s.name
          };
          console.log(graphData);
          this.sensorsName.push(s.name);
          /*this.labels.push({
            "name": s.name,
            "timestamps": timestamps
          });*/
          this.sensorData.push(graphData);
        }
      });
  }

  getSensorsName() {
    return this.sensorsName;
  }

  getSensorData(sensor: Sensor) {
    return sensor.energy;
  }

  getLabels() {
    //console.log("Labels " + this.labels[index].timestamps);
    return this.labels;
  }

  selectSensor(sensor: Sensor) {
    this.httpGetSensorData(sensor.id);
    this.sensorSelection.emit(sensor.id);
  }

  httpGetSensorData(id) {
    this.http.get(`http://smart-plug-1.herokuapp.com/sensor/searchById/${id}`)
      .map(response => response.json())
      .subscribe(response => {
        let energy = response.energy;
        let timestamps: Array<Date> = [];
        let s = new Sensor(response.id, response.name, response.device, energy);
        let sensorGraphData = this.sensorData.find(function(item) { return item.label == s.name });
        let indexOfSensorGraphData = this.sensorData.indexOf(sensorGraphData);
        this.sensorData.splice(indexOfSensorGraphData, 1);
        this.sensorData.push(sensorGraphData);
      });
  }
}
