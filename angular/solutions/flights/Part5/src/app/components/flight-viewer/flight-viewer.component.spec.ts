import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightViewerComponent } from './flight-viewer.component';

describe('FlightViewerComponent', () => {
  let component: FlightViewerComponent;
  let fixture: ComponentFixture<FlightViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
