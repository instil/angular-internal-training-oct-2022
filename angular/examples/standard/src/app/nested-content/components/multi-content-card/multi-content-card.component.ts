import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-multi-content-card',
  templateUrl: './multi-content-card.component.html',
  styleUrls: ['./multi-content-card.component.scss']
})
export class MultiContentCardComponent {
  @Input() title = '';
}
