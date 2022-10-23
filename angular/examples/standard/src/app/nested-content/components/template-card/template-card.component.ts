import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent {
  @Input() title = '';
  // INTERESTING: We can get reference to content elements
  //              This especially useful for selecting nested templates
  //              for projection in certain locations
  @ContentChild('title') titleTemplate: TemplateRef<any> | null = null;
  @ContentChild('content') contentTemplate: TemplateRef<any> | null = null;
}
