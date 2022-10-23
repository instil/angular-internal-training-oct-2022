import {Component, HostBinding, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-dom-interaction',
  templateUrl: './dom-interaction.component.html',
  styleUrls: ['./dom-interaction.component.scss']
})
export class DomInteractionComponent {
  messages: string[] = [];

  constructor() {
  }

  // INTERESTING: We can listen to DOM events on the host component.
  @HostListener('click', ['$event'])
  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  private onMouseEvent(e: MouseEvent): void {
    if (e.type === 'mouseenter') {
      this.messages.push(`Mouse Entered at ${e.timeStamp}`);
    } else if (e.type === 'click') {
      this.messages.push(`Mouse Click at ${e.timeStamp}`);
    } else {
      this.messages.push(`Mouse Left at ${e.timeStamp}`);
    }
  }
}
