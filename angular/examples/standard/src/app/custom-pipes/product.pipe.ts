import {Pipe, PipeTransform} from '@angular/core';

// INTERESTING: Pipes for processing data within the view
//              This pipe is impure, so will be called on any change anywhere in the system
@Pipe({
  name: 'product',
  pure: false
})
export class ProductPipe implements PipeTransform {
  constructor() {
    console.log('Creating Product Pipe');
  }

  transform(numbers: number[], scalar = 1): any {
    console.log('- Performing Product Transform');
    return numbers.reduce((total, item) => total * item) * scalar;
  }
}
