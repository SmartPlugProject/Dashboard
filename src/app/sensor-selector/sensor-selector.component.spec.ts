import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorSelectorComponent } from './sensor-selector.component';

describe('SensorSelectorComponent', () => {
  let component: SensorSelectorComponent;
  let fixture: ComponentFixture<SensorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
