import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';

describe('WelcomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have welcome message', () => {
    // How much value does a test like this add?
    // What is the maintenance overhead?

    // const title = fixture.debugElement.query(By.css('p'));
    const message = fixture.nativeElement.querySelector('p');

    expect(message.textContent.trim())
      .toEqual('Welcome to the flights app');
  });
});
