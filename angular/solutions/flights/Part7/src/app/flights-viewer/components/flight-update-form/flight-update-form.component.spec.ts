import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightUpdateFormComponent } from './flight-update-form.component';

describe('FlightUpdateFormComponent', () => {
  let component: FlightUpdateFormComponent;
  let fixture: ComponentFixture<FlightUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
