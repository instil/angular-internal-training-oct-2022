import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lap-counter',
  templateUrl: './lap-counter.component.html',
  styleUrls: ['./lap-counter.component.scss']
})
export class LapCounterComponent implements OnChanges {
  @Input() lap1 = 0;
  @Input() lap2 = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Updating: ', Object.keys(changes).join(', '));
    Object.keys(changes).forEach(key => {
      console.log(`${key}: Prev[ ${changes[key].previousValue} ] Curr[ ${changes[key].currentValue} ]`);
    });
  }
}
