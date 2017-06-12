import { TestBed, inject } from '@angular/core/testing';

import { SensorSelectorService } from './sensor-selector.service';

describe('SensorSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorSelectorService]
    });
  });

  it('should be created', inject([SensorSelectorService], (service: SensorSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
