import {ComponentFixture, TestBed} from '@angular/core/testing';
import {QuotesRowComponent} from './quotes-row.component';
import {By} from '@angular/platform-browser';

describe('QuotesRowComponent', () => {
  let fixture: ComponentFixture<QuotesRowComponent>;
  let component: QuotesRowComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuotesRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesRowComponent);
    component = fixture.componentInstance;
  });

  // INTERESTING: We can access the structure via
  //              - debugElement - abstraction over the element
  //              - nativeElement - the real underlying object e.g. HTMLElement
  it('Should contain two cells', () => {
    const row = fixture.debugElement.children;
    const element1 = row[0].nativeElement;
    const element2 = row[1].nativeElement;

    expect(row.length).toEqual(2);
    expect(element1.tagName).toEqual('TD');
    expect(element2.tagName).toEqual('TD');
  });

  it('Should contain default values', () => {
    // INTERESTING: We can query into the structure
    const source = fixture.debugElement.query(By.css('[data-testid="source"]'));
    const text = fixture.debugElement.query(By.css('[data-testid="text"]'));

    // INTERESTING: detectChanges triggers Angular to perform its updates
    fixture.detectChanges();

    expect(source.nativeElement.textContent).toEqual('default source text');
    expect(text.nativeElement.textContent).toEqual('default quote text');
  });

  it('Supports changing values', () => {
    const row = fixture.nativeElement;
    // INTERESTING: We can query via the native HTMLElements
    const source = row.querySelector('[data-testid="source"]');
    const text = row.querySelector('[data-testid="text"]');
    component.source = 'Picard';
    component.text = 'Make it so!';

    // INTERESTING: detectChanges triggers the HTML update
    fixture.detectChanges();

    expect(source.textContent).toEqual('Picard');
    expect(text.textContent).toEqual('Make it so!');
  });
});
