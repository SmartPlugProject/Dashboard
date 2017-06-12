import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { SensorSelectorModule } from './sensor-selector/sensor-selector.module';

import { AppComponent } from './app.component';
import { EnergyComponent } from './charts/energy/energy.component';

@NgModule({
  declarations: [
    AppComponent,
    EnergyComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    SensorSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
