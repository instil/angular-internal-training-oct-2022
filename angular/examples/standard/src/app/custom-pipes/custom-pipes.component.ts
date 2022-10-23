import {Component} from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent {
  numbers = [1, 2, 3];

  // INTERESTING: Mutation - will not get picked up by pure pipe
  addNumber(): void {
    this.numbers.push(this.numbers.length + 1);
  }

  // INTERESTING: Immutable operations - new array is created
  //              This will be detected by a pure pipe
  removeNumber(): void {
    const newNumbers = [...this.numbers];
    newNumbers.pop();
    this.numbers = newNumbers;
  }

  doNothing(): void {
  }
}
