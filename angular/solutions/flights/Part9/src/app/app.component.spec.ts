import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';
import {AppComponent} from './app.component';
import {BlankComponent} from './utility/blank.component';

describe('FlightsAppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: 'flights', component: BlankComponent},
        {path: '', component: BlankComponent}
      ])],
      declarations: [
        AppComponent,
        BlankComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home when nav clicked', fakeAsync(() => {
    // The RoutingTestingModule simplifies working with the Router
    const homeLink = fixture.nativeElement.querySelector('button:nth-of-type(1)');

    homeLink.click();
    tick();

    expect(location.path()).toEqual('/');
  }));

  it('should navigate to flights when nav clicked', fakeAsync(() => {
    const homeLink = fixture.nativeElement.querySelector('button:nth-of-type(2)');

    homeLink.click();
    tick();

    expect(location.path()).toEqual('/flights');
  }));
});
