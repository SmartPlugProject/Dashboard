import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorSelectorService } from './sensor-selector.service';
import { SensorSelectorComponent } from './sensor-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SensorSelectorComponent],
  declarations: [SensorSelectorComponent],
  providers: [SensorSelectorService]
})
export class SensorSelectorModule { }
