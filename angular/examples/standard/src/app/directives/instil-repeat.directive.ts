import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

// INTERESTING: Building custom structural directive
@Directive({
  selector: '[appInstilRepeat]' // INTERESTING: The square brackets make this an attribute selector
})
export class InstilRepeatDirective {
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
    console.log('Custom directive created');
  }

  // INTERESING: The input has the same name as the selector so can be assigned to selector
  //             e.g. *appInstilRepeat="<input_value>"
  @Input() set appInstilRepeat(value: number) {
    this.viewContainer.clear(); // INTERESTING: What happens if we comment this line?

    for (let x = 0; x < value; x++) {
      // INTERESTING: Adding elements with data that can be used within the loop
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: x,
        doubleIndex: x * 2
      });
    }
  }
}
