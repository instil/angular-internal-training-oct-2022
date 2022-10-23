import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {FlightViewerComponent} from './flight-viewer.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FlightViewerComponent', () => {
  let component: FlightViewerComponent;
  let fixture: ComponentFixture<FlightViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FlightViewerComponent],
      imports: [HttpClientTestingModule]
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
