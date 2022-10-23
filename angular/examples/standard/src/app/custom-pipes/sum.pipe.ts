import {Pipe, PipeTransform} from '@angular/core';

// INTERESTING: Pipes for processing data within the view
//              This pipe is pure so will only be called when it's input data is different
@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  constructor() {
    console.log('Creating Sum Pipe');
  }

  transform(numbers: number[]): any {
    console.log('- Performing Sum Transform');
    return numbers.reduce((total, item) => total + item);
  }
}
