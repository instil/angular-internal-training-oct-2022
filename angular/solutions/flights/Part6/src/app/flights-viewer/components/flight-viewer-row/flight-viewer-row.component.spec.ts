import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightViewerRowComponent } from './flight-viewer-row.component';

describe('FlightViewerRowComponent', () => {
  let component: FlightViewerRowComponent;
  let fixture: ComponentFixture<FlightViewerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightViewerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightViewerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
