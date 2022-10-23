import {Directive, HostBinding, HostListener} from '@angular/core';

const colors = [
  'honeydew',
  'lightpink',
  'lightgreen',
  'lightblue',
  'cornsilk'
];

@Directive({
  selector: '[appRollColourChange]'
})
export class RollColourChangeDirective {
  private currentColor = 0;

  // INTERESTING: We can bind values or properties to an attribute on
  //              the host component.
  @HostBinding('style.background')
  get color(): string {
    return colors[this.currentColor];
  }

  @HostListener('mousewheel')
  changeColor(): void {
    this.currentColor = (this.currentColor + 1) % colors.length;
  }
}
