import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Options {
  container = 'container';

  readonly containerValues = [
    'container',
    'container-fluid',
    'container-sm',
    'container-md',
    'container-lg',
    'container-xl',
  ];
}
