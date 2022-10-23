import {Component, Input} from '@angular/core';

// INTERESTING: Attribute component uses [] in the name i.e. [app-quotes-row]
//              This is not allowed by the default linter config but can be changed
@Component({
  selector: '[app-quotes-row]',
  templateUrl: './quotes-row.component.html',
  styleUrls: ['./quotes-row.component.css']
})
export class QuotesRowComponent {
  @Input() source = 'default source text';
  @Input() text = 'default quote text';
}
