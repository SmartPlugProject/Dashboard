import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { SensorSelectorModule } from './sensor-selector/sensor-selector.module';

import { AppComponent } from './app.component';
import { EnergyComponent } from './charts/energy/energy.component';
import { PriceComponent } from './charts/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    EnergyComponent,
    PriceComponent
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
